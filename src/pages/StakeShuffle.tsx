import { ArrowLeft, Shield, Shuffle, Lock, Eye, EyeOff, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StakeShuffle = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            StakeShuffle++
          </h1>
          <p className="text-xl text-muted-foreground">
            Privacy-preserving cryptocurrency mixing through staking
          </p>
        </header>

        {/* Hero Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-card/50 to-card/30 border-primary/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/20">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Enhanced Privacy Protection</h2>
              <Badge variant="secondary" className="mt-2">Non-custodial</Badge>
            </div>
          </div>
          <p className="text-muted-foreground text-lg">
            StakeShuffle++ combines Decred's proof-of-stake system with CoinShuffle++ protocol 
            to provide robust privacy without trusted third parties.
          </p>
        </Card>

        {/* How It Works - Infographic */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <Card className="p-6 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Public Transaction</h3>
                <p className="text-muted-foreground">
                  Your transaction starts visible on the blockchain with traceable history.
                </p>
              </div>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>

            {/* Step 2 */}
            <Card className="p-6 relative overflow-hidden group hover:border-secondary/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                    2
                  </div>
                  <Shuffle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mixing Pool</h3>
                <p className="text-muted-foreground">
                  Coins enter a pool with other stake participants, breaking transaction links.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Arrow down */}
            <div className="hidden md:flex items-center justify-center md:col-start-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-accent" />
                <Users className="w-8 h-8 text-accent" />
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-success" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:col-start-2">
              <Card className="p-6 relative overflow-hidden group hover:border-accent/50 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">
                      3
                    </div>
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cryptographic Shuffle</h3>
                  <p className="text-muted-foreground">
                    CoinShuffle++ protocol ensures unlinkability through secure multi-party computation.
                  </p>
                </div>
              </Card>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-success animate-pulse" />
            </div>

            {/* Step 4 */}
            <Card className="p-6 relative overflow-hidden group hover:border-success/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-xl">
                    4
                  </div>
                  <EyeOff className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-2">Private Output</h3>
                <p className="text-muted-foreground">
                  Your coins emerge with no traceable connection to the input, protecting your privacy.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Non-Custodial</h3>
              <p className="text-muted-foreground">
                You maintain full control of your funds throughout the entire mixing process. 
                No third party can access or steal your coins.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-bold mb-2">Decentralized</h3>
              <p className="text-muted-foreground">
                No central mixing service required. The protocol operates through peer-to-peer 
                coordination among stake participants.
              </p>
            </Card>

            <Card className="p-6">
              <Lock className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-2">Cryptographically Secure</h3>
              <p className="text-muted-foreground">
                Built on proven CoinShuffle++ protocol with mathematical guarantees of 
                anonymity and unlinkability.
              </p>
            </Card>

            <Card className="p-6">
              <Shuffle className="w-8 h-8 text-success mb-3" />
              <h3 className="text-xl font-bold mb-2">Integrated Staking</h3>
              <p className="text-muted-foreground">
                Seamlessly integrated with Decred's ticket-based proof-of-stake system, 
                requiring no additional infrastructure.
              </p>
            </Card>
          </div>
        </div>

        {/* Technical Details */}
        <Card className="p-8 bg-muted/20">
          <h2 className="text-2xl font-bold mb-4">Technical Overview</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              StakeShuffle++ leverages Decred's unique hybrid consensus system where stakeholders 
              actively participate in governance and security. By integrating CoinShuffle++ into 
              the staking process, privacy mixing becomes a natural part of network participation.
            </p>
            <p>
              The protocol uses secure multi-party computation (MPC) techniques to shuffle 
              transaction outputs among participants without revealing individual mappings. 
              Each participant can verify the correctness of the shuffle while maintaining 
              anonymity.
            </p>
            <p>
              Unlike traditional mixing services that charge fees and pose custody risks, 
              StakeShuffle++ provides privacy protection as a built-in feature of the protocol, 
              accessible to all stakeholders at no additional cost.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StakeShuffle;
