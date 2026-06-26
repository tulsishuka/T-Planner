import React, { useEffect, useState } from "react";
import axios from "axios";

const TripDetail = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get("https://t-planner-1.onrender.com/api/documents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTrips(data.docs || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#F8FAFC] font-sans gap-2">
        <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-stone-500">Loading Expeditions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-stone-800 antialiased selection:bg-emerald-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-25">My Expeditions</h1>
          <p className="text-sm text-stone-500 mt-1">Manage and preview all your sync'd dynamic travel schedules.</p>
        </div>

        {trips.length === 0 && (
          <div className="bg-white rounded-2xl border border-stone-200/60 p-12 text-center text-stone-500 max-w-md mx-auto shadow-sm">
            <svg className="w-12 h-12 text-stone-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold text-stone-700">No Trips Found</p>
            <p className="text-xs text-stone-400 mt-1">Upload a travel document to get started.</p>
          </div>
        )}

    
        {trips.map((trip: any) => {
          const primaryFile = trip.files?.[0] || {};
          const primaryData = primaryFile.extractedData || {};

          return (
            <div key={trip._id} className="border-b border-stone-200/60 pb-16 mb-16 last:border-none last:pb-0">
              
          
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2 ">
                    <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-md bg-sky-100 text-sky-800">
                      Adventure &amp; Culture
                    </span>
                    <span className="text-xs text-stone-400 font-medium">
                      • {trip.startDate ? new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "N/A"} - {trip.endDate ? new Date(trip.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "N/A"}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-stone-900">
                    {primaryData.arrival_city_airport || primaryData.arrival?.city ? `${primaryData.arrival_city_airport} Expedition` : "Custom Expedition Route"}
                  </h2>
                  <p className="text-xs text-stone-400 font-mono mt-1">
                    Share ID: {trip.shareId || "N/A"} | Trip ID: {trip._id}
                  </p>
                </div>

   
                <div className="flex items-center gap-3 self-start md:self-auto">
                  <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-600 bg-white border border-stone-200/80 rounded-xl shadow-sm hover:bg-stone-50 transition">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Route
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#036240] hover:bg-[#024f33] rounded-xl shadow-sm transition">
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
               
                <div className="lg:col-span-2 space-y-6">
           
                  <div className="bg-gradient-to-br from-emerald-50/40 via-white to-white border border-stone-100 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm tracking-wide mb-3">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                      </svg>
                      AI Travel Summary
                    </div>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6">
                      {trip.notes || "No custom intelligence insights configured for this destination route template. Provide text notes to view automated itinerary balancing schedules."}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-4">
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest font-bold text-stone-400">Route Type</span>
                        <span className="text-xs font-black text-stone-800 mt-0.5 block truncate">Premium Classic</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest font-bold text-stone-400">Weather Status</span>
                        <span className="text-xs font-black text-stone-800 mt-0.5 block">Dynamic Data</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest font-bold text-stone-400">Sync Date</span>
                        <span className="text-xs font-black text-stone-800 mt-0.5 block truncate">
                          {trip.createdAt ? new Date(trip.createdAt).toLocaleDateString() : "Just Now"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="bg-white border border-stone-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="px-2 py-0.5 text-[9px] font-extrabold tracking-wider uppercase rounded bg-teal-50 text-teal-700 border border-teal-100">
                            Outbound Flight
                          </span>
                          <svg className="w-3.5 h-3.5 text-stone-400 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        
                        <div className="flex justify-between items-center my-2">
                          <div>
                            <h3 className="text-xl font-black text-stone-900">
                              {primaryData.departure_city_airport?.substring(0, 3).toUpperCase() || "SFO"}
                            </h3>
                            <p className="text-[10px] text-stone-400 font-medium truncate max-w-[80px]">
                              {primaryData.departure_city_airport || primaryData.departure?.city || "Departure"}
                            </p>
                          </div>
                          <div className="text-center px-2">
                            <span className="text-[9px] font-bold text-stone-400 block mb-0.5">Non-Stop</span>
                            <div className="w-12 h-[1px] bg-stone-200 relative mx-auto">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 absolute -top-[2px] left-1/2 -translate-x-1/2" />
                            </div>
                          </div>
                          <div className="text-right">
                            <h3 className="text-xl font-black text-stone-900">
                              {primaryData.arrival_city_airport?.substring(0, 3).toUpperCase() || "NRT"}
                            </h3>
                            <p className="text-[10px] text-stone-400 font-medium truncate max-w-[80px]">
                              {primaryData.arrival_city_airport || primaryData.arrival?.city || "Arrival"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-stone-100 pt-3 mt-4 flex justify-between items-center text-[11px]">
                        <span className="font-semibold text-stone-500 truncate max-w-[140px]">
                          {primaryData.airline || "Carrier"} • {primaryData.flight_number || primaryData.flightNumber || "N/A"}
                        </span>
                        <span className="font-bold text-emerald-600">Sync'd</span>
                      </div>
                    </div>

              
                   
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-stone-400 mb-6">Daily Itinerary</h3>

                    <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-stone-200/80">
 
                      <div className="flex items-start gap-4 relative">
                        <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center ring-4 ring-[#F8FAFC] z-10">
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-stone-900 leading-none">Day 01</h4>
                          <span className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mt-0.5 block">Arrival &amp; Transit</span>
                        </div>
                      </div>

                      <div className="pl-10">
                        <div className="bg-white border border-stone-100 p-5 rounded-2xl shadow-sm">
                          <span className="text-[10px] font-extrabold text-emerald-700 tracking-wide uppercase">
                            {primaryData.boarding_time || primaryData.departure_time || "12:00 PM"} • Boarding
                          </span>
                          <h5 className="text-sm font-black text-stone-900 mt-1">
                            Departing via {primaryData.airline || "Carrier Airport Lines"}
                          </h5>
                          <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                            Ensure check-in is complete at gate <span className="font-semibold text-stone-700">{primaryData.gate || "N/A"}</span>. Seat assignments assigned under configuration block <span className="font-semibold text-stone-700">{primaryData.seat || "N/A"}</span>.
                          </p>
                        </div>
                      </div>

                      <div className="pl-10">
                        <div className="bg-white border border-stone-100 p-5 rounded-2xl shadow-sm">
                          <span className="text-[10px] font-extrabold text-amber-700 tracking-wide uppercase">
                            {primaryData.arrival_time || "06:00 PM"} • Dining &amp; Welcome
                          </span>
                          <h5 className="text-sm font-black text-stone-900 mt-1">Arrival &amp; Hotel Check-In</h5>
                          <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                            Taxi or private shuttle transit to accommodations. Dinner reservations pending confirmation matching group parameters.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-stone-100 rounded-3xl p-5 shadow-sm space-y-4">
                    <span className="text-xs font-black text-stone-900 tracking-tight block">Live Route Map</span>
                    <div className="h-44 rounded-2xl bg-sky-100 overflow-hidden relative border border-stone-100">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" 
                        alt="Static Route Map" 
                        className="w-full h-full object-cover filter brightness-95 filter-none"
                      />
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-emerald-600 rounded-full ring-4 ring-white shadow" />
                    </div>
                    <div className="space-y-2 text-[11px] pt-1">
                      <div className="flex justify-between items-center text-stone-600">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span className="font-medium truncate max-w-[120px]">{primaryData.departure_city_airport || "Origin"}</span>
                        </div>
                        <span className="text-stone-400 font-bold">0.0 km</span>
                      </div>
                      <div className="flex justify-between items-center text-stone-600">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          <span className="font-medium truncate max-w-[120px]">{primaryData.arrival_city_airport || "Destination"}</span>
                        </div>
                        <span className="text-stone-400 font-bold">Transit Link</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-stone-100 rounded-3xl p-5 shadow-sm">
                    <h3 className="text-xs font-black text-stone-900 tracking-tight mb-4">Travel Documents</h3>
                    
                    <div className="space-y-3">
                      {trip.files?.map((file: any, fileIdx: number) => (
                        <div key={fileIdx} className="flex items-center justify-between p-3 border border-stone-100 rounded-xl bg-stone-50/40">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg text-xs font-bold uppercase tracking-tight">
                              {file.fileType || "PDF"}
                            </div>
                            <div className="overflow-hidden">
                              <h4 className="text-xs font-bold text-stone-800 truncate max-w-[160px]" title={file.fileName}>
                                {file.fileName}
                              </h4>
                              <p className="text-[10px] text-stone-400 truncate max-w-[160px]">{file.filePath || "No structural local paths"}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <button className="w-full py-2 border border-dashed border-stone-200 hover:border-stone-400 rounded-xl text-center text-stone-500 text-[11px] font-bold mt-2 transition flex items-center justify-center gap-1.5">
                        <span>+</span> Add Document
                      </button>
                    </div>
                  </div>

                  <details className="group border border-stone-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                    <summary className="cursor-pointer font-bold text-xs text-stone-500 p-4 bg-stone-50 group-open:border-b transition select-none flex justify-between items-center">
                      <span>Full Structural Raw Data</span>
                      <span className="text-[10px] bg-stone-200/60 px-1.5 py-0.5 rounded">Metadata</span>
                    </summary>
                    <div className="p-4 bg-white space-y-4 max-h-96 overflow-y-auto">
                      {trip.files?.map((file: any, fileIdx: number) => (
                        <div key={fileIdx} className="space-y-2">
                          <h4 className="text-xs font-black text-[#036240] border-b pb-1">
                            File #{fileIdx + 1}: {file.fileName}
                          </h4>
                          {file.extractedData && Object.keys(file.extractedData).length > 0 ? (
                            <div className="space-y-2">
                              {Object.entries(file.extractedData).map(([key, value]: [string, any]) => (
                                <div key={key} className="text-xs border-b border-stone-100 pb-1.5 last:border-none">
                                  <span className="block font-bold text-stone-400 uppercase text-[9px] tracking-wider">
                                    {key.replace(/_/g, " ")}
                                  </span>
                                  <div className="text-stone-800 font-medium mt-0.5 break-words">
                                    {value && typeof value === "object" ? (
                                      <pre className="bg-stone-50 p-2 rounded text-[10px] font-mono overflow-x-auto text-stone-600 mt-1">
                                        {JSON.stringify(value, null, 2)}
                                      </pre>
                                    ) : (
                                      value?.toString() || "N/A"
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs text-stone-400 italic">No structural field entries extracted.</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </details>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default TripDetail;