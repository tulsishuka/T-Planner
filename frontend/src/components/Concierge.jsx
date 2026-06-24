import React from 'react';

const Concierge = () => {
  return (
    <div className="bg-[#EDF2FC] min-h-screen py-10 px-4 md:px-12 lg:px-20 flex justify-center">
      <div className="max-w-9xl w-full space-y-8">
        
        {/* 1. Hero Cover Image Banner */}
        <div className="relative h-64 md:h-80 w-full rounded-[32px] overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80" 
            alt="Amalfi Coast" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Banner Content Elements */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1 bg-[#006652] text-[#7EFAD6] text-[10px] font-bold px-3 py-1 rounded-full mb-2">
                ✨ CURATED JOURNEY
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
                Amalfi Coast Serenity
              </h1>
              <span className="text-xs md:text-sm text-gray-200 mt-1 block">
                📅 Sept 14 — Sept 21, 2026 • 8 Days
              </span>
            </div>
            
            {/* Action pill icons */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors">
                📤
              </button>
              <button className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors">
                📥
              </button>
              <button className="bg-[#006652] text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-[#005242] transition-colors flex items-center gap-1.5 shadow-sm">
                💾 Save Trip
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Timeline Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 9 COLUMNS: Active Interactive Journey Timeline */}
          <div className="lg:col-span-9 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#0D233A]">Your Experience</h2>
              <button className="text-[11px] text-gray-500 font-bold hover:text-gray-800 flex items-center gap-1">
                🔄 Regenerate Day 1
              </button>
            </div>

            {/* General Global Vertical Line Wrapper */}
            <div className="border-l-2 border-dashed border-gray-300 pl-6 ml-3 space-y-12 relative">
              
              {/* --- DAY 1 ROW --- */}
              <div className="relative">
                {/* Custom Timeline Indicator Node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#006652] border-4 border-white shadow-sm"></div>
                
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">Day 1</span>
                <h3 className="font-bold text-gray-800 text-base mb-4">Arrival & Positano Sunsets</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card A: Activity check-in */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-white flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start text-[10px] text-gray-400 font-bold mb-2">
                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded">15:00 • Activity</span>
                        <button className="text-gray-400 hover:text-gray-600">•••</button>
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Check-in at Villa TreVille</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Relax at your cliffside villa with a complimentary welcome drink and private garden tour.
                      </p>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80" 
                      alt="Villa Preview" 
                      className="w-full h-28 object-cover rounded-xl"
                    />
                  </div>

                  {/* Card B: AI Suggestion Pairing */}
                  <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100/40 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 mb-2">
                        ✨ AI Food Pairing
                      </span>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Da Adolfo Di Bella</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Hidden beach cove accessible only by boat. Recommended: Polpo alla Luciana with local chilled white wine.
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-blue-200/30 text-[10px] text-gray-400 font-medium">
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full bg-gray-300 border border-white"></div>
                        <div className="w-5 h-5 rounded-full bg-gray-400 border border-white"></div>
                      </div>
                      <span>Recommended by 42 travelers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- DAY 2 ROW --- */}
              <div className="relative">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">Day 2</span>
                <h3 className="font-bold text-gray-800 text-base mb-4">Capri Private Sail</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Boat Charter Horizontal style card */}
                  <div className="md:col-span-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-white flex flex-col sm:flex-row">
                    <img 
                      src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=350&q=80" 
                      alt="Boat" 
                      className="w-full sm:w-40 h-36 sm:h-auto object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between items-start">
                      <div>
                        <span className="bg-emerald-50 text-emerald-700 font-bold text-[9px] px-2 py-0.5 rounded mb-2 inline-block">
                          09:30 • Highlight
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Gozzo Boat Charter</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          A full-day exploration of the Blue Grotto and private swim spots only known to locals.
                        </p>
                      </div>
                      <button className="bg-[#006652] text-white font-bold text-[11px] px-4 py-1.5 rounded-lg mt-3 hover:bg-[#005242]">
                        View Vouchers
                      </button>
                    </div>
                  </div>

                  {/* Weather and Tips compact stack */}
                  <div className="md:col-span-4 bg-blue-50/60 rounded-2xl p-4 border border-blue-100/40 flex flex-col justify-between gap-4">
                    <div>
                      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Packing Tip</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        Don't forget your polarized sunglasses and reef-safe sunscreen. The sun is intense.
                      </p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-2.5 flex items-center justify-between text-xs font-bold text-gray-800 border border-white shadow-xs">
                      <span className="text-[10px] text-gray-400 font-medium">LOCAL WEATHER</span>
                      <span>☀️ 28°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- DAY 3 SLOPED INACTIVE FOOTNOTE --- */}
              <div className="relative opacity-50">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-0.5">Day 3</span>
                <p className="text-sm font-bold text-gray-500">The Path of the Gods...</p>
              </div>

            </div>
          </div>

          {/* RIGHT 3 COLUMNS: Miniature Route Map Floating Side View Widget */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-white shadow-sm space-y-5 sticky top-6">
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">Journey Map</h4>
              <div className="relative h-32 rounded-xl bg-sky-100 overflow-hidden border border-sky-200/40 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1524661135339-9140b00789e7?auto=format&fit=crop&w=300&q=80" 
                  alt="Map Placeholder Mapbox" 
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                />
                <button className="absolute bg-white/90 backdrop-blur-xs text-gray-700 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xs border border-gray-100 hover:bg-white">
                  Expand Map
                </button>
              </div>
            </div>

            {/* Lodging detail block summary */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase block">LODGING DETAIL</span>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-[10px]">H</div>
                <div>
                  <p className="font-bold text-gray-800">Villa TreVille</p>
                  <p className="text-[10px] text-gray-400">Positano, Italy</p>
                </div>
              </div>
            </div>

            {/* Transport status segment details */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase block">TRANSPORT</span>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-6 h-6 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-[10px]">🚗</div>
                <div>
                  <p className="font-bold text-gray-800">Private Transfer</p>
                  <p className="text-[10px] text-gray-400">Naples Airport (NAP)</p>
                </div>
              </div>
            </div>

            {/* Micro trip status percentage slider bar element */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1.5">
                <span>TRIP COMPLETION</span>
                <span className="text-emerald-600">15%</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[15%] rounded-full"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Concierge;