import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, User } from "lucide-react";

interface UserTypeSelectorProps {
  onSelectUserType: (type: 'citizen' | 'government' | 'common') => void;
}

const UserTypeSelector = ({ onSelectUserType }: UserTypeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            The Dock
          </h1>
          <p className="text-muted-foreground text-lg">Disaster Management Platform</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6">
          <Card className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm" onClick={() => onSelectUserType('common')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-3">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Citizen</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Get emergency alerts and access community updates
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm" onClick={() => onSelectUserType('citizen')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Local Official/Coast Guard</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Report emergencies, get alerts, and access community updates
              </p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm" onClick={() => onSelectUserType('government')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Government Official</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
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