
import React from 'react';
import { 
  LayoutGrid, 
  Map, 
  FileText, 
   
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
    <div className="w-[240px] h-screen bg-[#11997E] flex flex-col justify-between p-4 font-sans select-none border-r border-slate-100">
      
  
      <div className="space-y-7">

        <div className="px-3 pt-4">
          <h1 className="text-[17px] font-black text-white/90 tracking-tight leading-none mt-25">
            AI Travel Planner
          </h1>
          <span className="text-[11px] font-medium text-slate-400 mt-1 block">
            Premium Access
          </span>
        </div>

        <nav className="space-y-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between py-2.5 pl-4 pr-1 rounded-xl text-xs font-bold tracking-wide transition-all relative ${
                    isActive
                      ? ""
                      : "text-white/90 "
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 stroke-[2] ${
                          isActive ? "text-white/90" : "text-white/90"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>

                    {isActive && (
                      <div className="w-1 h-5 text-white/90 rounded-l-md absolute right-0 top-1/2 -translate-y-1/2" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="space-y-1">
        <button className="w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors">
          <LogOut className="w-4 h-4 stroke-[2] text-slate-400" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;