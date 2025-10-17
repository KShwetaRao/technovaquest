import { Button } from "@/components/ui/button";
import { Sparkles, Home, Trophy, User, BookOpen, Swords } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TechNova Quest
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant={isActive("/dashboard") ? "default" : "ghost"}
                size="sm"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/quests">
              <Button 
                variant={isActive("/quests") ? "default" : "ghost"}
                size="sm"
              >
                <Swords className="w-4 h-4 mr-2" />
                Quests
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button 
                variant={isActive("/leaderboard") ? "default" : "ghost"}
                size="sm"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </Button>
            </Link>
            <Link to="/profile">
              <Button 
                variant={isActive("/profile") ? "default" : "ghost"}
                size="sm"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
          </div>

          <Button size="sm" className="shadow-glow">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;