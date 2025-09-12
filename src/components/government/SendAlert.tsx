import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Megaphone, Send, AlertTriangle, Users, MapPin } from "lucide-react";
import { useState } from "react";

interface SendAlertProps {
  onBack: () => void;
}

const SendAlert = ({ onBack }: SendAlertProps) => {
  const [alertType, setAlertType] = useState("");
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const areas = [
    "Coastal Ward 12",
    "Railway District", 
    "Industrial Zone",
    "Market Area",
    "Residential Zone A",
    "Residential Zone B",
    "Beach Road Area",
    "Highway Junction"
  ];

  const handleAreaChange = (area: string, checked: boolean) => {
    if (checked) {
      setSelectedAreas([...selectedAreas, area]);
    } else {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
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
            <h1 className="text-2xl font-bold text-foreground">Send Emergency Alert</h1>
            <p className="text-muted-foreground">Broadcast alerts to citizens and officials</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Megaphone className="mr-2 h-5 w-5" />
                  Alert Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Alert Type */}
                <div className="space-y-2">
                  <Label htmlFor="alert-type">Alert Type *</Label>
                  <Select value={alertType} onValueChange={setAlertType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select alert type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flood">Flood Warning</SelectItem>
                      <SelectItem value="cyclone">Cyclone Alert</SelectItem>
                      <SelectItem value="fire">Fire Emergency</SelectItem>
                      <SelectItem value="earthquake">Earthquake</SelectItem>
                      <SelectItem value="evacuation">Evacuation Order</SelectItem>
                      <SelectItem value="all-clear">All Clear</SelectItem>
                      <SelectItem value="general">General Alert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Severity */}
                <div className="space-y-2">
                  <Label>Severity Level *</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      type="button"
                      variant={severity === 'low' ? 'default' : 'outline'}
                      onClick={() => setSeverity('low')}
                    >
                      Low
                    </Button>
                    <Button 
                      type="button"
                      variant={severity === 'medium' ? 'warning' : 'outline'}
                      onClick={() => setSeverity('medium')}
                    >
                      Medium
                    </Button>
                    <Button 
                      type="button"
                      variant={severity === 'high' ? 'emergency' : 'outline'}
                      onClick={() => setSeverity('high')}
                    >
                      Critical
                    </Button>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Alert Message *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Enter the alert message that will be sent to citizens..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    {message.length}/500 characters
                  </p>
                </div>

                {/* Additional Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shelter">Shelter Location</Label>
                    <Input 
                      id="shelter"
                      placeholder="e.g., City Hall, School Ground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Emergency Contact</Label>
                    <Input 
                      id="contact"
                      placeholder="e.g., 108, 112"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Target Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {areas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox 
                        id={area}
                        checked={selectedAreas.includes(area)}
                        onCheckedChange={(checked) => handleAreaChange(area, checked as boolean)}
                      />
                      <Label htmlFor={area} className="text-sm">{area}</Label>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedAreas(areas)}
                  >
                    Select All
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedAreas([])}
                  >
                    Clear All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Actions */}
          <div className="space-y-6">
            {/* Alert Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="font-medium text-sm">
                        {alertType ? alertType.toUpperCase() : 'ALERT TYPE'}
                      </span>
                    </div>
                    <p className="text-sm">
                      {message || 'Your alert message will appear here...'}
                    </p>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p><strong>Areas:</strong> {selectedAreas.length > 0 ? selectedAreas.join(', ') : 'No areas selected'}</p>
                    <p><strong>Severity:</strong> {severity || 'Not set'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Delivery Channels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sms" defaultChecked />
                    <Label htmlFor="sms">SMS Alert</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="app" defaultChecked />
                    <Label htmlFor="app">App Notification</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sirens" />
                    <Label htmlFor="sirens">Emergency Sirens</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="loudspeaker" />
                    <Label htmlFor="loudspeaker">Public Address System</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Send Button */}
            <Button 
              className="w-full h-12 text-lg" 
              variant="emergency"
              disabled={!alertType || !severity || !message || selectedAreas.length === 0}
            >
              <Send className="mr-2 h-5 w-5" />
              Send Alert Now
            </Button>

            {/* Estimated Reach */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Estimated Reach</p>
                  <p className="text-2xl font-bold">
                    {selectedAreas.length > 0 ? (selectedAreas.length * 1250).toLocaleString() : '0'}
                  </p>
                  <p className="text-xs text-muted-foreground">Citizens</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendAlert;