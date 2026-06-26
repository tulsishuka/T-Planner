
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SharedTrip = () => {
  const { shareId } = useParams();

  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const { data } = await axios.get(
          `https://t-planner-1.onrender.com/api/documents/share/${shareId}`
        );
        console.log("SHARED TRIP:", data.trip);
        setTrip(data.trip);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [shareId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-medium text-emerald-800 bg-stone-50">
        <div className="animate-pulse">Loading Trip...</div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-medium text-rose-700 bg-stone-50">
        Trip Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-16 font-sans antialiased text-stone-800">
 
      <div className="relative h-72 md:h-96 w-full overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" // High-quality placeholder matching the image vibe
          alt="Amalfi Coast Sunset View"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200/50 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Verified Itinerary
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 drop-shadow-sm">
            Summer Escape: Amalfi Coast
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Trip curated for {trip.files?.[0]?.extractedData?.passenger_name || "James Carter"}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-4 relative z-10 space-y-6">

        {trip.files?.map((file: any, index: number) => {
          const data = file.extractedData || {};
          
          return (
            <div key={file._id || index} className="space-y-6">
          
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 overflow-hidden">
      
                <div className="bg-[#036240] text-white p-4 px-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 fill-current transform -rotate-45" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase opacity-80 leading-none">Prime Carrier</div>
                      <div className="text-xs font-black tracking-wide uppercase">{data.airline || "AI Travel Airlines"}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-80 leading-none">Flight No.</div>
                    <div className="text-xs font-black tracking-wide">{data.flight_number || data.flightNumber || "AI-1024"}</div>
                  </div>
                </div>

                <div className="p-6 px-8 flex justify-between items-center relative">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-[#036240]">
                      {data.departure_city_airport?.substring(0, 3).toUpperCase() || "JFK"}
                    </h2>
                    <p className="text-[11px] text-stone-400 font-medium max-w-[120px] truncate">
                      {data.departure_city_airport || data.departure?.city || "New York City, USA"}
                    </p>
                    <p className="text-xs font-bold text-stone-700 mt-2">{data.departure_time || data.boarding_time || "10:45 AM"}</p>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <div className="text-[10px] font-bold text-stone-400 mb-1 tracking-wider uppercase">8h 45m Non-Stop</div>
                    <div className="w-full flex items-center relative">
                      <div className="h-[1px] w-full bg-stone-200 border-dashed border-t"></div>
                      <svg className="w-4 h-4 fill-emerald-700 absolute left-1/2 -translate-x-1/2 transform rotate-90" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">
                    <h2 className="text-2xl font-black tracking-tight text-[#036240]">
                      {data.arrival_city_airport?.substring(0, 3).toUpperCase() || "FCO"}
                    </h2>
                    <p className="text-[11px] text-stone-400 font-medium max-w-[120px] truncate">
                      {data.arrival_city_airport || data.arrival?.city || "Rome, Italy"}
                    </p>
                    <p className="text-xs font-bold text-stone-700 mt-2">
                      {data.arrival_time || "05:30 AM"} <span className="text-[10px] font-bold align-super text-emerald-600">+1</span>
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center px-4">
                  <div className="absolute -left-2 w-4 h-4 bg-neutral-50 rounded-full border-r border-stone-200/40"></div>
                  <div className="w-full border-b border-dashed border-stone-200"></div>
                  <div className="absolute -right-2 w-4 h-4 bg-neutral-50 rounded-full border-l border-stone-200/40"></div>
                </div>

                <div className="p-6 bg-stone-50/50 grid grid-cols-4 gap-4 text-left">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">Passenger</span>
                    <span className="text-xs font-bold text-stone-800 truncate block">
                      {data.passenger_name || data.passengerName || "James Carter"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">Gate / Terminal</span>
                    <span className="text-xs font-bold text-stone-800 block">{data.gate || data.boarding_gate || "B42 / T4"}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">Seat</span>
                    <span className="text-xs font-bold text-stone-800 block">{data.seat || "12A, 12B"}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">Status</span>
                    <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded text-[9px] uppercase font-extrabold tracking-wider bg-emerald-100 text-emerald-800">
                      On Time
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Weather Widget */}
                <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <svg className="w-7 h-7 text-amber-500 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 16.243l.707.707M7.757 7.757l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                    <span className="text-xs font-bold text-stone-400">{data.arrival?.city || "Positano, IT"}</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-3xl font-black tracking-tight text-stone-800">28°C</h3>
                    <p className="text-[11px] text-stone-400 font-medium mt-0.5">Sunny with light sea breeze</p>
                  </div>
                </div>

                <div className="bg-[#242629] md:col-span-2 rounded-2xl overflow-hidden shadow-sm flex text-white border border-stone-800">
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-stone-400">Primary Residence</span>
                      <h4 className="text-sm font-bold text-stone-100 mt-0.5">Hotel Villa Franca</h4>
                      <p className="text-[11px] text-stone-400 mt-1 truncate max-w-xs">Viale Pasitea, 318, 84017 Positano SA</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="bg-emerald-700 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide flex items-center gap-1 transition">
                        View Map
                      </button>
                      <button className="bg-stone-700 hover:bg-stone-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition">
                        Check-in Details
                      </button>
                    </div>
                  </div>
                  <div className="w-1/3 relative bg-stone-800">
                    <img
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80"
                      alt="Hotel View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <details className="group border border-stone-200 rounded-xl bg-white overflow-hidden">
                <summary className="cursor-pointer font-bold text-xs text-stone-500 p-3 bg-stone-50 group-open:border-b transition select-none flex justify-between items-center">
                  <span>View Extracted Data ({data.airline || "Document JSON"})</span>
                  <span className="text-[10px] bg-stone-200/60 px-1.5 py-0.5 rounded">JSON</span>
                </summary>
                <pre className="bg-stone-900 text-emerald-400 p-4 overflow-auto text-xs max-h-60 leading-relaxed font-mono">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </details>
            </div>
          );
        })}

        <div className="pt-6 border-t border-stone-200/70">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-stone-400">Daily Schedule</h3>
              <p className="text-sm font-bold text-stone-800 mt-0.5">Day 1: Arrival &amp; Exploration</p>
            </div>
            <span className="text-stone-400 p-1.5 bg-white border rounded-lg shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>

          <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-stone-200">
      
            <div className="flex items-start gap-4 relative group">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center ring-4 ring-neutral-50 z-10 text-[10px] text-white font-bold">✓</div>
              <div className="flex-1 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 tracking-wider">09:00 AM</span>
                  <h4 className="text-xs font-black text-stone-800 mt-0.5">Luxury Private Transfer</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Mercedes S-Class pick up from FCO Arrivals Lounge.</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Included</span>
              </div>
            </div>

      
            <div className="flex items-start gap-4 relative group">
              <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center ring-4 ring-neutral-50 z-10 text-[10px] text-stone-500 font-bold">•</div>
              <div className="flex-1 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 tracking-wider">01:30 PM</span>
                  <h4 className="text-xs font-black text-stone-800 mt-0.5">Lunch at Chez Black</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Authentic Amalfi seafood by the beachfront.</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">Reservation</span>
              </div>
            </div>

         
            <div className="flex items-start gap-4 relative group">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center ring-4 ring-neutral-50 z-10 text-[10px] text-white font-bold">✓</div>
              <div className="flex-1 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 tracking-wider">04:00 PM</span>
                  <h4 className="text-xs font-black text-stone-800 mt-0.5">Sunset Coastal Cruise</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Private Riva boat tour around the Li Galli islands.</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Adventure</span>
              </div>
            </div>
          </div>
        </div>

        {trip.notes && (
          <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5 mt-4">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Trip Curator Notes</h4>
            <div className="text-xs text-amber-900/80 leading-relaxed font-medium">{trip.notes}</div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SharedTrip;