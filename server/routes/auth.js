const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

const upload = multer({ storage: storage });

router.post('/upload-avatar', upload.single('avatar'), (req, res) => {
    const userId = req.body.userId;
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const avatarUrl = `/uploads/${req.file.filename}`;

    db.run(`UPDATE users SET avatar_url = ? WHERE id = ?`, [avatarUrl, userId], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ avatarUrl });
    });
});

router.post('/delete-avatar', (req, res) => {
    const userId = req.body.userId;

    db.run(`UPDATE users SET avatar_url = NULL WHERE id = ?`, [userId], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'Avatar deleted' });
    });
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            `INSERT INTO users (name, email, password, level, xp, avatar_type, total_xp, equipped_outfit_id, unlocked_outfits, skin_tone, hair_style) VALUES (?, ?, ?, 1, 20, 'male', 20, 1, '[1,2,3,4]', 'fair', 'straight')`,
            [name, email, hashedPassword],
            function (err) {
                if (err) {
                    if (err.message.includes('UNIQUE constraint failed')) {
                        return res.status(400).json({ message: 'Email already exists' });
                    }
                    return res.status(500).json({ message: 'Database error' });
                }

                const token = jwt.sign({ id: this.lastID, name }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                res.status(201).json({
                    token,
                    user: {
                        id: this.lastID,
                        name,
                        email,
                        level: 1,
                        xp: 20,
                        totalXP: 20,
                        avatarType: 'male',
                        equippedOutfitId: 1,
                        unlockedOutfits: [1, 2, 3, 4],
                        skinTone: 'fair',
                        hairStyle: 'straight'
                    }
                });
            }
        );
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                level: user.level,
                xp: user.xp,
                avatar_url: user.avatar_url,
                // New fields
                avatarType: user.avatar_type || 'male',
                totalXP: user.total_xp || user.xp || 0, // Fallback to xp if total_xp is null
                equippedOutfitId: user.equipped_outfit_id || 1,
                unlockedOutfits: user.unlocked_outfits ? JSON.parse(user.unlocked_outfits) : [1, 2, 3, 4],
                skinTone: user.skin_tone || 'fair',
                hairStyle: user.hair_style || 'straight'
            }
        });
    });
});

router.post('/update-xp', (req, res) => {
    const { userId, xpEarned } = req.body;

    if (!userId || xpEarned === undefined) {
        return res.status(400).json({ message: 'Missing userId or xpEarned' });
    }

    db.get(`SELECT * FROM users WHERE id = ?`, [userId], (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Spendable XP (Current Balance)
        // Ensure it doesn't drop below 0
        let newXp = (user.xp || 0) + xpEarned;
        if (newXp < 0) newXp = 0;

        // Total XP (Lifetime Progress - only increases)
        // Only add to total_xp if xpEarned is POSITIVE
        let totalXp = user.total_xp || user.xp || 0;
        if (xpEarned > 0) {
            totalXp += xpEarned;
        }

        // Level Calculation based on TOTAL XP
        // Level 1: XP 0–100
        // Level 2: XP 101–300
        // Level 3: XP 301–700
        // Level 4: XP 701+
        let newLevel = 1;
        if (totalXp > 700) newLevel = 4;
        else if (totalXp > 300) newLevel = 3;
        else if (totalXp > 100) newLevel = 2;

        db.run(`UPDATE users SET xp = ?, total_xp = ?, level = ? WHERE id = ?`, [newXp, totalXp, newLevel, userId], function (err) {
            if (err) {
                return res.status(500).json({ message: 'Database update error' });
            }
            res.json({ xp: newXp, totalXP: totalXp, level: newLevel });
        });
    });
});

router.post('/update-avatar', (req, res) => {
    const { userId, avatarType, equippedOutfitId, unlockedOutfits, skinTone, hairStyle } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'Missing userId' });
    }

    // Build the query dynamically based on what's provided
    let updates = [];
    let params = [];

    if (avatarType) {
        updates.push('avatar_type = ?');
        params.push(avatarType);
    }
    if (equippedOutfitId !== undefined) {
        updates.push('equipped_outfit_id = ?');
        params.push(equippedOutfitId);
    }
    if (unlockedOutfits) {
        updates.push('unlocked_outfits = ?');
        params.push(JSON.stringify(unlockedOutfits));
    }
    if (skinTone) {
        updates.push('skin_tone = ?');
        params.push(skinTone);
    }
    if (hairStyle) {
        updates.push('hair_style = ?');
        params.push(hairStyle);
    }

    if (updates.length === 0) {
        return res.status(400).json({ message: 'No fields to update' });
    }

    params.push(userId);
    const sql = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ message: 'Database update error' });
        }
        res.json({ message: 'Avatar updated successfully', success: true });
    });
});

module.exports = router;
