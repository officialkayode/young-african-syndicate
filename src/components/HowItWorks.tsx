import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HowItWorks = () => {
  const investorSteps = [
    "Join an annual membership pool of accredited investors",
    "Review pre-vetted startups presented quarterly",
    "Opt into deals that align with your interests",
    "Returns are distributed upon successful exits",
  ];

  const founderSteps = [
    "Submit your pitch for evaluation",
    "Benefit from due diligence and mentorship",
    "Secure funding to achieve MVP or expand",
    "Access our network of industry experts",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yaf-blue">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">For Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {investorSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-yaf-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <Link to="https://airtable.com/appF9OEZYxWyHXiWe/shrEd8uGX6SXQs6sG">
                <Button className="w-full mt-6 bg-yaf-blue hover:bg-yaf-blue/90">
                  Join Now
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">For Founders</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {founderSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-yaf-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-yaf-brown hover:bg-yaf-brown/90">
                Submit Your Deck
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};