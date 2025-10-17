import Navigation from "@/components/Navigation";
import LeaderboardItem from "@/components/Leaderboarditem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const globalLeaders = [
    { rank: 1, name: "Alex Chen", level: 28, xp: 12500 },
    { rank: 2, name: "Sarah Johnson", level: 26, xp: 11200 },
    { rank: 3, name: "Mike Torres", level: 25, xp: 10800 },
    { rank: 4, name: "Emma Wilson", level: 23, xp: 9500 },
    { rank: 5, name: "David Kim", level: 22, xp: 9100 },
    { rank: 6, name: "Lisa Anderson", level: 21, xp: 8700 },
    { rank: 7, name: "Chris Martinez", level: 20, xp: 8200 },
    { rank: 8, name: "Nina Patel", level: 19, xp: 7800 },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Top Performers</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">Compete with the best tech learners worldwide</p>
        </div>

        <Tabs defaultValue="global" className="max-w-4xl mx-auto animate-fade-in">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Global Rankings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {globalLeaders.map((leader) => (
                  <LeaderboardItem key={leader.rank} {...leader} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-secondary" />
                  Weekly Rankings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {globalLeaders.slice(0, 5).map((leader) => (
                  <LeaderboardItem 
                    key={leader.rank} 
                    {...leader}
                    xp={Math.floor(leader.xp * 0.3)}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-success" />
                  Monthly Rankings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {globalLeaders.map((leader) => (
                  <LeaderboardItem 
                    key={leader.rank} 
                    {...leader}
                    xp={Math.floor(leader.xp * 0.6)}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Leaderboard;