import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-yaf-blue text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/thesis" className="hover:text-yaf-orange transition-colors">
                Investment Thesis
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center w-full">
          <p>&copy; {new Date().getFullYear()} Young African Fund Syndicate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};