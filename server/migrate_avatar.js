const db = require('./db');

db.serialize(() => {
    // Helper function to add column if it doesn't exist
    const addColumn = (colName, colType) => {
        db.run(`ALTER TABLE users ADD COLUMN ${colName} ${colType}`, (err) => {
            if (err) {
                if (err.message.includes('duplicate column name')) {
                    console.log(`Column ${colName} already exists.`);
                } else {
                    console.error(`Error adding column ${colName}:`, err.message);
                }
            } else {
                console.log(`Column ${colName} added successfully.`);
            }
        });
    };

    addColumn('avatar_url', 'TEXT');
    addColumn('avatar_type', 'TEXT DEFAULT "male"'); // male or female
    addColumn('total_xp', 'INTEGER DEFAULT 0');
    addColumn('equipped_outfit_id', 'INTEGER DEFAULT 1');
    addColumn('unlocked_outfits', 'TEXT DEFAULT "[1,2,3,4]"'); // Store as JSON string of IDs
});
