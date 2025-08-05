import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Shield, Workflow, Network, Server } from "lucide-react";

const ArchitecturePhase = () => {
  return (
    <div className="space-y-6">
      {/* Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Network className="h-5 w-5" />
            <span>Solution Architecture Design</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-center justify-between space-x-4 text-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-solid rounded-lg flex items-center justify-center mb-2">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium">SWIFT Network</p>
                <p className="text-xs text-muted-foreground">Alliance Access</p>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-lg flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium">SWIFT Gateway</p>
                <p className="text-xs text-muted-foreground">Security Layer</p>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-warning rounded-lg flex items-center justify-center mb-2">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium">Integration Layer</p>
                <p className="text-xs text-muted-foreground">ESB/API</p>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-2">
                  <Workflow className="h-8 w-8 text-accent-foreground" />
                </div>
                <p className="font-medium">Newgen BPM</p>
                <p className="text-xs text-muted-foreground">Workflow Engine</p>
              </div>
              
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <p className="font-medium">Core Banking</p>
                <p className="text-xs text-muted-foreground">CBS System</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Options */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-primary/5">
              <div className="flex items-center space-x-2 mb-3">
                <Server className="h-5 w-5 text-primary-solid" />
                <h4 className="font-medium">API/WebService</h4>
                <Badge className="bg-success text-success-foreground">Recommended</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                SWIFT Alliance Access exposes SOAP/REST for real-time message exchange
              </p>
              <ul className="text-xs space-y-1">
                <li>• Real-time processing</li>
                <li>• Synchronous responses</li>
                <li>• Better error handling</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Database className="h-5 w-5 text-warning" />
                <h4 className="font-medium">File-based Exchange</h4>
                <Badge variant="outline">Alternative</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                MT messages dropped to SFTP folder, Newgen reads via File Watcher
              </p>
              <ul className="text-xs space-y-1">
                <li>• Batch processing</li>
                <li>• Reliable delivery</li>
                <li>• Audit trail</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Network className="h-5 w-5 text-secondary" />
                <h4 className="font-medium">Queue-based</h4>
                <Badge variant="outline">High Volume</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Use IBM MQ/Kafka for real-time message flow and load balancing
              </p>
              <ul className="text-xs space-y-1">
                <li>• High throughput</li>
                <li>• Load balancing</li>
                <li>• Resilient messaging</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Design */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Workflow className="h-5 w-5" />
            <span>Newgen BPM Workflow Design</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border">
                <div className="text-lg font-semibold text-primary-solid mb-2">Step 1</div>
                <h4 className="font-medium mb-1">Message Receipt</h4>
                <p className="text-sm text-muted-foreground">Receive SWIFT message (incoming or outgoing request)</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border">
                <div className="text-lg font-semibold text-success mb-2">Step 2</div>
                <h4 className="font-medium mb-1">Parse & Validate</h4>
                <p className="text-sm text-muted-foreground">Parse and validate SWIFT MT/MX formats</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-warning/10 to-warning/5 rounded-lg border">
                <div className="text-lg font-semibold text-warning mb-2">Step 3</div>
                <h4 className="font-medium mb-1">Compliance Checks</h4>
                <p className="text-sm text-muted-foreground">Sanctions screening, AML validation</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border">
                <div className="text-lg font-semibold text-accent-foreground mb-2">Step 4</div>
                <h4 className="font-medium mb-1">Approval Workflow</h4>
                <p className="text-sm text-muted-foreground">Maker → Checker → Authorizer pattern</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border">
                <div className="text-lg font-semibold text-secondary mb-2">Step 5</div>
                <h4 className="font-medium mb-1">Message Transmission</h4>
                <p className="text-sm text-muted-foreground">Send to SWIFT or post to CBS</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-muted/10 to-muted/5 rounded-lg border">
                <div className="text-lg font-semibold text-muted-foreground mb-2">Step 6</div>
                <h4 className="font-medium mb-1">Audit & Update</h4>
                <p className="text-sm text-muted-foreground">Update status & maintain audit trail</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Considerations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Encryption & PKI</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Message encryption via SWIFT PKI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Digital signatures for authenticity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Certificate management</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Network Security</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-solid rounded-full"></div>
                  <span>Secure network zones: DMZ for SWIFT servers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-solid rounded-full"></div>
                  <span>Two-factor approvals for high-value transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-solid rounded-full"></div>
                  <span>VPN connectivity for remote access</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button variant="solid" className="flex-1">
          View Architecture Diagram
        </Button>
        <Button variant="outline" className="flex-1">
          Technical Specifications
        </Button>
        <Button variant="outline" className="flex-1">
          Security Assessment
        </Button>
      </div>
    </div>
  );
};

export default ArchitecturePhase;