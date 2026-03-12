import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Home, Trophy, User, BookOpen, Swords, LogOut, Menu, X, Timer } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/sign");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant={isActive("/dashboard") ? "default" : "ghost"} size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/quests">
              <Button variant={isActive("/quests") ? "default" : "ghost"} size="sm">
                <Swords className="w-4 h-4 mr-2" />
                Quests
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant={isActive("/leaderboard") ? "default" : "ghost"} size="sm">
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </Button>
            </Link>
            <Link to="/quizzes">
              <Button variant={isActive("/quizzes") ? "default" : "ghost"} size="sm">
                <Timer className="w-4 h-4 mr-2" />
                Test Quizzes
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant={isActive("/profile") ? "default" : "ghost"} size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex">
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg z-50">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/dashboard") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/quests" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/quests") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <Swords className="w-4 h-4 mr-2" />
                Quests
              </Button>
            </Link>
            <Link to="/leaderboard" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/leaderboard") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </Button>
            </Link>
            <Link to="/quizzes" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/quizzes") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <Timer className="w-4 h-4 mr-2" />
                Test Quizzes
              </Button>
            </Link>
            <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
              <Button variant={isActive("/profile") ? "default" : "ghost"} size="sm" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="w-full justify-start text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
