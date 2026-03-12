const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 50;

    db.all(
        `SELECT id, name, level, xp, avatar_url FROM users ORDER BY level DESC, xp DESC LIMIT ?`,
        [limit],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ message: 'Database error' });
            }
            res.json(rows);
        }
    );
});

module.exports = router;
