import { NodeStatus } from "@/components/NodeStatus";
import { MetricCard } from "@/components/MetricCard";
import { BlockchainInfo } from "@/components/BlockchainInfo";
import { PeersList } from "@/components/PeersList";
import { RPCConnection } from "@/components/RPCConnection";
import { Users, Layers, TrendingUp, Zap, Coins } from "lucide-react";
import decredLogo from "@/assets/decred-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <img 
              src={decredLogo} 
              alt="Decred Logo" 
              className="h-16 w-16 rounded-xl shadow-glow-primary animate-pulse-glow"
            />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Decred Node
              </h1>
              <p className="text-muted-foreground">Monitor your dcrd node performance and network status</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">Version</p>
            <p className="text-lg font-semibold text-primary">v1.8.0</p>
          </div>
        </div>

        {/* Node Status */}
        <NodeStatus status="syncing" syncProgress={87} />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Circulating Supply"
            value="16.2M"
            subtitle="DCR in circulation"
            icon={Coins}
            trend={{ value: "Max 21M", isPositive: true }}
          />
          <MetricCard
            title="Network Peers"
            value={8}
            subtitle="Connected nodes"
            icon={Users}
            trend={{ value: "+2 today", isPositive: true }}
          />
          <MetricCard
            title="Block Height"
            value="856,234"
            subtitle="Latest block"
            icon={Layers}
          />
          <MetricCard
            title="Network Hashrate"
            value="452 PH/s"
            subtitle="Total network power"
            icon={TrendingUp}
            trend={{ value: "+5.2%", isPositive: true }}
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BlockchainInfo />
          <RPCConnection />
        </div>

        {/* Peers List */}
        <PeersList />
      </div>
    </div>
  );
};

export default Index;
