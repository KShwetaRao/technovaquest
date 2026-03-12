const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    db.all(`SELECT * FROM quests`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        // Parse JSON questions
        const quests = rows.map(quest => ({
            ...quest,
            questions: JSON.parse(quest.questions)
        }));
        res.json(quests);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get(`SELECT * FROM quests WHERE id = ?`, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (!row) {
            return res.status(404).json({ message: 'Quest not found' });
        }
        res.json({
            ...row,
            questions: JSON.parse(row.questions)
        });
    });
});

module.exports = router;
