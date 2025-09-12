import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Camera, Mic, Video, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface ReportEmergencyProps {
  onBack: () => void;
}

const ReportEmergency = ({ onBack }: ReportEmergencyProps) => {
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Report Emergency</h1>
            <p className="text-muted-foreground">Provide details about the emergency</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-emergency">Emergency Report Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Emergency Type */}
            <div className="space-y-2">
              <Label htmlFor="emergency-type">Emergency Type *</Label>
              <Select value={emergencyType} onValueChange={setEmergencyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select emergency type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flood">Flood</SelectItem>
                  <SelectItem value="fire">Fire</SelectItem>
                  <SelectItem value="cyclone">Cyclone</SelectItem>
                  <SelectItem value="earthquake">Earthquake</SelectItem>
                  <SelectItem value="landslide">Landslide</SelectItem>
                  <SelectItem value="medical">Medical Emergency</SelectItem>
                  <SelectItem value="accident">Accident</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="flex gap-2">
                <Input 
                  id="location"
                  placeholder="Enter location or landmark"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description"
                placeholder="Describe the emergency situation in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            {/* Media Upload */}
            <div className="space-y-2">
              <Label>Attach Media (Optional)</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="h-20 flex-col">
                  <Camera className="h-6 w-6 mb-1" />
                  Photo
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Video className="h-6 w-6 mb-1" />
                  Video
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Mic className="h-6 w-6 mb-1" />
                  Audio
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input 
                id="contact"
                placeholder="Your contact number"
                type="tel"
              />
            </div>

            {/* Severity Level */}
            <div className="space-y-2">
              <Label>Severity Level</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="h-12 text-green-600 border-green-600">
                  Low
                </Button>
                <Button variant="warning" className="h-12">
                  Medium
                </Button>
                <Button variant="emergency" className="h-12">
                  High
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full h-12 text-lg" variant="emergency">
              <Send className="mr-2 h-5 w-5" />
              Submit Emergency Report
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-emergency/10 border-emergency">
          <CardContent className="p-4">
            <p className="text-center text-sm">
              <strong>For immediate life-threatening emergencies, call:</strong>
              <br />
              <span className="text-lg font-bold">108 | 112 | 101</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportEmergency;