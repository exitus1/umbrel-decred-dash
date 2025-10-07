import { ArrowLeft, Shield, Shuffle, Lock, Eye, EyeOff, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import decredLogo from "@/assets/dcr-symbol.png";

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
          {/* Title with Logo */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src={decredLogo} alt="Decred" className="w-12 h-12" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                StakeShuffle++
              </h1>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Privacy-Preserving Cryptocurrency Mixing</p>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Decentralized privacy mixing integrated directly into Decred's Proof-of-Stake consensus. 
              Mix your coins securely without trusting third parties.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-center mb-4">How It Works</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Step 1 */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                  <Eye className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1">Public Transaction</h3>
                <p className="text-xs text-muted-foreground">Your transaction begins visible on the blockchain with a traceable history linking inputs to outputs.</p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">2</div>
                  <Shuffle className="w-4 h-4 text-secondary" />
                </div>
                <h3 className="font-bold text-sm mb-1">Mixing Pool</h3>
                <p className="text-xs text-muted-foreground">Coins join a pool with other stakers, breaking transaction links through collaborative mixing.</p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">3</div>
                  <Lock className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-bold text-sm mb-1">Cryptographic Shuffle</h3>
                <p className="text-xs text-muted-foreground">CoinShuffle++ protocol uses multi-party computation to shuffle outputs while maintaining unlinkability.</p>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-sm">4</div>
                  <EyeOff className="w-4 h-4 text-success" />
                </div>
                <h3 className="font-bold text-sm mb-1">Private Output</h3>
                <p className="text-xs text-muted-foreground">Coins emerge with zero traceable connection to inputs, protecting your financial privacy completely.</p>
              </div>
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
            <p className="text-xs font-medium text-foreground mb-1">
              CoinShuffle++ + Decred PoS = Privacy by Default
            </p>
            <p className="text-xs text-muted-foreground">
              No fees • No custody risk • Built into the protocol
            </p>
          </div>
        </Card>

        {/* Additional Info Below */}
        <div className="mt-8 max-w-2xl mx-auto space-y-6">
          <Card className="p-6 bg-muted/20">
            <h2 className="text-lg font-bold mb-3">About StakeShuffle++</h2>
            <p className="text-sm text-muted-foreground mb-3">
              StakeShuffle++ combines Decred's ticket-based proof-of-stake consensus with the CoinShuffle++ mixing protocol 
              to provide robust transaction privacy without relying on trusted third parties or centralized mixing services.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              The protocol uses secure multi-party computation (MPC) techniques to shuffle transaction outputs among 
              stake participants without revealing the mapping between inputs and outputs. Each participant can verify 
              the correctness of the shuffle while maintaining complete anonymity.
            </p>
            <p className="text-sm text-muted-foreground">
              Unlike traditional mixing services that charge fees and introduce custody risks, StakeShuffle++ provides 
              privacy protection as a native feature of Decred's staking system, accessible to all stakeholders at no 
              additional cost and with no counterparty risk.
            </p>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-md font-bold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Why It Matters
            </h3>
            <p className="text-sm text-muted-foreground">
              Financial privacy is a fundamental right. StakeShuffle++ ensures that your transaction history remains 
              private while maintaining the transparency and security of the Decred blockchain. It's privacy without 
              compromise—decentralized, non-custodial, and cryptographically secure.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StakeShuffle;
