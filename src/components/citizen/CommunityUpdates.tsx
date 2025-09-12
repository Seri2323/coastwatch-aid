import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Users, Clock, ThumbsUp, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useState } from "react";

interface CommunityUpdatesProps {
  onBack: () => void;
}

const CommunityUpdates = ({ onBack }: CommunityUpdatesProps) => {
  const [newPost, setNewPost] = useState("");
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState<any>(null);

  const communityPosts = [
    {
      id: 1,
      author: "Panchayat Office",
      role: "Official",
      time: "10 min ago",
      content: "Water distribution at Community Center from 2 PM to 6 PM today. Please bring your own containers.",
      type: "official",
      likes: 23
    },
    {
      id: 2,
      author: "Dr. Ravi Kumar",
      role: "Medical Officer",
      time: "25 min ago",
      content: "Mobile medical camp will be set up at School Ground tomorrow morning. Free health checkup for flood-affected families.",
      type: "medical",
      likes: 45
    },
    {
      id: 3,
      author: "Coastal Guard Station",
      role: "Safety Official",
      time: "1 hour ago",
      content: "Beach areas remain unsafe. Swimming and fishing strictly prohibited until further notice. High tide warning in effect.",
      type: "warning",
      likes: 67
    }
  ];

  const threatsToVerify = [
    {
      id: 1,
      reporter: "Rajesh M.",
      time: "5 min ago",
      threat: "Flooding reported on Market Street near the old bridge",
      severity: "medium",
      status: "pending"
    },
    {
      id: 2,
      reporter: "Priya S.",
      time: "12 min ago", 
      threat: "Power lines down on Railway Road, sparking observed",
      severity: "high",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Community Updates</h1>
            <p className="text-muted-foreground">Local news and community discussions</p>
          </div>
        </div>

        {/* Post Something */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Share with Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Share important information with your community..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={3}
            />
            <Button className="w-full">Post Update</Button>
          </CardContent>
        </Card>

        {/* Threats to Verify (For Local Officials) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                Threats to Verify
              </div>
              <Badge variant="secondary">{threatsToVerify.length} pending</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {threatsToVerify.map((threat) => (
              <div key={threat.id} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">Reported by {threat.reporter}</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {threat.time}
                    </p>
                  </div>
                  <Badge variant={threat.severity === 'high' ? 'destructive' : 'secondary'}>
                    {threat.severity}
                  </Badge>
                </div>
                <p className="text-sm mb-3">{threat.threat}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Verify
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-600">
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Community Posts */}
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant={post.type === 'official' ? 'default' : post.type === 'warning' ? 'destructive' : 'secondary'}>
                          {post.role}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-3">{post.content}</p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdates;