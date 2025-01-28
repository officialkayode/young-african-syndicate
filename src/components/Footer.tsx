import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-yaf-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/thesis" className="hover:text-yaf-orange transition-colors">
                  Investment Thesis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@yaf.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p>Connect with us on social media</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Young African Fund Syndicate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};