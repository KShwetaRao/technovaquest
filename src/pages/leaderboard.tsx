import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import LeaderboardItem from "@/components/Leaderboarditem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const [globalLeaders, setGlobalLeaders] = useState<any[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/leaderboard');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        // Add rank to the data
        const rankedData = data.map((user: any, index: number) => ({
          ...user,
          rank: index + 1
        }));
        setGlobalLeaders(rankedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

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