const db = require('./db');

db.serialize(() => {
    // Add skin_tone column
    db.run(`ALTER TABLE users ADD COLUMN skin_tone TEXT DEFAULT 'fair'`, (err) => {
        if (err) {
            console.log('Column skin_tone might already exist or error:', err.message);
        } else {
            console.log('Added skin_tone column to users table.');
        }
    });

    // Add hair_style column
    db.run(`ALTER TABLE users ADD COLUMN hair_style TEXT DEFAULT 'straight'`, (err) => {
        if (err) {
            console.log('Column hair_style might already exist or error:', err.message);
        } else {
            console.log('Added hair_style column to users table.');
        }
    });
});
