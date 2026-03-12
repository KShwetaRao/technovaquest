const db = require('./db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS user_achievements (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title VARCHAR(255) NOT NULL,
        date VARCHAR(50),
        description TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`, (err) => {
        if (err) {
            console.error("Error creating user_achievements table:", err.message);
        } else {
            console.log("Table 'user_achievements' created successfully.");
        }
    });
});
