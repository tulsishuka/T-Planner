import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SharedTrip = () => {
  const { shareId } = useParams();

  const [trip, setTrip] = useState<any>(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/documents/share/${shareId}`
        );

        setTrip(data.trip);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrip();
  }, [shareId]);

  if (!trip) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">
        {trip.tripName}
      </h1>

      <p className="text-gray-500 mb-6">
        {trip.destination}
      </p>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="font-bold mb-3">
          AI Generated Itinerary
        </h2>

        <p className="whitespace-pre-wrap">
          {trip.itinerary}
        </p>
      </div>
    </div>
  );
};

export default SharedTrip;