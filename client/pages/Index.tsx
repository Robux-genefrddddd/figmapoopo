import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to recents page
    navigate("/recents");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center">
      <div className="text-center space-y-4 animate-fade-in">
        <div className="text-6xl mb-4">🎨</div>
        <h1 className="text-4xl font-light text-foreground">Figma-like Editor</h1>
        <p className="text-muted-foreground max-w-md font-light">
          Welcome to your design workspace. Redirecting to your recent files...
        </p>
      </div>
    </div>
  );
}
