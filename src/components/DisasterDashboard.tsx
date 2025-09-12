import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, MapPin, Users } from "lucide-react";

const DisasterDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">The Dock</h1>
          <p className="text-muted-foreground">Disaster Management Platform</p>
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
          <Button 
            variant="warning" 
            size="lg" 
            className="h-20 text-xl font-bold"
          >
            <AlertTriangle className="mr-2 h-6 w-6" />
            REPORT
          </Button>
        </div>

        {/* Emergency Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-emergency" />
              Emergency Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg border-l-4 border-l-emergency bg-emergency/10 p-3">
                <p className="font-medium">Flood Warning - Level 2</p>
                <p className="text-sm text-muted-foreground">Heavy rainfall expected. Evacuation center at City Hall. ETA: 2 hours</p>
              </div>
              <div className="rounded-lg border-l-4 border-l-warning bg-warning/10 p-3">
                <p className="font-medium">Power Outage Alert</p>
                <p className="text-sm text-muted-foreground">Electrical maintenance in Sector 7. Estimated restoration: 6 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <MapPin className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Current Area</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Shelter Capacity</p>
                <p className="text-sm text-muted-foreground">450/1200 occupied</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Phone className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Emergency Line</p>
                <p className="text-sm text-muted-foreground">108</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DisasterDashboard;