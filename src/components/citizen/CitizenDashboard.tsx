import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, MapPin, Users, Clock, Navigation, Signal } from "lucide-react";
import { useState } from "react";

interface CitizenDashboardProps {
  onNavigate: (page: string) => void;
}

const CitizenDashboard = ({ onNavigate }: CitizenDashboardProps) => {
  const [connectionType, setConnectionType] = useState<'2G' | '3G+'>('3G+');

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">The Dock</h1>
            <p className="text-muted-foreground">Citizen Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <Signal className="h-4 w-4" />
            <select 
              value={connectionType} 
              onChange={(e) => setConnectionType(e.target.value as '2G' | '3G+')}
              className="bg-background border border-input rounded px-2 py-1"
            >
              <option value="2G">2G</option>
              <option value="3G+">3G+</option>
            </select>
          </div>
        </div>

        {/* Emergency Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            variant="emergency" 
            size="lg" 
            className="h-20 text-xl font-bold"
          >
            <Phone className="mr-2 h-6 w-6" />
            HELP
          </Button>
          {connectionType === '3G+' && (
            <Button 
              variant="warning" 
              size="lg" 
              className="h-20 text-xl font-bold"
              onClick={() => onNavigate('report')}
            >
              <AlertTriangle className="mr-2 h-6 w-6" />
              REPORT
            </Button>
          )}
        </div>

        {/* Emergency Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-emergency" />
                Emergency Alerts
              </div>
              <Badge variant="destructive">LIVE</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg border-l-4 border-l-emergency bg-emergency/10 p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Cyclone Warning - Level 3</p>
                    <p className="text-sm text-muted-foreground">
                      {connectionType === '3G+' 
                        ? "Evacuation center at City Hall (2.3km). Emergency supplies available. ETA: 2 hours"
                        : "Heavy winds expected. Seek shelter immediately."
                      }
                    </p>
                  </div>
                  {connectionType === '3G+' && (
                    <div className="text-right text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      2 min ago
                    </div>
                  )}
                </div>
              </div>
              
              <div className="rounded-lg border-l-4 border-l-warning bg-warning/10 p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Road Closure Alert</p>
                    <p className="text-sm text-muted-foreground">
                      {connectionType === '3G+' 
                        ? "Highway 47 blocked due to fallen trees. Alternative: Route via Marine Drive. Clearance ETA: 6 PM"
                        : "Highway 47 blocked. Avoid area."
                      }
                    </p>
                  </div>
                  {connectionType === '3G+' && (
                    <div className="text-right text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      15 min ago
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3G+ Additional Features */}
        {connectionType === '3G+' && (
          <>
            {/* Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-16 flex-col"
                onClick={() => onNavigate('heatmap')}
              >
                <Navigation className="h-6 w-6 mb-1" />
                Threat Heatmap
              </Button>
              <Button 
                variant="outline" 
                className="h-16 flex-col"
                onClick={() => onNavigate('community')}
              >
                <Users className="h-6 w-6 mb-1" />
                Community Updates
              </Button>
            </div>

            {/* Location Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <MapPin className="mr-3 h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">Current Location</p>
                    <p className="text-sm text-muted-foreground">Coastal Ward 12</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Users className="mr-3 h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">Nearest Shelter</p>
                    <p className="text-sm text-muted-foreground">City Hall - 2.3km</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Phone className="mr-3 h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">Emergency Line</p>
                    <p className="text-sm text-muted-foreground">108 / 112</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CitizenDashboard;