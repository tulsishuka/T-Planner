import React from 'react';
import { 
  LayoutGrid, 
  Map, 
  Bookmark, 
  FileText, 
  Settings, 
  Plus, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const mainNavItems = [
  {
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    name: "My Trips",
    icon: Map,
    path: "/dashboard/trips",
  },
 
  {
    name: "Documents",
    icon: FileText,
    path: "/dashboard/documents",
  }
];

  return (
    <div className="w-[260px] h-screen bg-white border-r border-slate-100 flex flex-col justify-between p-4 font-sans select-none">
      
      {/* Top Section: Profile and Main Navigation */}
      <div className="space-y-6">
        
        {/* User Profile Header */}
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Alex Explorer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-slate-800 leading-tight truncate">
              Alex Explorer
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              Premium Member
            </span>
          </div>
        </div>

       
        <nav className="space-y-1.5">
  {mainNavItems.map((item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.name}
        to={item.path}
        className={({ isActive }) =>
          `w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all ${
            isActive
              ? "bg-[#005B52] text-white shadow-md shadow-teal-900/10"
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`w-4 h-4 stroke-[2] ${
                isActive ? "text-white" : "text-slate-400"
              }`}
            />
            {item.name}
          </>
        )}
      </NavLink>
    );
  })}
</nav>
      </div>

      {/* Bottom Section: Actions and Utilities */}
      <div className="space-y-3.5">
        
        {/* Divider Line */}
        <div className="h-[1px] bg-slate-100/80 mx-2 mb-2"></div>

        {/* Action Call To Action Button */}
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#005B52] text-white text-xs font-semibold rounded-2xl shadow-lg shadow-teal-900/10 hover:bg-[#00473F] active:scale-[0.98] transition-all">
          <Plus className="w-4 h-4 stroke-[2.5]" />
          New Itinerary
        </button>

        {/* Support Option */}
        <button className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all">
          <HelpCircle className="w-4 h-4 stroke-[2] text-slate-400" />
          Support
        </button>

        {/* Logout Option */}
        <button className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50/50 transition-all">
          <LogOut className="w-4 h-4 stroke-[2] text-rose-500 transform rotate-180" />
          Logout
        </button>
        
      </div>
    </div>
  );
};

export default Sidebar;