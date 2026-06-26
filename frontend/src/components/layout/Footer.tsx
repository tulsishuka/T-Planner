import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 px-6 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#006652] mb-4 tracking-tight">
                VoyageAI
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Elevating travel planning through advanced artificial intelligence and minimalist design.
              </p>
            </div>
            
            {/* Social Media Buttons */}
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                {/* Globe Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.738.09-1.454.257-2.135" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                {/* @ / Threads / Contact Icon */}
                <span className="text-sm font-semibold leading-none -mt-0.5">@</span>
              </button>
            </div>
          </div>

          {/* Right Columns: Link Groups */}
          <div className="md:col-span-7 grid grid-cols-3 gap-4">
            
            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Product</h4>
              <ul className="space-y-2.5 text-xs text-gray-500">
                <li><a href="#features" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#integrations" className="hover:text-gray-900 transition-colors">Integrations</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#changelog" className="hover:text-gray-900 transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Resources</h4>
              <ul className="space-y-2.5 text-xs text-gray-500">
                <li><a href="#guides" className="hover:text-gray-900 transition-colors">Travel Guides</a></li>
                <li><a href="#docs" className="hover:text-gray-900 transition-colors">API Docs</a></li>
                <li><a href="#help" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#blog" className="hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Company</h4>
              <ul className="space-y-2.5 text-xs text-gray-500">
                <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
