import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, MapPin, Clock, Signal, Wifi } from "lucide-react";

interface CommonDashboardProps {
  onNavigate: (page: string) => void;
}

const CommonDashboard = ({ onNavigate }: CommonDashboardProps) => {
  const [connectionType, setConnectionType] = useState<'2G' | '3G+'>('3G+');

  const emergencyAlerts = [
    {
      id: 1,
      type: "Cyclone Warning",
      severity: "High",
      message: "Cyclone Biparjoy approaching. Move to evacuation centers immediately.",
      time: "2 hours ago",
      location: "Coastal areas, Gujarat",
      campLocation: "Relief Camp at Community Center, Block A",
      estimatedHelp: "Help arriving in 45 minutes"
    },
    {
      id: 2,
      type: "Flood Alert",
      severity: "Medium",
      message: "Heavy rainfall expected. Avoid low-lying areas.",
      time: "4 hours ago",
      location: "River valley regions",
      campLocation: "Temporary shelter at School Ground",
      estimatedHelp: "Rescue teams deployed"
    }
  ];

  const hasVerifiedEmergency = true; // This would be determined by actual data

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">The Dock</h1>
            <p className="text-sm text-muted-foreground">Emergency Dashboard</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={connectionType === '2G' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setConnectionType('2G')}
              className="text-xs"
            >
              <Signal className="w-3 h-3 mr-1" />
              2G
            </Button>
            <Button
              variant={connectionType === '3G+' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setConnectionType('3G+')}
              className="text-xs"
            >
              <Wifi className="w-3 h-3 mr-1" />
              3G+
            </Button>
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="emergency" size="lg" className="h-16">
            <Phone className="w-6 h-6 mr-2" />
            HELP
          </Button>
          {connectionType === '3G+' && (
            <Button variant="warning" size="lg" className="h-16" onClick={() => onNavigate('report')}>
              <AlertTriangle className="w-6 h-6 mr-2" />
              REPORT
            </Button>
          )}
        </div>

        {/* Emergency Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
              Emergency Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyAlerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={alert.severity === 'High' ? 'destructive' : 'secondary'}>
                    {alert.severity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <h4 className="font-semibold">{alert.type}</h4>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 mr-1" />
                  {alert.location}
                </div>
                
                {connectionType === '3G+' && (
                  <div className="space-y-1 pt-2 border-t">
                    <div className="text-xs text-muted-foreground">
                      <strong>Shelter:</strong> {alert.campLocation}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {alert.estimatedHelp}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional Features for 3G+ */}
        {connectionType === '3G+' && (
          <div className="space-y-4">
            {/* Threat Heatmap - Only if verified emergency */}
            {hasVerifiedEmergency && (
              <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onNavigate('heatmap')}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Threat Heatmap</h3>
                      <p className="text-sm text-muted-foreground">View verified emergency locations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Community Updates */}
            <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onNavigate('community')}>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Updates</h3>
                    <p className="text-sm text-muted-foreground">News and alerts from officials</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonDashboard;