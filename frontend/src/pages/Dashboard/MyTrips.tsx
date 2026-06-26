
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Share2, Trash2, Plus, Plane, FileText } from "lucide-react";
import { Link } from 'react-router-dom';

const MyTrips = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "upcoming">("all");

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:3000/api/documents",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("TRIPS:", data.docs);
      setTrips(data.docs || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (shareId: string) => {
    if (!shareId) return;
    const url = `${window.location.origin}/share/${shareId}`;
    await navigator.clipboard.writeText(url);
    alert("Share link copied!");
  };

 

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="text-lg font-medium text-slate-500 animate-pulse">Loading itineraries...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10 font-sans antialiased">
      <div className="mx-auto max-w-6xl">
     
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mt-25">My Trips</h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage your upcoming and past itineraries in one place.
            </p>
          </div>
  
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                filter === "all"
                  ? "bg-[#D1FAE5] text-[#065F46]"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              All Trips ({trips.length})
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                filter === "upcoming"
                  ? "bg-[#D1FAE5] text-[#065F46]"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      
          {trips.map((trip) => {
      
            const firstFile = trip.files?.[0] || {};
            const data = firstFile.extractedData || {};

            const tripStatus = trip.notes?.toLowerCase().includes("past") || data.status?.toLowerCase() === "departed"
              ? { text: "DEPARTED", bg: "bg-blue-100 text-blue-600" }
              : data.status?.toLowerCase() === "scheduled" 
              ? { text: "SCHEDULED", bg: "bg-sky-400 text-white" } 
              : { text: "ON TIME", bg: "bg-[#10B981] text-white" };

            return (
              <div
                key={trip._id}
                className="flex flex-col justify-between bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow relative"
              >
                <div>
         
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                        {data.airline ? <Plane className="h-5 w-5 transform rotate-45 text-emerald-600" /> : <FileText className="h-5 w-5" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-base leading-tight">
                          {trip.notes || data.airline || "Unassigned Journey"}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium tracking-wider mt-0.5 uppercase">
                          FLIGHT {data.flight_number || data.flight || "N/A"} • {data.class || "ECONOMY"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider ${tripStatus.bg}`}>
                        {tripStatus.text}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {trip.startDate ? new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "TBD"}
                      </span>
                    </div>
                  </div>

             
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 mb-5 flex items-center justify-between gap-2 text-center">
                    <div className="text-left">
                      <span className="text-xl font-bold text-slate-700 block tracking-wide">{data.origin || "SFO"}</span>
                      <span className="text-[11px] text-slate-400 font-medium block max-w-[90px] truncate">{data.origin_name || "Departure"}</span>
                      <span className="text-xs font-bold text-emerald-600 block mt-1">{data.departure_time || "00:00"}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center px-2">
                      <span className="text-[10px] text-slate-400 font-medium mb-1">{data.duration || "Direct"}</span>
                      <div className="w-full flex items-center gap-1.5 relative">
                        <div className="h-[1px] bg-slate-200 flex-1"></div>
                        <Plane className="h-3.5 w-3.5 text-emerald-600 transform rotate-90 shrink-0" />
                        <div className="h-[1px] bg-slate-200 flex-1"></div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-bold text-slate-700 block tracking-wide">{data.destination || "HND"}</span>
                      <span className="text-[11px] text-slate-400 font-medium block max-w-[90px] truncate">{data.destination_name || "Arrival"}</span>
                      <span className="text-xs font-bold text-emerald-600 block mt-1">{data.arrival_time || "00:00"}</span>
                    </div>
                  </div>

                  {/* Metadata Spec-Grid Line */}
                  <div className="grid grid-cols-3 gap-2 border-b border-dashed border-slate-100 pb-5 mb-4 text-left">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Gate</span>
                      <span className="text-xs font-bold text-slate-700 mt-0.5 block">{data.gate || "—"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Seat</span>
                      <span className="text-xs font-bold text-slate-700 mt-0.5 block">{data.seat || "—"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Passenger</span>
                      <span className="text-xs font-bold text-slate-700 mt-0.5 block truncate">{data.passenger || "J. Doe"}</span>
                    </div>
                  </div>
                </div>

            
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleShare(trip.shareId)}
                      className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Share Trip"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                 
                  </div>
<Link to="/TripDetail">
                  <button 
                   className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-bold px-4 py-2 rounded-xl"
                  >
                    {tripStatus.text === "DEPARTED" ? "View Itinerary" : "View Details"}
                  </button>
                  </Link>
        
                </div>
              </div>
            );
          })}

        
          <Link  to="/dashboard/documents">
          <div className="border-2 border-dashed border-slate-200 rounded-3xl bg-[#F8FAFC]/50 p-8 flex flex-col items-center justify-center text-center min-h-[320px] transition-colors hover:border-emerald-300 group cursor-pointer">
            <div className="h-10 w-10 rounded-full border border-emerald-600 flex items-center justify-center text-emerald-600 bg-white group-hover:scale-110 transition-transform shadow-sm mb-4">
              <Plus className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-700">Add New Trip</h4>
            <p className="text-xs text-slate-400 max-w-[200px] mt-1 leading-relaxed">
              Plan your next journey with AI-assisted itineraries.
            </p>
          </div>
          </Link>

        </div>
      </div>

   
    </div>
  );
};

export default MyTrips;