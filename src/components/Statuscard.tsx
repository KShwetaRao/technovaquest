import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  iconColor?: string;
}

const StatsCard = ({ title, value, icon: Icon, trend, iconColor = "text-primary" }: StatsCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-glow-cyan transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {value}
            </h3>
            {trend && (
              <p className="text-xs text-success mt-2">{trend}</p>
            )}
          </div>
          <div className={`p-3 rounded-lg bg-muted/50 ${iconColor}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;