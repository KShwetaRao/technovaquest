import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardItemProps {
  rank: number;
  name: string;
  level: number;
  xp: number;
  avatar?: string;
}

const LeaderboardItem = ({ rank, name, level, xp, avatar }: LeaderboardItemProps) => {
  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-700" />;
    return null;
  };

  const getRankColor = () => {
    if (rank === 1) return "bg-yellow-500/10 border-yellow-500/30";
    if (rank === 2) return "bg-gray-400/10 border-gray-400/30";
    if (rank === 3) return "bg-amber-700/10 border-amber-700/30";
    return "bg-muted/30 border-border/50";
  };

  return (
    <div 
      className={`flex items-center gap-4 p-4 rounded-lg border ${getRankColor()} hover:bg-muted/50 transition-colors`}
    >
      <div className="flex items-center justify-center w-12 font-bold text-lg">
        {getRankIcon() || <span className="text-muted-foreground">#{rank}</span>}
      </div>
      
      <Avatar className="h-12 w-12 border-2 border-primary/30">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-primary/20 text-primary font-semibold">
          {name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{xp.toLocaleString()} XP</p>
      </div>
      
      <Badge className="bg-primary/20 text-primary border-primary/30">
        Level {level}
      </Badge>
    </div>
  );
};

export default LeaderboardItem;