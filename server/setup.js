const db = require('./db');

function setupDatabase() {
    db.serialize(() => {
        // Create Users Table
        db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
            if (err) {
                console.error('Error creating users table:', err.message);
            } else {
                console.log('Users table created or already exists.');
            }
        });

        // Create Quests Table
        db.run(`CREATE TABLE IF NOT EXISTS quests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      difficulty TEXT,
      xp INTEGER,
      questions TEXT
    )`, (err) => {
            if (err) {
                console.error('Error creating quests table:', err.message);
            } else {
                console.log('Quests table created or already exists.');

                // Check if quests exist, if not insert samples
                db.get("SELECT count(*) as count FROM quests", [], (err, row) => {
                    if (err) {
                        console.error(err.message);
                    } else if (row.count === 0) {
                        console.log('Seeding quests...');
                        const quests = [
                            {
                                title: 'The Beginning',
                                description: 'Your first step into the world of coding.',
                                category: 'Basics',
                                difficulty: 'Easy',
                                xp: 100,
                                questions: JSON.stringify([{ question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Mark Language"], answer: "Hyper Text Markup Language" }])
                            },
                            {
                                title: 'CSS Master',
                                description: 'Learn how to style your web pages.',
                                category: 'CSS',
                                difficulty: 'Medium',
                                xp: 200,
                                questions: JSON.stringify([{ question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color"], "answer": "background-color" }])
                            }
                        ];

                        const stmt = db.prepare("INSERT INTO quests (title, description, category, difficulty, xp, questions) VALUES (?, ?, ?, ?, ?, ?)");
                        quests.forEach(quest => {
                            stmt.run(quest.title, quest.description, quest.category, quest.difficulty, quest.xp, quest.questions);
                        });
                        stmt.finalize();
                        console.log('Seeded sample quests.');
                    }
                });
            }
        });
    });
}

setupDatabase();
