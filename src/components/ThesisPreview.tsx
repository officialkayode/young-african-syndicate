import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ThesisPreview = () => {
  const points = [
    {
      title: "Focused on Africa's Potential",
      description: "We believe in Africa's startups as the driving force behind the continent's economic transformation.",
    },
    {
      title: "Solving Real Problems",
      description: "Invest in startups solving real challenges in key sectors—infrastructure, energy, logistics, and agriculture.",
    },
    {
      title: "Backed by Data and Expertise",
      description: "We combine deep market insights, strong networks, and robust due diligence processes.",
    },
  ];

  return (
    <div id="thesis-preview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yaf-blue animate-fadeIn">
          Our Investment Thesis
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <Check className="w-8 h-8 text-yaf-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};