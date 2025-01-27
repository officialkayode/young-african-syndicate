import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Thesis } from "@/components/Thesis";

const ThesisPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Thesis />
      </main>
      <Footer />
    </div>
  );
};

export default ThesisPage;