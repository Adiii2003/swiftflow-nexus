import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface Phase {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
}

const phases: Phase[] = [
  {
    id: 'requirements',
    title: 'Requirements & Analysis',
    description: 'Business objectives, stakeholder workshops, system analysis',
    status: 'completed'
  },
  {
    id: 'architecture',
    title: 'Solution Architecture',
    description: 'High-level design, integration patterns, security',
    status: 'completed'
  },
  {
    id: 'development',
    title: 'Development & Config',
    description: 'Newgen BPM setup, SWIFT integration, compliance',
    status: 'active'
  },
  {
    id: 'testing',
    title: 'Testing & Validation',
    description: 'Unit, integration, UAT, security testing',
    status: 'pending'
  },
  {
    id: 'deployment',
    title: 'Deployment & Go-Live',
    description: 'Production setup, data migration, go-live',
    status: 'pending'
  },
  {
    id: 'support',
    title: 'Support & Optimization',
    description: 'Monitoring, continuous improvement, AI/ML',
    status: 'pending'
  }
];

interface PhaseNavigationProps {
  activePhase: string;
  onPhaseChange: (phaseId: string) => void;
}

const PhaseNavigation = ({ activePhase, onPhaseChange }: PhaseNavigationProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Implementation Phases</h3>
      <div className="space-y-3">
        {phases.map((phase, index) => (
          <div key={phase.id} className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {phase.status === 'completed' && (
                <CheckCircle2 className="h-5 w-5 text-success" />
              )}
              {phase.status === 'active' && (
                <Clock className="h-5 w-5 text-warning" />
              )}
              {phase.status === 'pending' && (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            
            <div className="flex-1">
              <Button
                variant={activePhase === phase.id ? "solid" : "ghost"}
                size="sm"
                className="w-full justify-start h-auto p-3"
                onClick={() => onPhaseChange(phase.id)}
              >
                <div className="text-left">
                  <div className="font-medium">Phase {index + 1}: {phase.title}</div>
                  <div className="text-xs opacity-80 mt-1">{phase.description}</div>
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PhaseNavigation;