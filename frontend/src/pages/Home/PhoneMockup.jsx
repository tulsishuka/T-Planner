
import React from 'react';
import { Plane, Compass, User, Home, MoreVertical } from 'lucide-react';

const PhoneMockup = () => {
  return (
    // <div className="relative flex items-center justify-center min-h-screen bg-white p-8 overflow-hidden">
      <div className="relative flex items-center justify-center w-full overflow-visible">
      {/* Main Container Card - Enlarged scaling bounds while maintaining crisp container boundaries */}
      <div className="relative w-full max-w-6xl aspect-[4/3] rounded-[48px] bg-[#FDF4E3] border-[20px] border-white shadow-2xl flex items-center justify-center overflow-hidden">
        
        {/* Decorative Floating Tickets/Elements Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-24 left-24 w-28 h-12 bg-sky-200 rounded-lg rotate-12 border border-dashed border-sky-400 flex items-center justify-center text-xs font-mono text-sky-700">SSTNG</div>
          <div className="absolute bottom-40 left-16 w-32 h-14 bg-blue-100 rounded-lg -rotate-12 border border-dashed border-blue-400 flex items-center justify-center text-xs font-mono text-blue-700">BGSW&S</div>
          <div className="absolute top-1/2 right-16 w-28 h-12 bg-rose-200 rounded-lg -rotate-45 border border-dashed border-rose-400 flex items-center justify-center text-xs font-mono text-rose-700">TICKET</div>
          <div className="absolute bottom-28 right-24 w-28 h-12 bg-teal-100 rounded-lg rotate-12 border border-dashed border-teal-400 flex items-center justify-center text-xs font-mono text-teal-700">BSMN02</div>
          {/* Abstract background blob */}
          <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* --- Top Floating Badge: AI Generated Itinerary --- */}
        <div className="absolute -top-8 right-1 transform translate-y-2 bg-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100 z-20">
          <div className="flex items-center gap-1 text-teal-700 font-bold text-xl">
            <span className="text-2xl">🌿</span>RK
          </div>
          <div className="w-[1px] h-5 bg-slate-300 mx-3"></div>
          <span className="text-slate-700 font-semibold text-base">AI Generated: 3-Day Tokyo Itinerary</span>
        </div>

        {/* --- Center Phone Mockup (Enlarged viewport dimension ratios) --- */}
        <div className="relative z-10 w-[380px] h-[760px] bg-[#1E7876] rounded-[50px] border-[12px] border-slate-800 shadow-2xl flex flex-col overflow-hidden text-white font-sans">
          {/* Phone Status Bar */}
          <div className="h-8 pt-3 px-8 flex justify-between items-center text-xs opacity-80">
            <span>10:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <span className="w-4 h-2.5 bg-white rounded-xs inline-block"></span>
            </div>
          </div>

          {/* App Header */}
          <div className="px-6 pt-6 pb-3 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold tracking-wide">Kamakura Day Trip</h3>
              <p className="text-xs opacity-60 tracking-wider mt-0.5">3G F33A TRP</p>
            </div>
            <button className="p-1.5 hover:bg-teal-600 rounded-full transition">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Form / Inputs Inside App */}
          <div className="px-6 space-y-3 mt-3 text-slate-800">
            <input 
              type="text" 
              placeholder="Startel Title" 
              className="w-full bg-white text-sm px-4 py-2.5 rounded-lg font-medium placeholder-slate-400 outline-none"
              disabled
            />
            <input 
              type="text" 
              placeholder="Release" 
              className="w-full bg-white text-sm px-4 py-2.5 rounded-lg font-medium placeholder-slate-400 outline-none"
              disabled
            />
            {/* Mini Tabs */}
            <div className="grid grid-cols-4 gap-1.5 text-xs text-center bg-white/20 p-1 rounded-lg text-white">
              <span className="bg-white text-teal-800 rounded-md py-1 font-semibold shadow-xs">Hate</span>
              <span className="py-1">Deeve</span>
              <span className="py-1">Driver</span>
              <span className="py-1">Search</span>
            </div>
          </div>

          {/* List Section Title */}
          <div className="px-6 pt-5 pb-3 flex justify-between items-center border-b border-white/10Heading">
            <span className="text-xs font-bold tracking-wider opacity-80">OERBIO TRIP:</span>
            <span className="text-sm">⚙️</span>
          </div>

          {/* Itinerary Timeline List */}
          <div className="flex-1 px-6 py-4 space-y-2.5 overflow-y-auto text-sm">
            {[
              { id: '01', title: 'GR Trde bizo' },
              { id: '02', title: 'Ultnaya NIRA' },
              { id: '03', title: 'Delerta Cl\'oren', sub: 'U1411102' },
              { id: '04', title: 'GUATRA' },
              { id: '05', title: 'Date:', sub: '08/11/2021' },
              { id: '06', title: 'Filrvs', sub: '00:00K9 ZUNE' },
            ].map((item) => (
              <div key={item.id} className="flex items-stretch bg-white/10 rounded-xl overflow-hidden border border-white/5">
                <div className="w-12 bg-white text-teal-900 flex items-center justify-center font-bold text-sm">
                  {item.id}
                </div>
                <div className="flex-1 p-3 pl-4 flex flex-col justify-center text-white/90">
                  <span className="font-semibold text-xs sm:text-sm">{item.title}</span>
                  {item.sub && <span className="text-[10px] opacity-60 mt-0.5">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom App Navigation */}
          <div className="h-14 border-t border-white/10 flex justify-around items-center opacity-80">
            <Home size={20} />
            <Compass size={20} />
            <User size={20} />
          </div>
        </div>

        {/* --- Bottom Floating Card: Next Flight --- */}
        <div className="absolute -bottom-4 left-10 bg-white p-5 rounded-[32px] shadow-2xl border border-slate-100 flex flex-col w-80 z-20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-400 rounded-2xl flex items-center justify-center text-white shadow-md shadow-emerald-200">
              <Plane className="transform rotate-45" size={28} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 tracking-wide uppercase">Next Flight</p>
              <h4 className="text-2xl font-extrabold text-slate-800 tracking-wide">JFK → HND</h4>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full mt-5 overflow-hidden">
            <div className="bg-teal-700 h-full w-[65%] rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PhoneMockup;