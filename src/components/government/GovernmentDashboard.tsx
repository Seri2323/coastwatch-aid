import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, MapPin, Users, Truck, AlertTriangle, Activity, Megaphone, Brain } from "lucide-react";

interface GovernmentDashboardProps {
  onNavigate: (page: string) => void;
}

const GovernmentDashboard = ({ onNavigate }: GovernmentDashboardProps) => {
  const activeThreats = 12;
  const responseTeams = 8;
  const evacuated = 1250;
  const shelterOccupancy = 68;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">The Dock</h1>
            <p className="text-muted-foreground">Government Command Center</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onNavigate('send-alert')}>
              <Megaphone className="mr-2 h-4 w-4" />
              Send Alert
            </Button>
            <Button variant="default" onClick={() => onNavigate('resource-allocation')}>
              <Brain className="mr-2 h-4 w-4" />
              AI Resource Allocation
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Threats</p>
                  <p className="text-2xl font-bold text-emergency">{activeThreats}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-emergency" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Teams</p>
                  <p className="text-2xl font-bold text-primary">{responseTeams}</p>
                </div>
                <Truck className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">People Evacuated</p>
                  <p className="text-2xl font-bold text-foreground">{evacuated}</p>
                </div>
                <Users className="h-8 w-8 text-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Shelter Occupancy</p>
                  <p className="text-2xl font-bold text-warning">{shelterOccupancy}%</p>
                </div>
                <Activity className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Threat Heatmap */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Threat Heatmap
                </div>
                <Button variant="outline" size="sm" onClick={() => onNavigate('government-heatmap')}>
                  Full View
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20">
                  {/* High-density threat markers */}
                  <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-yellow-500 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-50"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full opacity-60"></div>
                  <div className="absolute top-3/4 left-1/4 w-5 h-5 bg-red-500 rounded-full animate-pulse opacity-80"></div>
                </div>
                <div className="relative z-10 text-center text-muted-foreground">
                  <BarChart3 className="mx-auto h-12 w-12 mb-2" />
                  <p className="font-medium">Real-time Threat Analysis</p>
                  <p className="text-sm">Click for detailed view</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-emergency" />
                Recent Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">Coastal Flooding</p>
                    <p className="text-sm text-red-600 dark:text-red-300">Sector 7 - 145 families affected</p>
                  </div>
                  <Badge variant="destructive">CRITICAL</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">Power Grid Failure</p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">Railway District - 8000 affected</p>
                  </div>
                  <Badge variant="secondary">HIGH</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Road Blockage</p>
                    <p className="text-sm text-muted-foreground">Highway 47 - Debris cleared</p>
                  </div>
                  <Badge variant="outline">RESOLVED</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            variant="outline" 
            className="h-16 flex-col"
            onClick={() => onNavigate('verification')}
          >
            <AlertTriangle className="h-6 w-6 mb-1" />
            Verify Threats
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex-col"
            onClick={() => onNavigate('send-alert')}
          >
            <Megaphone className="h-6 w-6 mb-1" />
            Broadcast Alert
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex-col"
            onClick={() => onNavigate('resource-allocation')}
          >
            <Truck className="h-6 w-6 mb-1" />
            Manage Resources
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDashboard;