import { Activity, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NodeStatusProps {
  status: "running" | "syncing" | "stopped";
  syncProgress?: number;
}

export const NodeStatus = ({ status, syncProgress = 0 }: NodeStatusProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "running":
        return {
          icon: CheckCircle2,
          label: "Fully Synced",
          color: "text-success",
          bgColor: "bg-success/10",
          borderColor: "border-success/20",
        };
      case "syncing":
        return {
          icon: Loader2,
          label: "Syncing",
          color: "text-warning",
          bgColor: "bg-warning/10",
          borderColor: "border-warning/20",
        };
      case "stopped":
        return {
          icon: AlertCircle,
          label: "Stopped",
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          borderColor: "border-destructive/20",
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${config.bgColor} border ${config.borderColor}`}>
            <StatusIcon className={`h-6 w-6 ${config.color} ${status === "syncing" ? "animate-spin" : ""}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Node Status</h3>
            <p className="text-sm text-muted-foreground">Decred dcrd</p>
          </div>
        </div>
        <Badge className={`${config.bgColor} ${config.color} border-0`}>
          {config.label}
        </Badge>
      </div>
      
      {status === "syncing" && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Sync Progress</span>
            <span className="text-foreground font-medium">{syncProgress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${syncProgress}%` }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};
