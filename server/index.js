const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:5173', 'http://127.0.0.1:8080', 'http://127.0.0.1:5173'],
    credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Basic route
app.get('/', (req, res) => {
    res.send('TechnovaQuest API is running');
});

// Import routes
const authRoutes = require('./routes/auth');
const questRoutes = require('./routes/quests');
const leaderboardRoutes = require('./routes/leaderboard');
const achievementRoutes = require('./routes/achievements');

app.use('/api/auth', authRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/achievements', achievementRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
