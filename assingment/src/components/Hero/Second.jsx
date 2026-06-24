import React from 'react';

const Second = () => {
  return (
    <div className="bg-white min-h-screen p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-9xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* 1. Document Upload Card */}
        <div className="md:col-span-7 bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              {/* Document Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Document Upload</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Drag and drop any travel document—PDFs, PNGs, or confirmation emails. Our system processes them in real-time.
            </p>
          </div>
          
          {/* Dropzone Area */}
          <div className="mt-6 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 p-6 flex flex-col items-center justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-600 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            <span className="text-xs font-semibold text-gray-700">Drop your tickets here to start</span>
          </div>
        </div>

        {/* 2. AI Extraction Card */}
        <div className="md:col-span-5 bg-[#008066] text-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              {/* Scan/AI Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Extraction</h3>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Our LLMs instantly identify confirmation numbers, check-in times, and gate info with 99.9% accuracy.
            </p>
          </div>

          {/* Extracted Status Pills */}
          <div className="space-y-2 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center text-xs font-medium">
              <span className="mr-2">✓</span> Found: Flight BA129 (LHR)
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center text-xs font-medium">
              <span className="mr-2">✓</span> Found: Ace Hotel Tokyo
            </div>
          </div>
        </div>

        {/* 3. Smart Itinerary Card */}
        <div className="md:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              {/* Sparkles Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15.187l5.096-.813L9 9.312l.813 5.062L15 15.188l-5.187.816Zm7.938-8.914L17 10.25l-.75-3.26-3.26-.75L16.25 5.5l.75-3.26.75 3.26 3.26.75-3.26.75Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Itinerary</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Automatically maps out your days, suggests nearby dining, and syncs with your calendar.
            </p>
          </div>

          {/* Timeline List */}
          <div className="space-y-4 border-l border-gray-100 pl-4 ml-1">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-teal-600"></div>
              <p className="text-xs font-bold text-gray-900">10:00 AM — Arrive Narita Airport</p>
              <p className="text-[11px] text-gray-400">Train to Shinjuku: 1h 15m</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <p className="text-xs font-bold text-gray-900">03:00 PM — Hotel Check-in</p>
              <p className="text-[11px] text-gray-400">Ace Hotel Shinjuku</p>
            </div>
          </div>
        </div>

        {/* 4. Concierge Access Card */}
        <div className="md:col-span-7 bg-[#EBF0FF] rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 min-h-[340px]">
          <div className="flex flex-col justify-between h-full max-w-xs">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Concierge Access</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Real-time alerts for delays and gate changes, plus 24/7 AI chat support for on-the-go rebooking.
              </p>
            </div>
            <a href="#learn-more" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline mt-auto">
              Learn more <span>→</span>
            </a>
          </div>

          {/* Device Mockup Graphic Area */}
          <div className="relative w-full max-w-[240px] md:max-w-none md:w-1/2 h-48 md:h-full bg-gray-300 rounded-2xl overflow-hidden shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80" 
              alt="Concierge App Mockup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <span className="text-xs font-medium text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                App Preview
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Second;