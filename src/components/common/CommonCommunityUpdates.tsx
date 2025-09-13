import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, MessageCircle, Send } from "lucide-react";

interface CommonCommunityUpdatesProps {
  onBack: () => void;
}

const CommonCommunityUpdates = ({ onBack }: CommonCommunityUpdatesProps) => {
  const [newComment, setNewComment] = useState("");
  const [selectedPostForComment, setSelectedPostForComment] = useState<number | null>(null);

  const communityPosts = [
    {
      id: 1,
      author: "District Collector",
      role: "Government Official",
      content: "Relief supplies distribution will begin at 2 PM today at the community center. Please bring your ID cards.",
      time: "1 hour ago",
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      author: "Gram Panchayat Head",
      role: "Local Leader",
      content: "Water tankers have arrived in Sector 5. Residents can collect water from 10 AM to 6 PM.",
      time: "3 hours ago",
      likes: 28,
      comments: 8
    },
    {
      id: 3,
      author: "Emergency Coordinator",
      role: "Government Official",
      content: "Medical team is available at the relief camp. Anyone needing medical attention please report immediately.",
      time: "5 hours ago",
      likes: 67,
      comments: 15
    }
  ];

  const handleCommentSubmit = (postId: number) => {
    if (newComment.trim()) {
      // In a real app, this would submit the comment
      console.log(`Comment on post ${postId}: ${newComment}`);
      setNewComment("");
      setSelectedPostForComment(null);
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
            <h1 className="text-xl font-bold text-foreground">Community Updates</h1>
            <p className="text-sm text-muted-foreground">Official news and alerts</p>
          </div>
        </div>

        {/* Info Note */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              📢 You can view and comment on posts from officials and community leaders.
            </p>
          </CardContent>
        </Card>

        {/* Community Posts */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Latest Updates</h2>
          {communityPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{post.author}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {post.role}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                
                <p className="text-sm">{post.content}</p>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="h-8">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8"
                      onClick={() => setSelectedPostForComment(selectedPostForComment === post.id ? null : post.id)}
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </Button>
                  </div>
                </div>

                {/* Comment Section */}
                {selectedPostForComment === post.id && (
                  <div className="pt-3 border-t space-y-3">
                    <div className="flex space-x-2">
                      <Textarea
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="min-h-[60px]"
                      />
                      <Button 
                        size="sm" 
                        onClick={() => handleCommentSubmit(post.id)}
                        disabled={!newComment.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonCommunityUpdates;