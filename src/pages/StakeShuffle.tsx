import { ArrowLeft, Shield, Shuffle, Lock, Eye, EyeOff, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StakeShuffle = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Twitter-Optimized Square Card */}
        <Card className="p-8 bg-gradient-to-br from-card via-card to-card/50 border-primary/30 aspect-square max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              StakeShuffle++
            </h1>
            <p className="text-sm text-muted-foreground">Privacy through Proof-of-Stake</p>
          </div>

          {/* Compact Flow */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Step 1 */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                <Eye className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Public TX</h3>
              <p className="text-xs text-muted-foreground">Traceable on chain</p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">2</div>
                <Shuffle className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Mix Pool</h3>
              <p className="text-xs text-muted-foreground">Links broken</p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">3</div>
                <Lock className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-bold text-sm mb-1">Crypto Shuffle</h3>
              <p className="text-xs text-muted-foreground">Zero-knowledge</p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-sm">4</div>
                <EyeOff className="w-4 h-4 text-success" />
              </div>
              <h3 className="font-bold text-sm mb-1">Private Out</h3>
              <p className="text-xs text-muted-foreground">Fully anonymous</p>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs font-medium">Non-custodial</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Users className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-xs font-medium">Decentralized</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Lock className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-xs font-medium">Cryptographically Secure</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Shuffle className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-xs font-medium">Built-in Staking</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              CoinShuffle++ + Decred PoS = Privacy by Default
            </p>
          </div>
        </Card>

        {/* Additional Info Below */}
        <div className="mt-8 max-w-2xl mx-auto">
          <Card className="p-6 bg-muted/20">
            <h2 className="text-lg font-bold mb-3">About StakeShuffle++</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Combines Decred's proof-of-stake with CoinShuffle++ protocol for robust privacy without trusted third parties.
            </p>
            <p className="text-sm text-muted-foreground">
              Uses secure multi-party computation to shuffle outputs among participants while maintaining mathematical guarantees of anonymity and unlinkability.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StakeShuffle;
