import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, User } from "lucide-react";

interface UserTypeSelectorProps {
  onSelectUserType: (type: 'citizen' | 'government' | 'common') => void;
}

const UserTypeSelector = ({ onSelectUserType }: UserTypeSelectorProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">The Dock</h1>
          <p className="text-muted-foreground">Disaster Management Platform</p>
        </div>
        
        <div className="grid gap-4">
          <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onSelectUserType('common')}>
            <CardHeader className="text-center">
              <User className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Citizen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Get emergency alerts and access community updates
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onSelectUserType('citizen')}>
            <CardHeader className="text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Local Official/Coast Guard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Report emergencies, get alerts, and access community updates
              </p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onSelectUserType('government')}>
            <CardHeader className="text-center">
              <Shield className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Government Official</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                View heatmaps, manage resources, and coordinate response
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelector;