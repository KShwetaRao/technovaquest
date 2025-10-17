import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Level Up Your Tech Skills</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          TechNova Quest
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Transform Learning into Adventure
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Master programming, web development, cybersecurity, and AI through interactive quests. Earn XP, unlock badges, and compete on leaderboards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 shadow-glow hover:shadow-glow-cyan transition-all">
            Start Your Quest <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
            View Leaderboard <Trophy className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-medium">Earn XP</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="font-medium">Unlock Badges</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <Sparkles className="w-5 h-5 text-success" />
            <span className="font-medium">Level Up</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;