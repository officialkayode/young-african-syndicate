import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Thesis = () => {
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

  const sections = [
    {
      title: "Our Thesis",
      content: "At the Young African Fund Syndicate (YAFS), we are driven by the belief that Africa's path to transformative growth begins with solving its local challenges. We hold a core theory: Africa must fund Africa. For Africa to achieve sustainable progress, the solutions to its problems must be conceived, financed, and implemented by those who understand its unique complexities."
    },
    {
      title: "Market Understanding",
      content: "We recognize that the African market is challenging, and navigating its nuances requires deep local understanding. Foreign investors often approach African markets with a lens shaped by their external experiences, which can lead to misaligned expectations and missed opportunities. We, as Africans, are uniquely positioned to identify high-potential opportunities and address them effectively."
    },
    {
      title: "Leveraging the Diaspora",
      content: "As a syndicate of professionals and entrepreneurs in the diaspora, we harness our global networks and high-net-worth connections to channel critical resources—financial capital, mentorship, and strategic support—back to Africa. Our position enables us to bridge the gap between investors and local entrepreneurs, driving both impact and financial returns."
    },
    {
      title: "Balancing Impact and Returns",
      content: "While we deeply value the impact that investing in Africa can create, we approach funding with a pragmatic lens. We hold a caveat: any investor putting money into Africa should understand that it's about more than financial returns—it's about creating change. However, we are equally committed to supporting businesses that demonstrate a high probability of financial success, ensuring sustainability for both the startups and our syndicate members."
    },
    {
      title: "The Path Forward",
      content: "We are confident that with proper funding, Africa can solve its own problems and position itself as a significant player in addressing global challenges. Our mission is to empower African entrepreneurs to innovate, scale, and thrive, while creating lucrative opportunities for our members to share in this journey. Together, we are not just investing in Africa; we are investing in a future where Africa leads its own transformation."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yaf-blue animate-fade-in">
          Our Investment Thesis
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow animate-fade-in"
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

        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yaf-blue">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};