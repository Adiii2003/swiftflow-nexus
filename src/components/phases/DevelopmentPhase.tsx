import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Shield, Workflow, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const DevelopmentPhase = () => {
  const developmentTasks = [
    { name: "Newgen BPM Configuration", progress: 85, status: "active" },
    { name: "SWIFT Message Handling", progress: 70, status: "active" },
    { name: "Integration Development", progress: 60, status: "active" },
    { name: "Compliance & Screening", progress: 45, status: "pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Development Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>Phase 3: Development & Configuration</span>
            <Badge className="bg-warning text-warning-foreground">In Progress</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">65%</div>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">12</div>
              <p className="text-sm text-muted-foreground">Completed Tasks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-solid">8</div>
              <p className="text-sm text-muted-foreground">Active Tasks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground">5</div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Development Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Development Tasks Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {developmentTasks.map((task, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {task.status === "active" && <Clock className="h-4 w-4 text-warning" />}
                  {task.status === "completed" && <CheckCircle2 className="h-4 w-4 text-success" />}
                  {task.status === "pending" && <AlertTriangle className="h-4 w-4 text-muted-foreground" />}
                  <span className="font-medium">{task.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{task.progress}%</span>
              </div>
              <Progress value={task.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newgen BPM Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Workflow className="h-5 w-5" />
            <span>Newgen BPM Configuration</span>
            <Badge className="bg-warning text-warning-foreground">85% Complete</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Workflows Designed</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded border">
                  <span className="text-sm">Payment Processing Workflow</span>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded border">
                  <span className="text-sm">Exception Handling Workflow</span>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded border">
                  <span className="text-sm">Reconciliation Workflow</span>
                  <Clock className="h-4 w-4 text-warning" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Forms & Dashboards</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded border">
                  <span className="text-sm">Payment Details Form</span>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded border">
                  <span className="text-sm">Status Dashboard</span>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded border">
                  <span className="text-sm">Approval Dashboard</span>
                  <Clock className="h-4 w-4 text-warning" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SWIFT Message Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>SWIFT Message Handling</span>
            <Badge className="bg-warning text-warning-foreground">70% Complete</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Message Parsing</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  <span>MT103 Parser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  <span>MT202 Parser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>MX Parser (ISO 20022)</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Validation Rules</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  <span>Field Format Validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  <span>Mandatory Tags Check</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>Sequence Validation</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Error Handling</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>Duplicate Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>Invalid References</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>NACK Handling</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Development */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>Integration Development</span>
            <Badge className="bg-warning text-warning-foreground">60% Complete</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">API Development</h4>
              <div className="space-y-3">
                <div className="p-3 bg-success/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">SWIFT Alliance Access API</span>
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">SOAP/REST integration complete</p>
                </div>
                
                <div className="p-3 bg-warning/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Core Banking API</span>
                    <Clock className="h-4 w-4 text-warning" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Integration in progress</p>
                </div>
                
                <div className="p-3 bg-muted/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Real-time Status API</span>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Pending development</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Workflow Triggers</h4>
              <div className="space-y-3">
                <div className="p-3 bg-success/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Auto-trigger on Message</span>
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">File watcher implemented</p>
                </div>
                
                <div className="p-3 bg-warning/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Event-driven Processing</span>
                    <Clock className="h-4 w-4 text-warning" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Message queue setup</p>
                </div>
                
                <div className="p-3 bg-muted/10 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Exception Notifications</span>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Alert system pending</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Compliance & Screening</span>
            <Badge className="bg-muted text-muted-foreground">45% Complete</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">AML Integration</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>OFAC Sanctions List Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>EU Sanctions List Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>UN Sanctions List Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>Local Sanctions List Integration</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Exception Handling</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-warning" />
                  <span>Suspicious Transaction Flagging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>Exception Queue Routing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>Manual Review Workflow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-muted-foreground" />
                  <span>Escalation Procedures</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button variant="solid" className="flex-1">
          <Code className="h-4 w-4 mr-2" />
          View Code Repository
        </Button>
        <Button variant="outline" className="flex-1">
          Development Progress Report
        </Button>
        <Button variant="outline" className="flex-1">
          Technical Documentation
        </Button>
      </div>
    </div>
  );
};

export default DevelopmentPhase;