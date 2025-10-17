import Navigation from "@/components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Award, Target, Zap } from "lucide-react";

const Profile = () => {
  const badges = [
    { name: "First Quest", icon: Target, color: "text-primary" },
    { name: "Week Warrior", icon: Zap, color: "text-secondary" },
    { name: "Level 10", icon: Star, color: "text-success" },
    { name: "Fast Learner", icon: Trophy, color: "text-destructive" },
    { name: "Code Master", icon: Award, color: "text-primary" },
  ];

  const achievements = [
    { title: "Completed 50 Quests", date: "March 2025" },
    { title: "Reached Level 12", date: "March 2025" },
    { title: "7-Day Streak", date: "Ongoing" },
    { title: "Top 100 Global", date: "February 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Header */}
          <Card className="bg-gradient-card border-border/50 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="h-32 w-32 border-4 border-primary/30 shadow-glow">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-primary/20 text-primary text-3xl font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    John Doe
                  </h1>
                  <p className="text-muted-foreground mb-4">Aspiring Full-Stack Developer</p>
                  
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                      Level 12
                    </Badge>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
                      4,580 XP
                    </Badge>
                    <Badge className="bg-success/20 text-success border-success/30 px-4 py-2">
                      28 Quests
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Badges */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Badges Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className={`p-3 rounded-full bg-background ${badge.color}`}>
                        <badge.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-center font-medium">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills Progress */}
          <Card className="bg-gradient-card border-border/50 mt-8">
            <CardHeader>
              <CardTitle>Skill Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { skill: "Web Development", level: 85, color: "bg-primary" },
                { skill: "Database Management", level: 70, color: "bg-secondary" },
                { skill: "Cybersecurity", level: 55, color: "bg-success" },
                { skill: "AI & Machine Learning", level: 40, color: "bg-destructive" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000 rounded-full`}
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;