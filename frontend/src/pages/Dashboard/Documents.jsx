import React from 'react';

const Documents = () => {
  return (
    <div className="bg-[#EDF2FC] min-h-screen py-12 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0D233A] tracking-tight mb-2">
            Create New Trip
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            Design your perfect escape. Provide a few details, and our AI will organize your travel documents into a seamless itinerary.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Info Info-box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Trip Details Form Card */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-white">
              <div className="flex items-center gap-2 mb-6 text-[#0D233A] font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <h3>Trip Details</h3>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Trip Name input */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Trip Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Summer in Amalfi" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                {/* Destination input */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Destination
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="Where are you going?" 
                      className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Travel Style dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Travel Style
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </span>
                    <select className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-teal-500 appearance-none transition-colors">
                      <option>Select Style</option>
                      <option>Adventure</option>
                      <option>Relaxation</option>
                      <option>Business</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button type="submit" className="w-full bg-[#006652] text-white font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#005242] transition-colors shadow-md mt-2">
                  Generate AI Itinerary
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15.187l5.096-.813L9 9.312l.813 5.062L15 15.188l-5.187.816Zm7.938-8.914L17 10.25l-.75-3.26-3.26-.75L16.25 5.5l.75-3.26.75 3.26 3.26.75-3.26.75Z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Bottom Info Card */}
            <div className="bg-[#D3E8FA] rounded-2xl p-5 flex gap-4 text-[#004A7C]">
              <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="font-bold text-sm">i</span>
              </div>
              <div>
                <h4 className="text-xs font-bold mb-1">How it works</h4>
                <p className="text-xs leading-relaxed opacity-85">
                  Once you upload your files, VoyageAI scans for confirmation codes, dates, and addresses to build your timeline automatically.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Upload Component & Process Statuses */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Large Drag & Drop Upload Block */}
            <div className="border-2 border-dashed border-blue-200 rounded-[24px] bg-blue-50/40 p-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0D233A] mb-1">Upload Travel Documents</h3>
              <p className="text-xs text-gray-400 max-w-sm mb-5 leading-relaxed">
                Drag and drop PDFs, JPGs, or PNGs (Flights, Hotels, Reservations)
              </p>
              <button className="bg-white border border-gray-200 text-xs font-semibold text-gray-700 px-6 py-2.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                Browse Files
              </button>
            </div>

            {/* Processed Documents Headline Section */}
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-4">
                Processed Documents
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* File 1 Card - Successfully Processed */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-white flex flex-col justify-between min-h-[140px]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                      {/* Flight/Plane Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-800">Flight_LAX_JFK.pdf</h5>
                      <span className="text-[9px] font-bold text-emerald-600 tracking-wider uppercase">Analyzed Successfully</span>
                    </div>
                  </div>

                  {/* Metadata fields */}
                  <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
                    <div>
                      <span className="text-gray-400 block">Airline</span>
                      <span className="font-bold text-gray-700">Delta Air Lines</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Date</span>
                      <span className="font-bold text-gray-700">Aug 12, 2026</span>
                    </div>
                  </div>

                  {/* Complete Progress Bar */}
                  <div className="w-full mt-2">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#006652] h-full w-[100%] rounded-full"></div>
                    </div>
                    <div className="text-[9px] text-right text-gray-400 mt-1 font-medium">100%</div>
                  </div>
                </div>

                {/* File 2 Card - Extracting Processing */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-white flex flex-col justify-between min-h-[140px]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                      {/* Bed/Hotel Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 9h19.5M4.5 12h15M4.5 15h15M4.5 18h15M9 5.25h6" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-800">Hotel_Booking_Amalfi.jpg</h5>
                      <span className="text-[9px] font-bold text-blue-500 tracking-wider uppercase">Analyzing Details...</span>
                    </div>
                  </div>

                  {/* Status processing segment */}
                  <div className="text-[10px] my-2">
                    <span className="text-gray-400 block">Status</span>
                    <span className="font-bold text-gray-600 animate-pulse">Extracting Data...</span>
                  </div>

                  {/* Partial Progress Bar */}
                  <div className="w-full mt-2">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[65%] rounded-full"></div>
                    </div>
                    <div className="text-[9px] text-right text-gray-400 mt-1 font-medium">65%</div>
                  </div>
                </div>

              </div>

              {/* Add More Files Placeholder Slot */}
              <div className="mt-4 max-w-[200px]">
                <button className="w-full border-2 border-dashed border-gray-200 bg-white/50 hover:bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-wide">Add more files</span>
                </button>
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Documents;