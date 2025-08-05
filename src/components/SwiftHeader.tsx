import { Building2, Shield, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SwiftHeader = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary rounded-lg">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SWIFT Payment Processing System</h1>
              <p className="text-muted-foreground">Newgen BPM Integration Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">PKI Secured</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary-solid" />
              <span className="text-sm font-medium">24/7 Processing</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-warning" />
              <span className="text-sm font-medium">Multi-Approval</span>
            </div>
            
            <Badge variant="outline" className="px-3 py-1">
              Production Ready
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SwiftHeader;