
import Navigation from "@/components/Navigation";
import QuestCard from "@/components/Questcard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const Quests = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allQuests = [
    {
      title: "Build a REST API",
      category: "Backend",
      difficulty: "Intermediate" as const,
      xpReward: 500,
      timeEstimate: "2-3 hours",
      description: "Create a RESTful API using Node.js and Express with authentication and CRUD operations.",
    },
    {
      title: "CSS Grid Mastery",
      category: "Frontend",
      difficulty: "Beginner" as const,
      xpReward: 250,
      timeEstimate: "1-2 hours",
      description: "Master CSS Grid by building a responsive dashboard layout from scratch.",
    },
    {
      title: "Secure a Web App",
      category: "Cybersecurity",
      difficulty: "Advanced" as const,
      xpReward: 1000,
      timeEstimate: "4-5 hours",
      description: "Implement security best practices including XSS protection, CSRF tokens, and SQL injection prevention.",
    },
    {
      title: "Train a Neural Network",
      category: "AI/ML",
      difficulty: "Advanced" as const,
      xpReward: 1200,
      timeEstimate: "5-6 hours",
      description: "Build and train a neural network for image classification using TensorFlow or PyTorch.",
    },
    {
      title: "React Hooks Deep Dive",
      category: "Frontend",
      difficulty: "Intermediate" as const,
      xpReward: 400,
      timeEstimate: "2 hours",
      description: "Master useState, useEffect, useContext, and custom hooks through practical examples.",
    },
    {
      title: "Database Design 101",
      category: "Backend",
      difficulty: "Beginner" as const,
      xpReward: 300,
      timeEstimate: "1-2 hours",
      description: "Learn to design normalized databases with proper relationships and indexing strategies.",
    },
    {
      title: "Network Security Analysis",
      category: "Cybersecurity",
      difficulty: "Intermediate" as const,
      xpReward: 700,
      timeEstimate: "3-4 hours",
      description: "Analyze network traffic, identify vulnerabilities, and implement firewall rules.",
    },
    {
      title: "Build a Chatbot",
      category: "AI/ML",
      difficulty: "Intermediate" as const,
      xpReward: 600,
      timeEstimate: "3 hours",
      description: "Create an AI-powered chatbot using natural language processing and machine learning.",
    },
    {
      title: "TypeScript Fundamentals",
      category: "Frontend",
      difficulty: "Beginner" as const,
      xpReward: 200,
      timeEstimate: "1 hour",
      description: "Learn TypeScript basics including types, interfaces, generics, and type guards.",
    },
    {
      title: "Docker Containerization",
      category: "Backend",
      difficulty: "Advanced" as const,
      xpReward: 800,
      timeEstimate: "3-4 hours",
      description: "Master Docker by containerizing a full-stack application with multi-stage builds.",
    },
    {
      title: "Penetration Testing Basics",
      category: "Cybersecurity",
      difficulty: "Beginner" as const,
      xpReward: 350,
      timeEstimate: "2 hours",
      description: "Learn ethical hacking fundamentals and perform basic penetration testing exercises.",
    },
    {
      title: "Computer Vision Project",
      category: "AI/ML",
      difficulty: "Advanced" as const,
      xpReward: 1500,
      timeEstimate: "6-8 hours",
      description: "Build a real-time object detection system using OpenCV and deep learning models.",
    },
  ];

  const filterQuestsByCategory = (category: string) => {
    if (category === "all") return allQuests;
    return allQuests.filter(quest => quest.category === category);
  };

  const filterQuestsBySearch = (quests: typeof allQuests) => {
    if (!searchQuery) return quests;
    return quests.filter(quest =>
      quest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quest.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Available Quests
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose your next learning adventure and earn XP
          </p>
        </div>

        <div className="mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search quests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border/50"
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-card border border-border/50">
            <TabsTrigger value="all">All Quests</TabsTrigger>
            <TabsTrigger value="Frontend">Frontend</TabsTrigger>
            <TabsTrigger value="Backend">Backend</TabsTrigger>
            <TabsTrigger value="Cybersecurity">Cybersecurity</TabsTrigger>
            <TabsTrigger value="AI/ML">AI/ML</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterQuestsBySearch(allQuests).map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </TabsContent>

          <TabsContent value="Frontend" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterQuestsBySearch(filterQuestsByCategory("Frontend")).map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </TabsContent>

          <TabsContent value="Backend" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterQuestsBySearch(filterQuestsByCategory("Backend")).map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </TabsContent>

          <TabsContent value="Cybersecurity" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterQuestsBySearch(filterQuestsByCategory("Cybersecurity")).map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </TabsContent>

          <TabsContent value="AI/ML" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterQuestsBySearch(filterQuestsByCategory("AI/ML")).map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Quests;
