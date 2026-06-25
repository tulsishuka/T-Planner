
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
          `http://localhost:3000/api/documents/share/${shareId}`
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
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading Trip...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Trip Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          ✈ Shared Trip
        </h1>

        {/* Trip Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">
            Trip Information
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Info
              label="Start Date"
              value={
                trip.startDate
                  ? new Date(trip.startDate).toLocaleDateString()
                  : "N/A"
              }
            />

            <Info
              label="End Date"
              value={
                trip.endDate
                  ? new Date(trip.endDate).toLocaleDateString()
                  : "N/A"
              }
            />

            <Info
              label="Share ID"
              value={trip.shareId}
            />
          </div>

          {trip.notes && (
            <div className="mt-5">
              <p className="font-semibold mb-2">Notes</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                {trip.notes}
              </div>
            </div>
          )}
        </div>

        {/* All Uploaded Documents */}
        {trip.files?.map((file: any, index: number) => {
          const data = file.extractedData || {};

          return (
            <div
              key={file._id}
              className="bg-white rounded-2xl shadow-md p-6 mb-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Document #{index + 1}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {data.airline || "Flight Document"}
                </span>
              </div>

              {/* Passenger */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Passenger Information
                </h3>

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <Info
                    label="Passenger"
                    value={
                      data.passenger_name ||
                      data.passengerName
                    }
                  />

                  <Info
                    label="Seat"
                    value={data.seat}
                  />

                  <Info
                    label="Class"
                    value={
                      data.class ||
                      data.class_of_service
                    }
                  />
                </div>
              </div>

              {/* Flight */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Flight Information
                </h3>

                <div className="grid md:grid-cols-4 gap-4 mt-3">
                  <Info
                    label="Airline"
                    value={data.airline}
                  />

                  <Info
                    label="Flight Number"
                    value={
                      data.flight_number ||
                      data.flightNumber
                    }
                  />

                  <Info
                    label="Aircraft"
                    value={data.aircraft_type}
                  />

                  <Info
                    label="E-Ticket"
                    value={data.eticket_number}
                  />
                </div>
              </div>

              {/* Route */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Route Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <Info
                    label="Departure"
                    value={
                      data.departure_city_airport ||
                      data.departure?.city
                    }
                  />

                  <Info
                    label="Arrival"
                    value={
                      data.arrival_city_airport ||
                      data.arrival?.city
                    }
                  />
                </div>
              </div>

              {/* Timing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Schedule
                </h3>

                <div className="grid md:grid-cols-4 gap-4 mt-3">
                  <Info
                    label="Date"
                    value={
                      data.date ||
                      data.departure_date
                    }
                  />

                  <Info
                    label="Boarding Time"
                    value={data.boarding_time}
                  />

                  <Info
                    label="Departure Time"
                    value={data.departure_time}
                  />

                  <Info
                    label="Arrival Time"
                    value={data.arrival_time}
                  />
                </div>
              </div>

              {/* Gate */}
              <div>
                <h3 className="text-lg font-semibold">
                  Boarding Details
                </h3>

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <Info
                    label="Gate"
                    value={
                      data.gate ||
                      data.boarding_gate
                    }
                  />

                  <Info
                    label="Departure TZ"
                    value={data.departure_timezone}
                  />

                  <Info
                    label="Arrival TZ"
                    value={data.arrival_timezone}
                  />
                </div>
              </div>

              {/* Raw JSON (Optional Debug) */}
              <details className="mt-6">
                <summary className="cursor-pointer text-blue-600">
                  View Extracted Data
                </summary>

                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto mt-3 text-sm">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Info = ({
  label,
  value,
}: {
  label: string;
  value?: any;
}) => (
  <div className="bg-slate-50 border rounded-xl p-4">
    <p className="text-sm text-gray-500 mb-1">
      {label}
    </p>

    <p className="font-semibold break-words">
      {value || "N/A"}
    </p>
  </div>
);

export default SharedTrip;