import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-yaf-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">YAF</h3>
            <p className="text-gray-300">
              Empowering African startups through strategic investments and mentorship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/thesis" className="text-gray-300 hover:text-white">
                  Investment Thesis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">San Francisco, USA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © {new Date().getFullYear()} Young African Fund. All rights reserved.
        </div>
      </div>
    </footer>
  );
};