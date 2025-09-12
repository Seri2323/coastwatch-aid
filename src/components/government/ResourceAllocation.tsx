import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Brain, Truck, Users, MapPin, Clock, TrendingUp } from "lucide-react";

interface ResourceAllocationProps {
  onBack: () => void;
}

const ResourceAllocation = ({ onBack }: ResourceAllocationProps) => {
  const aiRecommendations = [
    {
      area: "Coastal Ward 12",
      priority: "Critical",
      ambulances: 4,
      evacuationBuses: 2,
      rescueTeams: 6,
      supplies: "Medical kit, Food packets (500), Water (1000L)",
      reasoning: "High flood risk, 145 families affected, elderly population 23%"
    },
    {
      area: "Railway District",
      priority: "High", 
      ambulances: 2,
      evacuationBuses: 3,
      rescueTeams: 4,
      supplies: "Generators (5), Food packets (800), Blankets (200)",
      reasoning: "Power outage affecting 8000 people, critical infrastructure damage"
    },
    {
      area: "Industrial Zone",
      priority: "Medium",
      ambulances: 1,
      evacuationBuses: 1,
      rescueTeams: 2,
      supplies: "Safety equipment, Food packets (200)",
      reasoning: "Chemical leak contained, 45 workers evacuated successfully"
    }
  ];

  const resourceStatus = {
    ambulances: { available: 12, total: 20, deployed: 8 },
    buses: { available: 8, total: 15, deployed: 7 },
    teams: { available: 18, total: 30, deployed: 12 },
    supplies: { medical: 85, food: 70, water: 90, shelter: 45 }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Resource Allocation</h1>
            <p className="text-muted-foreground">Intelligent resource deployment recommendations</p>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              AI Analysis Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Critical Areas Identified</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-warning">9,190</p>
                <p className="text-sm text-muted-foreground">People Affected</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emergency">95%</p>
                <p className="text-sm text-muted-foreground">Confidence Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <Truck className="mr-2 h-4 w-4" />
                Ambulances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Available</span>
                  <span>{resourceStatus.ambulances.available}/{resourceStatus.ambulances.total}</span>
                </div>
                <Progress value={(resourceStatus.ambulances.available / resourceStatus.ambulances.total) * 100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Evacuation Buses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Available</span>
                  <span>{resourceStatus.buses.available}/{resourceStatus.buses.total}</span>
                </div>
                <Progress value={(resourceStatus.buses.available / resourceStatus.buses.total) * 100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Rescue Teams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Available</span>
                  <span>{resourceStatus.teams.available}/{resourceStatus.teams.total}</span>
                </div>
                <Progress value={(resourceStatus.teams.available / resourceStatus.teams.total) * 100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Supply Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Medical</span>
                  <span>{resourceStatus.supplies.medical}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Food</span>
                  <span>{resourceStatus.supplies.food}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Water</span>
                  <span>{resourceStatus.supplies.water}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Shelter</span>
                  <span>{resourceStatus.supplies.shelter}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              AI Deployment Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{rec.area}</h3>
                    </div>
                    <Badge variant={
                      rec.priority === 'Critical' ? 'destructive' : 
                      rec.priority === 'High' ? 'secondary' : 'outline'
                    }>
                      {rec.priority}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Ambulances: {rec.ambulances}</p>
                      <p className="text-sm font-medium">Buses: {rec.evacuationBuses}</p>
                      <p className="text-sm font-medium">Teams: {rec.rescueTeams}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm"><strong>Supplies:</strong> {rec.supplies}</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded p-2 mb-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>AI Analysis:</strong> {rec.reasoning}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      Deploy Resources
                    </Button>
                    <Button size="sm" variant="outline">
                      Modify Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Deploy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Quick Deploy All Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Deploy AI-recommended resource allocation</p>
                <p className="text-sm text-muted-foreground">
                  This will automatically deploy 7 ambulances, 6 buses, and 12 rescue teams
                </p>
              </div>
              <Button size="lg" variant="emergency">
                Execute All Deployments
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceAllocation;