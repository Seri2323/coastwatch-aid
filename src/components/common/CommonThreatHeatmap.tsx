import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, AlertTriangle, Clock } from "lucide-react";

interface CommonThreatHeatmapProps {
  onBack: () => void;
}

const CommonThreatHeatmap = ({ onBack }: CommonThreatHeatmapProps) => {
  // Only showing verified threats for common users
  const verifiedThreats = [
    {
      id: 1,
      type: "Cyclone",
      location: "Coastal Gujarat",
      severity: "High",
      time: "2 hours ago",
      status: "Verified",
      description: "Category 3 cyclone approaching coastline"
    },
    {
      id: 2,
      type: "Flood",
      location: "River Valley",
      severity: "Medium",
      time: "4 hours ago",
      status: "Verified",
      description: "Rising water levels in residential areas"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Emergency Map</h1>
            <p className="text-sm text-muted-foreground">Verified threats in your area</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Live Emergency Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Interactive Map</p>
                <p className="text-xs text-muted-foreground">Showing verified emergencies only</p>
              </div>
              
              {/* Threat markers */}
              <div className="absolute top-4 left-8 w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-12 w-3 h-3 bg-warning rounded-full animate-pulse"></div>
            </div>
            
            {/* Legend */}
            <div className="mt-4 flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-destructive rounded-full mr-2"></div>
                <span className="text-xs">High</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-warning rounded-full mr-2"></div>
                <span className="text-xs">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs">Low</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verified Threats List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
              Verified Emergencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {verifiedThreats.map((threat) => (
              <div key={threat.id} className={`p-3 rounded-lg border ${getSeverityColor(threat.severity)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {threat.status}
                    </Badge>
                    <Badge variant={threat.severity === 'High' ? 'destructive' : 'secondary'}>
                      {threat.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {threat.time}
                  </div>
                </div>
                
                <h3 className="font-semibold text-sm">{threat.type}</h3>
                <p className="text-xs text-muted-foreground mb-1">{threat.description}</p>
                
                <div className="flex items-center text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  {threat.location}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Info Note */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground text-center">
              ℹ️ Only verified emergencies are shown to ensure accuracy. 
              For immediate help, use the HELP button on the dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommonThreatHeatmap;