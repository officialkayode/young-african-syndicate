import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yaf-blue to-yaf-brown/80 text-white">
      <div className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Young African Fund Syndicate
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Fueling African Startups, Delivering Impactful Returns.
        </p>
        <div className="space-x-4">
          <Button className="bg-yaf-orange hover:bg-yaf-orange/90 text-white px-8 py-6 text-lg">
            Join as Investor
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white hover:text-yaf-blue"
          >
            Submit Your Startup
          </Button>
        </div>
      </div>
    </div>
  );
};