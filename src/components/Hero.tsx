import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleStartupSubmit = () => {
    window.open("https://tally.so/r/mR8NY4", "_blank");
  };

  const handleInvestorSubmit = () => {
    window.open("https://tally.so/r/m6rlkN", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yaf-blue to-yaf-brown/80 text-white">
      <div className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Young African Fund Syndicate
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Fueling African Startups, Delivering Impactful Returns.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-4">
          <Button 
            className="bg-yaf-orange hover:bg-yaf-orange/90 text-white px-8 py-6 text-lg w-full md:w-auto"
            onClick={handleInvestorSubmit}
          >
            Join as Investor
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 text-lg bg-yaf-blue hover:bg-yaf-blue/90 text-white w-full md:w-auto"
            onClick={handleStartupSubmit}
          >
            Submit Your Startup
          </Button>
        </div>
      </div>
    </div>
  );
};