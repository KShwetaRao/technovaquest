const db = require('./db');

db.serialize(() => {
    // Add level column
    db.run("ALTER TABLE users ADD COLUMN level INTEGER DEFAULT 1", (err) => {
        if (err) {
            if (err.message.includes("duplicate column name")) {
                console.log("Column 'level' already exists.");
            } else {
                console.error("Error adding 'level' column:", err.message);
            }
        } else {
            console.log("Column 'level' added successfully.");
        }
    });

    // Add xp column
    db.run("ALTER TABLE users ADD COLUMN xp INTEGER DEFAULT 0", (err) => {
        if (err) {
            if (err.message.includes("duplicate column name")) {
                console.log("Column 'xp' already exists.");
            } else {
                console.error("Error adding 'xp' column:", err.message);
            }
        } else {
            console.log("Column 'xp' added successfully.");
        }
    });
});
