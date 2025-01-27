import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yaf-blue">YAF</div>
        <div className="space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Thesis</Button>
          <Button variant="ghost">How it Works</Button>
          <Button className="bg-yaf-blue hover:bg-yaf-blue/90">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};