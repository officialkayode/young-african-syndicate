import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThesisPreview } from "@/components/ThesisPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ThesisPreview />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;