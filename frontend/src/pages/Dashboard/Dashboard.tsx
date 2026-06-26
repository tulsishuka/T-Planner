
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Compass, Users, FileText, Calendar, UploadCloud, Share2, Plane, ArrowRight, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchTrips();
  }, []);

 const fetchTrips = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      // "http://localhost:3000/api/documents",
     "https://t-planner-1.onrender.com/api/documents",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTrips(data.docs || []);
    setUser(data.user);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const renderSafeText = (val: any, fallback = "—") => {
    if (!val) return fallback;
    if (typeof val === "object") {
   
      return val.airport_code || val.city || JSON.stringify(val);
    }
    return String(val);
  };

  const getFlightDetails = (trip: any) => {
  const file = trip?.files?.[0];
  const data = file?.extractedData || {};

  const origin =
    data.departure?.city
      ? `${data.departure.city} (${data.departure.iata_code})`
      : data.departure_city_airport ||
        data.departure_airport ||
        "Unknown";

  const destination =
    data.arrival?.city
      ? `${data.arrival.city} (${data.arrival.iata_code})`
      : data.arrival_city_airport ||
        data.arrival_airport ||
        "Unknown";

  return {
    passenger:
      data.passenger_name ||
      data.passengerName ||
      "Unknown",

    airline:
      data.airline ||
      "Unknown",

    flight:
      data.flight_number ||
      data.flightNumber ||
      "Unknown",

    origin,

    destination,

    date:
      data.date ||
      data.departure_date ||
      "Unknown",

    departureTime:
      data.departure_time ||
      data.boarding_time ||
      "Unknown",

    arrivalTime:
      data.arrival_time ||
      "Unknown",

    seat:
      data.seat ||
      "Unknown",

    gate:
      data.gate ||
      data.boarding_gate ||
      "Unknown",

    class:
      data.class ||
      data.class_of_service ||
      "Unknown",

    aircraft:
      data.aircraft_type ||
      "Unknown",
  };
};


  const totalFilesCount = trips.reduce((acc, current) => acc + (current.files?.length || 0), 0);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="text-sm font-medium text-slate-400 animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10 font-sans antialiased text-slate-800">
      <div className="mx-auto max-w-6xl">
        
    
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
           
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-25">
  Welcome {user?.name || "Traveler"}!
</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Your next adventure starts in <span className="text-emerald-600 font-bold">4 days</span>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/dashboard/documents">
            
            <button className="bg-white border border-slate-200 text-slate-600 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 hover:bg-slate-50">
              <UploadCloud className="h-4 w-4 text-slate-400" />
              Upload Documents
            </button>
            </Link>
            <button className="bg-white border border-slate-200 text-slate-600 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 hover:bg-slate-50">
              <Share2 className="h-4 w-4 text-slate-400" />
              Share Itinerary
            </button>
          </div>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Compass className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Trips</span>
              <span className="text-xl font-black text-slate-800 mt-0.5 block">{trips.length}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0"><Users className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Shared Trips</span>
              <span className="text-xl font-black text-slate-800 mt-0.5 block">12</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0"><FileText className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Documents</span>
              <span className="text-xl font-black text-slate-800 mt-0.5 block">{totalFilesCount}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0"><Calendar className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Upcoming</span>
              <span className="text-xl font-black text-slate-800 mt-0.5 block">02</span>
            </div>
          </div>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
          
      
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-800 tracking-tight">Trip Activity</h3>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Miles traveled vs. New destinations per month</p>
              </div>
              <select className="bg-slate-50 border border-slate-100 text-slate-500 font-bold text-[11px] py-1.5 px-3 rounded-xl focus:outline-hidden cursor-pointer">
                <option>Last 6 Months</option>
              </select>
            </div>

            <div className="flex items-end justify-between gap-2 h-40 pt-4 px-2">
              {[{ label: "Jan", val: "h-[50%]" }, { label: "Feb", val: "h-[75%]" }, { label: "Mar", val: "h-[35%]" }, { label: "Apr", val: "h-[85%]" }, { label: "May", val: "h-[65%]" }, { label: "Jun", val: "h-[0%]" }].map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group">
                  <div className="w-full bg-slate-50 rounded-lg h-32 flex items-end overflow-hidden relative shadow-inner">
                    <div className={`w-full bg-[#065F46] rounded-t-md ${bar.val} group-hover:bg-emerald-500 transition-all duration-300`} />
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold mt-2">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

         
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-800 tracking-tight mb-4">Upcoming Flights</h3>
              
              <div className="space-y-3">
                {trips.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-8">No flight segments found.</div>
                ) : (
                  trips.slice(0, 2).map((trip, idx) => {
                    const flight = getFlightDetails(trip);
                    return (
                      <div key={trip._id} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-3.5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-9 w-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#065F46] shrink-0">
                            <Plane className="h-4 w-4 transform rotate-45" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-black text-slate-700 tracking-wide uppercase truncate">
                              {flight.origin} → {flight.destination}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 mt-0.5 truncate">
                              {flight.date}
                            </p>
                          </div>
                        </div>
                       
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <button className="w-full text-center bg-slate-50 border border-slate-100/60 text-slate-600 font-bold text-xs py-2.5 rounded-xl hover:bg-slate-100 mt-4">
              View All Schedule
            </button>
          </div>

        </div>

  
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Recent Trips</h2>
            <button className="text-xs font-bold text-[#065F46] hover:underline flex items-center gap-1">
              Manage all trips <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.slice(0, 2).map((trip, idx) => (
              <div key={trip._id} className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden group cursor-pointer hover:shadow-md transition-all relative">
                <div className="aspect-video w-full bg-slate-900 relative">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80"
                    ][idx % 2]} 
                    alt="Destination" 
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {idx === 0 ? "12 Days" : "5 Days"}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-base font-extrabold text-white tracking-wide truncate">
                      {renderSafeText(trip.notes, "New Adventure")}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

           
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;