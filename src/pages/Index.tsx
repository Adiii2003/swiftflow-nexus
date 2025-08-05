import { useState } from "react";
import SwiftHeader from "@/components/SwiftHeader";
import PhaseNavigation from "@/components/PhaseNavigation";
import SwiftDashboard from "@/components/SwiftDashboard";
import RequirementsPhase from "@/components/phases/RequirementsPhase";
import ArchitecturePhase from "@/components/phases/ArchitecturePhase";
import DevelopmentPhase from "@/components/phases/DevelopmentPhase";

const Index = () => {
  const [activePhase, setActivePhase] = useState("development");

  const renderPhaseContent = () => {
    switch (activePhase) {
      case "requirements":
        return <RequirementsPhase />;
      case "architecture":
        return <ArchitecturePhase />;
      case "development":
        return <DevelopmentPhase />;
      case "testing":
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">Testing & Validation Phase</h3>
            <p className="text-muted-foreground">Coming Soon - Unit, Integration, UAT, Security Testing</p>
          </div>
        );
      case "deployment":
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">Deployment & Go-Live Phase</h3>
            <p className="text-muted-foreground">Coming Soon - Production Setup, Data Migration, Go-Live</p>
          </div>
        );
      case "support":
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">Support & Optimization Phase</h3>
            <p className="text-muted-foreground">Coming Soon - Monitoring, Continuous Improvement, AI/ML</p>
          </div>
        );
      default:
        return <SwiftDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SwiftHeader />
      
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <PhaseNavigation 
              activePhase={activePhase} 
              onPhaseChange={setActivePhase} 
            />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activePhase === "dashboard" ? (
              <SwiftDashboard />
            ) : (
              <div className="space-y-6">
                {renderPhaseContent()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;