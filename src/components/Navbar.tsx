import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-yaf-blue cursor-pointer" 
          onClick={() => navigate("/")}
        >
          YAF
        </div>
        <div className="space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/thesis")}
          >
            Our Thesis
          </Button>
        </div>
      </div>
    </nav>
  );
};