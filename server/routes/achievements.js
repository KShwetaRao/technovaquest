const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    db.all(`SELECT * FROM user_achievements WHERE user_id = ? ORDER BY id DESC`, [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    const { userId, title, date, description } = req.body;

    if (!userId || !title) {
        return res.status(400).json({ message: 'Missing userId or title' });
    }

    // Check if achievement already exists to prevent duplicates (optional, based on title)
    db.get(`SELECT * FROM user_achievements WHERE user_id = ? AND title = ?`, [userId, title], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (row) {
            return res.status(200).json({ message: 'Achievement already exists', achievement: row });
        }

        db.run(
            `INSERT INTO user_achievements (user_id, title, date, description) VALUES (?, ?, ?, ?)`,
            [userId, title, date || new Date().toLocaleDateString(), description],
            function (err) {
                if (err) {
                    return res.status(500).json({ message: 'Database error' });
                }
                res.status(201).json({ id: this.lastID, userId, title, date, description });
            }
        );
    });
});

module.exports = router;
