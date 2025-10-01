import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cpu, MemoryStick, HardDrive } from "lucide-react";

export const SystemHealth = () => {
  const metrics = [
    { label: "CPU Usage", value: 34, icon: Cpu, color: "text-primary" },
    { label: "Memory", value: 67, icon: MemoryStick, color: "text-secondary" },
    { label: "Disk", value: 45, icon: HardDrive, color: "text-accent" },
  ];

  return (
    <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-4">System Health</h3>
      <div className="space-y-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
