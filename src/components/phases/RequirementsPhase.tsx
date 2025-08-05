import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Users, Target, FileText, Network } from "lucide-react";

const RequirementsPhase = () => {
  return (
    <div className="space-y-6">
      {/* Phase Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Phase 1: Requirements Gathering & Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success">100%</div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-solid">4</div>
              <p className="text-sm text-muted-foreground">Stakeholder Groups</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">5</div>
              <p className="text-sm text-muted-foreground">Message Types</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Objectives */}
      <Card>
        <CardHeader>
          <CardTitle>Business Objectives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
            <div>
              <p className="font-medium">Cross-border Payment Processing</p>
              <p className="text-sm text-muted-foreground">Handle MT103, MT202, MT940, MX PACS messages efficiently</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
            <div>
              <p className="font-medium">Automated Approval Workflows</p>
              <p className="text-sm text-muted-foreground">Implement checker/maker patterns and compliance automation</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
            <div>
              <p className="font-medium">Audit Trail & Compliance</p>
              <p className="text-sm text-muted-foreground">Generate comprehensive audit trails and compliance reports</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stakeholder Workshops */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Stakeholder Workshops</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Bank Operations Team</h4>
                <Badge className="bg-success text-success-foreground">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Daily payment operations & processing requirements</p>
              <div className="mt-2">
                <Progress value={100} className="h-2" />
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">IT & Security Team</h4>
                <Badge className="bg-success text-success-foreground">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Infrastructure, encryption, API security</p>
              <div className="mt-2">
                <Progress value={100} className="h-2" />
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Compliance/AML Team</h4>
                <Badge className="bg-success text-success-foreground">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Screening, fraud detection, sanctions check</p>
              <div className="mt-2">
                <Progress value={100} className="h-2" />
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">SWIFT Connectivity</h4>
                <Badge className="bg-success text-success-foreground">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Alliance Access / Lite2 setup</p>
              <div className="mt-2">
                <Progress value={100} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SWIFT Message Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Network className="h-5 w-5" />
            <span>SWIFT Message Scope</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-success">Incoming Messages</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                  <span className="text-sm">MT103</span>
                  <Badge variant="outline">Customer Credit</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                  <span className="text-sm">MT202</span>
                  <Badge variant="outline">Bank Transfer</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                  <span className="text-sm">MT199</span>
                  <Badge variant="outline">Free Format</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                  <span className="text-sm">MT940</span>
                  <Badge variant="outline">Statement</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-primary-solid">Outgoing Messages</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                  <span className="text-sm">MT103</span>
                  <Badge variant="outline">Customer Credit</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                  <span className="text-sm">MT202</span>
                  <Badge variant="outline">Bank Transfer</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                  <span className="text-sm">MT210</span>
                  <Badge variant="outline">Notice to Receive</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                  <span className="text-sm">MX PACS.008</span>
                  <Badge variant="outline">ISO 20022</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                  <span className="text-sm">MX PACS.009</span>
                  <Badge variant="outline">ISO 20022</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button variant="solid" className="flex-1">
          <FileText className="h-4 w-4 mr-2" />
          View Requirements Document
        </Button>
        <Button variant="outline" className="flex-1">
          Export Analysis Report
        </Button>
      </div>
    </div>
  );
};

export default RequirementsPhase;