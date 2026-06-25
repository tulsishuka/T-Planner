// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyTrips = () => {
//   const [trips, setTrips] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [copiedLink, setCopiedLink] = useState("");

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const { data } = await axios.get(
//           "http://localhost:3000/api/documents",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setTrips(data.docs);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrips();
//   }, []);

//   const handleShare = async (shareId: string) => {
//     const shareUrl = `${window.location.origin}/share/${shareId}`;

//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       setCopiedLink(shareUrl);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-10 text-center text-lg">
//         Loading Trips...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-5">
//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <h1 className="text-4xl font-bold mb-8 text-slate-800">
//           ✈ My Trips Dashboard
//         </h1>

//         {/* COPIED LINK */}
//         {copiedLink && (
//           <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-xl">
//             <p className="text-green-700 font-semibold">
//               Share Link Copied
//             </p>
//             <p className="text-sm break-all">{copiedLink}</p>
//           </div>
//         )}

//         {/* EMPTY STATE */}
//         {trips.length === 0 ? (
//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             No trips found
//           </div>
//         ) : (
//           <div className="space-y-6">

//             {trips.map((trip) => {
//               const data = trip.extractedData || {};

//               return (
//                 <div
//                   key={trip._id}
//                   className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
//                 >

//                   {/* TOP SECTION */}
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h2 className="text-2xl font-bold text-slate-800">
//                         {data.passengerName || "Unknown Passenger"}
//                       </h2>

//                       <p className="text-gray-500">
//                         {data.departureAirport} → {data.arrivalAirport}
//                       </p>
//                     </div>

//                     <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
//                       {data.airline || "AI Trip"}
//                     </span>
//                   </div>

//                   {/* FLIGHT INFO GRID */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">

//                     <Info label="Flight" value={data.flightNumber} />
//                     <Info label="Date" value={data.travelDate} />
//                     <Info label="Seat" value={data.seat} />
//                     <Info label="Gate" value={data.gate} />

//                   </div>

//                   {/* TIMES */}
//                   <div className="mt-5 flex flex-col md:flex-row gap-4 text-sm text-gray-600">

//                     <p>
//                       <b>Departure:</b> {data.departureTime || "N/A"}
//                     </p>

//                     <p>
//                       <b>Arrival:</b> {data.arrivalTime || "N/A"}
//                     </p>

//                   </div>

//                   {/* SUMMARY */}
//                   <div className="mt-5 bg-slate-50 p-4 rounded-xl border">
//                     <h3 className="font-semibold mb-2">
//                       AI Summary
//                     </h3>

//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {data.summary || "No summary available"}
//                     </p>
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="mt-6 flex gap-3">
//                     <button
//                       onClick={() => handleShare(trip.shareId)}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//                     >
//                       Share
//                     </button>

//                     <button className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-lg">
//                       View
//                     </button>
//                   </div>

//                 </div>
//               );
//             })}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// /* SMALL COMPONENT */
// const Info = ({ label, value }: any) => (
//   <div className="bg-slate-50 p-3 rounded-lg border">
//     <p className="text-xs text-gray-500">{label}</p>
//     <p className="font-semibold text-sm">
//       {value || "N/A"}
//     </p>
//   </div>
// );

// export default MyTrips;






import React, { useEffect, useState } from "react";
import axios from "axios";

const MyTrips = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

      setTrips(data.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (shareId: string) => {
    const url = `${window.location.origin}/share/${shareId}`;

    await navigator.clipboard.writeText(url);

    alert("Share link copied!");
  };

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          ✈ My Trips
        </h1>

        {trips.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No Trips Found
          </div>
        ) : (
          <div className="space-y-8">

            {trips.map((trip) => (
              <div
                key={trip._id}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                {/* Trip Info */}
                <div className="mb-5 border-b pb-4">
                  <h2 className="text-2xl font-bold">
                    Trip Details
                  </h2>

                  <p>
                    Start Date:
                    {" "}
                    {new Date(trip.startDate).toLocaleDateString()}
                  </p>

                  <p>
                    End Date:
                    {" "}
                    {new Date(trip.endDate).toLocaleDateString()}
                  </p>

                  <p>
                    Notes:
                    {" "}
                    {trip.notes}
                  </p>
                </div>

                {/* All Files */}
                <div className="space-y-6">

                  {trip.files?.map((file: any) => {
                    const data = file.extractedData || {};

                    return (
                      <div
                        key={file._id}
                        className="border rounded-xl p-5 bg-slate-50"
                      >
                        <h3 className="font-bold text-lg mb-3">
                          {data.airline || "Flight Document"}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                          {Object.entries(data).map(
                            ([key, value]: any) => (
                              <div
                                key={key}
                                className="border rounded-lg p-3 bg-white"
                              >
                                <p className="text-xs text-gray-500 capitalize">
                                  {key.replace(/_/g, " ")}
                                </p>

                                <p className="font-medium break-words">
                                  {typeof value === "object"
                                    ? JSON.stringify(value)
                                    : String(value)}
                                </p>
                              </div>
                            )
                          )}

                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleShare(trip.shareId)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                  >
                    Share Trip
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrips;