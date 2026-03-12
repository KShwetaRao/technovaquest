CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS quests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  difficulty VARCHAR(20),
  xp INT,
  questions JSON
);

-- Insert some sample quests
INSERT INTO quests (title, description, category, difficulty, xp, questions) VALUES 
('The Beginning', 'Your first step into the world of coding.', 'Basics', 'Easy', 100, '[{"question": "What does HTML stand for?", "options": ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Mark Language"], "answer": "Hyper Text Markup Language"}]'),
('CSS Master', 'Learn how to style your web pages.', 'CSS', 'Medium', 200, '[{"question": "Which property is used to change the background color?", "options": ["color", "bgcolor", "background-color"], "answer": "background-color"}]');
