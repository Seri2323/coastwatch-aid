import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, AlertTriangle, Zap, Flame, Waves } from "lucide-react";

interface ThreatHeatmapProps {
  onBack: () => void;
}

const ThreatHeatmap = ({ onBack }: ThreatHeatmapProps) => {
  const threatData = [
    { id: 1, type: "flood", location: "Market Street", severity: "high", time: "10 min ago", icon: Waves },
    { id: 2, type: "power", location: "Railway Road", severity: "medium", time: "15 min ago", icon: Zap },
    { id: 3, type: "fire", location: "Industrial Area", severity: "low", time: "1 hour ago", icon: Flame },
    { id: 4, type: "flood", location: "Beach Road", severity: "high", time: "2 hours ago", icon: Waves },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Threat Heatmap</h1>
            <p className="text-muted-foreground">Real-time emergency and threat visualization</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Interactive Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder with threat markers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20">
                {/* Threat markers */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="relative z-10 text-center text-muted-foreground">
                <MapPin className="mx-auto h-12 w-12 mb-2" />
                <p>Interactive threat heatmap</p>
                <p className="text-sm">Colored dots represent threat levels</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <Card>
          <CardHeader>
            <CardTitle>Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm">Low Risk</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Threats List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
              Active Threats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {threatData.map((threat) => {
                const IconComponent = threat.icon;
                return (
                  <div key={threat.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity)}`}></div>
                      <IconComponent className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium capitalize">{threat.type} Alert</p>
                        <p className="text-sm text-muted-foreground">{threat.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={
                        threat.severity === 'high' ? 'destructive' : 
                        threat.severity === 'medium' ? 'secondary' : 'outline'
                      }>
                        {threat.severity}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{threat.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Report New Threat
          </Button>
          <Button variant="outline" className="h-12">
            <MapPin className="mr-2 h-4 w-4" />
            Update Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThreatHeatmap;