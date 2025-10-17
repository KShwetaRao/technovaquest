import Navigation from "@/components/Navigation";
import StatsCard from "@/components//StatsCard";
import QuestCard from "@/components/QuestCard";
import ProgressBar from "@/components/Progressbar";
import { Zap, Trophy, Target, Flame } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Welcome back, Quester!
          </h1>
          <p className="text-muted-foreground">Continue your journey to tech mastery</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
          <StatsCard
            title="Current Level"
            value="12"
            icon={Trophy}
            trend="+2 this week"
            iconColor="text-primary"
          />
          <StatsCard
            title="Total XP"
            value="4,580"
            icon={Zap}
            trend="+240 this week"
            iconColor="text-secondary"
          />
          <StatsCard
            title="Quests Completed"
            value="28"
            icon={Target}
            trend="+5 this week"
            iconColor="text-success"
          />
          <StatsCard
            title="Day Streak"
            value="7"
            icon={Flame}
            trend="Keep it up!"
            iconColor="text-destructive"
          />
        </div>

        {/* Progress to Next Level */}
        <div className="mb-12 p-6 rounded-lg bg-gradient-card border border-border/50 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Level Progress
          </h2>
          <ProgressBar
            current={580}
            max={1000}
            label="XP to Level 13"
            showValues={true}
          />
        </div>

        {/* Active Quests */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Active Quests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuestCard
              title="Build a REST API"
              category="Web Development"
              difficulty="Intermediate"
              xpReward={250}
              timeEstimate="3-4 hours"
              description="Create a RESTful API using Node.js and Express with authentication and CRUD operations."
            />
            <QuestCard
              title="SQL Mastery Challenge"
              category="Database"
              difficulty="Beginner"
              xpReward={150}
              timeEstimate="1-2 hours"
              description="Master essential SQL queries including joins, aggregations, and subqueries."
            />
            <QuestCard
              title="Machine Learning 101"
              category="AI"
              difficulty="Advanced"
              xpReward={400}
              timeEstimate="5-6 hours"
              description="Build your first neural network and train it on real-world datasets."
            />
          </div>
        </div>

        {/* Recommended Quests */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuestCard
              title="React Hooks Deep Dive"
              category="Frontend"
              difficulty="Intermediate"
              xpReward={200}
              timeEstimate="2-3 hours"
              description="Master useState, useEffect, and custom hooks to build powerful React applications."
            />
            <QuestCard
              title="Cybersecurity Basics"
              category="Security"
              difficulty="Beginner"
              xpReward={180}
              timeEstimate="2 hours"
              description="Learn fundamental security principles and protect your applications from common attacks."
            />
            <QuestCard
              title="Docker Containerization"
              category="DevOps"
              difficulty="Intermediate"
              xpReward={300}
              timeEstimate="4 hours"
              description="Package and deploy applications using Docker containers and compose."
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;