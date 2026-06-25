import React from 'react';
import { 
  Calendar, 
  Plane, 
  FileText, 
  Users, 
  Plus, 
  MapPin, 
  User, 
  Star, 
  ArrowUpRight, 
  CheckSquare, 
  Square,
  Sparkles,
  ArrowRight,
  PenSquare
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50/50 p-6 md:p-10 font-sans text-slate-800">
      
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            Welcome back, Alex!
          </h1>
          <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
            Where should we plan your next escape to?
          </p>
        </div>
        <button className="self-start md:self-auto flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold shadow-sm text-slate-700 hover:bg-slate-50 transition-all">
          <Calendar className="w-4 h-4 text-slate-400" />
          Calendar
        </button>
      </div>

      {/* Top Stat Analytics Cards Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Stat 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Trips</span>
            <p className="text-3xl font-bold text-slate-900">12</p>
          </div>
          <div className="p-2.5 bg-teal-50 rounded-xl">
            <Plane className="w-5 h-5 text-[#005B52] transform rotate-45" />
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Documents</span>
            <p className="text-3xl font-bold text-slate-900">34</p>
          </div>
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Shared Trips</span>
            <p className="text-3xl font-bold text-slate-900">05</p>
          </div>
          <div className="p-2.5 bg-purple-50 rounded-xl">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
        </div>

        {/* CTA Mini Card */}
        <div className="bg-[#005B52] p-5 rounded-2xl text-white shadow-md flex items-center justify-between group cursor-pointer hover:bg-[#00473F] transition-all">
          <div className="pr-2">
            <p className="text-[11px] font-medium text-teal-200/80 uppercase tracking-wider">Ready to explore?</p>
            <p className="text-base font-bold text-white mt-0.5 leading-tight">Create New Trip</p>
          </div>
          <div className="p-2.5 bg-white/10 rounded-xl group-hover:scale-105 transition-transform">
            <Plus className="w-5 h-5 text-white stroke-[3]" />
          </div>
        </div>
      </div>

      {/* Section Content Segment: Recent Trips */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-slate-900">Recent Trips</h2>
          <a href="#all" className="text-xs font-bold text-teal-700 hover:underline">View All</a>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Amalfi Coast */}
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80" alt="Amalfi Coast" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/40 text-white rounded-full text-[10px] font-bold backdrop-blur-sm tracking-wide">Upcoming</span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">Amalfi Coast, Italy</h3>
                  <span className="text-[10px] bg-teal-50 text-[#005B52] font-extrabold px-2 py-0.5 rounded-md">AI Assisted</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-3 font-medium">
                  <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Sep 12 - Sep 20</div>
                  <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> 2 People</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white overflow-hidden text-[9px] flex items-center justify-center font-bold text-white">A</div>
                  <div className="w-6 h-6 rounded-full bg-teal-800 border-2 border-white text-[9px] flex items-center justify-center font-bold text-white">+1</div>
                </div>
                <button className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1">
                  View Details <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Tokyo & Kyoto */}
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" alt="Japan" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-500/50 text-white rounded-full text-[10px] font-bold backdrop-blur-sm tracking-wide">Completed</span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Tokyo & Kyoto, Japan</h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-3 font-medium">
                  <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Apr 05 - Apr 18</div>
                  <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Solo</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 Rating
                </div>
                <button className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1">
                  View Memories <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Finnish Lapland */}
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80" alt="Lapland" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-sky-600 text-white rounded-full text-[10px] font-bold tracking-wide">Drafting</span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Finnish Lapland</h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-3 font-medium">
                  <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Dec 20 - Dec 27</div>
                  <div className="flex items-center gap-1 text-teal-600 font-semibold">80% Planned</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-5">
                <span className="text-[10px] text-slate-400 italic">Last edited 2h ago</span>
                <button className="px-3 py-1.5 bg-teal-800 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 hover:bg-teal-900 transition-colors">
                  Continue <PenSquare className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Block Sections (Insight Banner & Task Board Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Span Card: AI Assistant Insight Layout */}
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50/60 via-blue-50/40 to-slate-50 border border-blue-100/60 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[240px]">
          {/* Decorative Background Elements from screen representation */}
          <div className="absolute right-6 top-6 opacity-10 pointer-events-none">
            <Sparkles className="w-24 h-24 text-indigo-900" />
          </div>
          
          <div className="relative z-10 max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              AI Travel Insight
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Flights to Zurich are 25% lower this week!
            </h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Based on your saved "Swiss Winter Retreat" itinerary, now is the perfect time to book. We've found 3 premium economy options matching your preference.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6 relative z-10">
            <button className="px-4 py-2 bg-[#005B52] text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 hover:bg-[#00473F] transition-all">
              Explore Flights
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-slate-200 text-xs font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all">
              Update Itinerary
            </button>
          </div>
        </div>

        {/* Right Span Card: Tasks Board Checklist */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">
            Upcoming Tasks
          </h3>
          
          {/* Checklist Stack */}
          <div className="space-y-4 flex-1">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <Square className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0 cursor-pointer" />
              <div>
                <p className="text-xs font-bold text-slate-800">Upload Italy Visas</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Required by Sep 01</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <CheckSquare className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0 cursor-pointer fill-teal-50" />
              <div>
                <p className="text-xs font-bold text-slate-400 line-through">Confirm Rome Hotel</p>
                <p className="text-[10px] text-slate-300 line-through mt-0.5">Completed Aug 15</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3">
              <Square className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0 cursor-pointer" />
              <div>
                <p className="text-xs font-bold text-slate-800">Research Dining in Amalfi</p>
                <p className="text-[10px] text-teal-600 font-semibold mt-0.5">3 recommendations waiting</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <button className="w-full mt-6 py-2 border border-dashed border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all bg-slate-50/50">
            <Plus className="w-3.5 h-3.5" />
            Add Custom Task
          </button>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;