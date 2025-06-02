import React from 'react';
import { Link } from 'react-router-dom';
import { Box as Fox } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <header className="border-b bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-256.png" alt="Microfox" className="h-8 w-8" />
            <span className="font-semibold text-xl">Microfox</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <a href="mailto:microfox@themoondevs.com" className="text-gray-600 hover:text-gray-900">Contact</a>
            <Link 
              to="/book-call" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2">
                <Fox className="h-6 w-6 text-white" />
                <span className="font-semibold text-white">Microfox</span>
              </Link>
              <p className="mt-2 text-sm text-gray-400">
                Automate your processes with prompts, not code.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="mailto:microfox@themoondevs.com" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><Link to="/book-call" className="text-gray-400 hover:text-white">Book a Call</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-white">Cancellation & Refund</Link></li>
                <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping & Delivery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/microfoxai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/microfox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;