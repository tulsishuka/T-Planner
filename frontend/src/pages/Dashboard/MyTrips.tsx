import React from 'react';

const MyTrips = () => {
  return (
    <div className="bg-[#EDF2FC] min-h-screen py-12 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Top Header & Global Actions Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] tracking-wider uppercase mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15.187l5.096-.813L9 9.312l.813 5.062L15 15.188l-5.187.816Zm7.938-8.914L17 10.25l-.75-3.26-3.26-.75L16.25 5.5l.75-3.26.75 3.26 3.26.75-3.26.75Z" />
              </svg>
              AI Extraction Results
            </div>
            <h1 className="text-3xl font-bold text-[#0D233A] tracking-tight mb-2">
              Confirm Your Details
            </h1>
            <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
              We've parsed your travel documents. Please verify the extracted information below before we generate your personalized itinerary.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button className="bg-white border border-gray-200 text-xs font-semibold text-gray-700 px-5 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-1.5">
              <span>+</span> Add Item
            </button>
            <button className="bg-[#006652] text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-[#005242] transition-colors shadow-md">
              Confirm & Generate <span>➔</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLUMNS: Flights & Accommodations */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section: Flights */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-[#0D233A]">
                  <span>✈</span> 
                  <h2 className="text-lg">Flights</h2>
                </div>
                <span className="bg-blue-100 text-blue-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                  2 Detected
                </span>
              </div>

              {/* Flight Ticket Card */}
              <div className="bg-white border border-white rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
                  
                  {/* Departure Info */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center transform -rotate-40 shrink-0">
                      ➔
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">Departure</span>
                      <span className="text-lg font-bold text-gray-800">LHR</span>
                      <span className="text-xs text-gray-400 block">London, UK</span>
                    </div>
                  </div>

                  {/* Flight Mid-line Path Graphic */}
                  <div className="flex-1 w-full flex flex-col items-center justify-center relative px-4">
                    <span className="text-gray-400 text-sm mb-1">✈</span>
                    <div className="w-full border-b border-dashed border-gray-200"></div>
                    <span className="text-[10px] text-gray-400 font-medium mt-1">BA 245 • 11h 20m</span>
                  </div>

                  {/* Arrival Info */}
                  <div className="flex items-center gap-4 w-full md:w-auto justify-end text-right md:text-left">
                    <div className="md:order-2 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transform rotate-40 shrink-0">
                      ➔
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">Arrival</span>
                      <span className="text-lg font-bold text-gray-800">EZE</span>
                      <span className="text-xs text-gray-400 block">Buenos Aires, AR</span>
                    </div>
                  </div>

                </div>

                {/* Card Meta Footer */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-600">
                  <div className="flex items-center gap-5">
                    <span className="flex items-center gap-1.5">📅 Oct 12, 2026</span>
                    <span className="flex items-center gap-1.5">🕒 10:45 AM</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    ● Verified by AI
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Accommodations */}
            <div>
              <div className="flex items-center gap-2 font-bold text-[#0D233A] mb-4">
                <span>🏨</span> 
                <h2 className="text-lg">Accommodations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Existing Stays Display Card */}
                <div className="bg-white border border-white rounded-2xl overflow-hidden shadow-sm flex flex-col h-full justify-between">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" 
                      alt="Palacio Duhau" 
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Palacio Duhau - Park Hyatt</h3>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">📍 Recoleta, Buenos Aires</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-[11px] pb-4">
                        <div>
                          <span className="text-gray-400 block font-medium">CHECK-IN</span>
                          <span className="font-bold text-gray-700">Oct 13, 15:00</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-medium">CHECK-OUT</span>
                          <span className="font-bold text-gray-700">Oct 18, 12:00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-50 text-xs font-bold">
                    <span className="bg-gray-100 text-gray-500 font-medium text-[10px] px-2.5 py-1 rounded-md">
                      Standard King Room
                    </span>
                    <button className="text-teal-600 hover:underline">Edit</button>
                  </div>
                </div>

                {/* Empty / Gap Alert Trigger Card */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/40 p-6 flex flex-col items-center justify-center text-center h-full min-h-[280px]">
                  <div className="w-10 h-10 bg-blue-50 text-blue-500 border border-blue-100 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                    🏠
                  </div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1">Need another stay?</h4>
                  <p className="text-[10px] text-gray-400 max-w-[180px] leading-relaxed">
                    We detected a gap in your dates (Oct 18-20)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLUMNS: Stats Bar & Activities Checklist */}
          <div className="lg:col-span-4 space-y-6 w-full">
            
            {/* Box: Extraction Stats */}
            <div className="bg-[#111E2E] text-white rounded-2xl p-5 shadow-lg">
              <h3 className="font-bold text-sm mb-4 tracking-wide">Extraction Stats</h3>
              
              <div className="space-y-4 border-b border-gray-800 pb-4 mb-4 text-xs font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Bookings</span>
                  <span className="font-bold text-base">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Confidence Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#5CE5C0] h-full w-[94%] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#5CE5C0]">94%</span>
                  </div>
                </div>
              </div>

              {/* Notification inside Stats panel */}
              <div className="bg-blue-950/70 rounded-xl p-3 flex gap-2.5 text-xs text-blue-200/90 border border-blue-900/40 leading-relaxed">
                <span className="text-blue-400 shrink-0 mt-0.5">ℹ️</span>
                <p className="text-[11px]">
                  Our AI has flagged 1 potential date conflict between Hotel and Flight arrivals.
                </p>
              </div>
            </div>

            {/* Box: Activities */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#0D233A] text-sm">Activities</h3>
                <button className="text-[11px] text-blue-600 font-bold hover:underline">Select All</button>
              </div>

              <div className="space-y-3">
                {/* Activity Option 1 */}
                <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between border border-white">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=80&q=80" alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Malbec Wine Tour</h4>
                      <p className="text-[10px] text-gray-400">Oct 14 • 2:00 PM</p>
                    </div>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4 border-gray-300 accent-[#006652]" />
                </div>

                {/* Activity Option 2 */}
                <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between border border-white">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=80&q=80" alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Tango Show & Dinner</h4>
                      <p className="text-[10px] text-gray-400">Oct 15 • 8:30 PM</p>
                    </div>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4 border-gray-300 accent-[#006652]" />
                </div>

                {/* Activity Option 3 */}
                <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between border border-white">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80" alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">City Highlights Bike Tour</h4>
                      <p className="text-[10px] text-gray-400">Oct 16 • 9:00 AM</p>
                    </div>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4 border-gray-300 accent-[#006652]" />
                </div>

                {/* Add Manual Activity Slot */}
                <button className="w-full border border-dashed border-gray-300 hover:border-gray-400 rounded-xl py-3 text-center text-xs font-semibold text-gray-500 bg-white/40 hover:bg-white transition-colors">
                  + Manual Activity
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MyTrips;