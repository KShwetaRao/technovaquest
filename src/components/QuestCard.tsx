import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BarChart, Clock, Zap } from "lucide-react";

type QuestCardProps = {
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xpReward: number;
  timeEstimate: string;
  description: string;
};

const difficultyConfig = {
  Beginner: {
    className: "bg-success/20 text-success border-success/30",
    icon: <BarChart className="w-3 h-3 -rotate-90" />,
  },
  Intermediate: {
    className: "bg-secondary/20 text-secondary border-secondary/30",
    icon: <BarChart className="w-3 h-3" />,
  },
  Advanced: {
    className: "bg-destructive/20 text-destructive border-destructive/30",
    icon: <BarChart className="w-3 h-3 rotate-90" />,
  },
};

const QuestCard = ({ title, category, difficulty, xpReward, timeEstimate, description }: QuestCardProps) => {
  const { className, icon } = difficultyConfig[difficulty];

  return (
    <Card className="bg-gradient-card border-border/50 flex flex-col h-full transition-all hover:shadow-glow hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge variant="outline" className="whitespace-nowrap">
            {category}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground text-sm pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Badge className={cn("gap-1", className)}>
              {icon}
              {difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">{xpReward}</span>
            XP
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {timeEstimate}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-bold group">
          Start Quest
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestCard;
// ...existing code...