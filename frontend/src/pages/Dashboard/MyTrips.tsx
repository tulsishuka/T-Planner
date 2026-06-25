
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Trip {
//   _id: string;
//   tripName: string;
//   destination: string;
//   travelStyle: string;
//   itinerary: string;
//   startDate: string;
//   endDate: string;
//   notes: string;
//   fileType: string;
// }

// const MyTrips = () => {
//   const [trips, setTrips] = useState<Trip[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const { data } = await axios.get(
//           "http://localhost:3000/api/documents",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
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

//   if (loading) {
//     return (
//       <div className="p-10 text-center">
//         Loading trips...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#EDF2FC] min-h-screen py-12 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">
//           My Trips
//         </h1>

//         {trips.length === 0 ? (
//           <div className="bg-white p-6 rounded-xl shadow">
//             No trips found.
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {trips.map((trip) => (
//               <div
//                 key={trip._id}
//                 className="bg-white rounded-2xl p-6 shadow"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h2 className="text-2xl font-bold">
//                       {trip.tripName}
//                     </h2>

//                     <p className="text-gray-500">
//                       {trip.destination}
//                     </p>
//                   </div>

//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     {trip.travelStyle}
//                   </span>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <p className="font-semibold">
//                       Start Date
//                     </p>

//                     <p>
//                       {new Date(
//                         trip.startDate
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="font-semibold">
//                       End Date
//                     </p>

//                     <p>
//                       {new Date(
//                         trip.endDate
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <p className="font-semibold">
//                     Notes
//                   </p>

//                   <p>{trip.notes}</p>
//                 </div>

//                 <div>
//                   <p className="font-semibold mb-2">
//                     AI Generated Itinerary
//                   </p>

//                   <div className="bg-gray-50 p-4 rounded-xl">
//                     <p className="whitespace-pre-wrap text-sm">
//                       {trip.itinerary}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex gap-3">
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
//                     Share
//                   </button>

//                   <button className="bg-gray-200 px-4 py-2 rounded-lg">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyTrips;





import React, { useEffect, useState } from "react";
import axios from "axios";

interface Trip {
  _id: string;
  tripName: string;
  destination: string;
  travelStyle: string;
  itinerary: string;
  startDate: string;
  endDate: string;
  notes: string;
  fileType: string;
  shareId: string;
}

const MyTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState("");

  useEffect(() => {
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

        console.log(data);

        setTrips(data.docs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleShare = async (shareId: string) => {
    const shareUrl = `${window.location.origin}/share/${shareId}`;

    try {
      await navigator.clipboard.writeText(shareUrl);

      setCopiedLink(shareUrl);

      alert("Share link copied!");
    } catch (error) {
      console.log(error);
      alert("Failed to copy link");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-lg">
        Loading Trips...
      </div>
    );
  }

  return (
    <div className="bg-[#EDF2FC] min-h-screen py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          My Trips
        </h1>

        {copiedLink && (
          <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-xl">
            <p className="font-semibold text-green-700">
              Share Link Copied:
            </p>

            <p className="break-all text-sm mt-2">
              {copiedLink}
            </p>
          </div>
        )}

        {trips.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No trips found.
          </div>
        ) : (
          <div className="space-y-6">
            {trips.map((trip) => (
              <div
                key={trip._id}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {trip.tripName}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {trip.destination}
                    </p>
                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {trip.travelStyle}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="font-semibold">
                      Start Date
                    </p>

                    <p>
                      {trip.startDate
                        ? new Date(
                            trip.startDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      End Date
                    </p>

                    <p>
                      {trip.endDate
                        ? new Date(
                            trip.endDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-semibold">
                    Notes
                  </p>

                  <p className="text-gray-600">
                    {trip.notes || "No notes"}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="font-semibold mb-2">
                    AI Generated Itinerary
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {trip.itinerary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      handleShare(trip.shareId)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                  >
                    Share Trip
                  </button>

                  <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg">
                    View Details
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-400">
                  Share ID: {trip.shareId}
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