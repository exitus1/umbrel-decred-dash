import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const MetricCard = ({ title, value, subtitle, icon: Icon, trend }: MetricCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {value}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-xs ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
              <span>{trend.value}</span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:shadow-glow-primary transition-all duration-300">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </Card>
  );
};
