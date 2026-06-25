import React, { useState } from "react";
import axios from "axios";

const Documents = () => {
const [tripName, setTripName] = useState("");
const [destination, setDestination] = useState("");
const [travelStyle, setTravelStyle] = useState("Adventure");

const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");

const [notes, setNotes] = useState("");

const [file, setFile] = useState<File | null>(null);

const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("tripName", tripName);
      formData.append("destination", destination);
      formData.append("travelStyle", travelStyle);

      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
     formData.append("notes", notes);

      if (file) {
        formData.append("document", file);
      }

      const response = await axios.post(
        "http://localhost:3000/api/documents/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      alert("Trip created successfully");

      setTripName("");
      setDestination("");
      setTravelStyle("Adventure");
      setStartDate("");
      setEndDate("");
     
      setNotes("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="bg-[#EDF2FC] min-h-screen py-12 px-6 flex justify-center">
  <div className="max-w-9xl w-full">
    
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#0D233A]">
        Create New Trip
      </h1>

      <p className="text-gray-500 mt-2">
        Fill in your trip details and upload your travel documents.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-sm p-8">
      
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >

        {/* Trip Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Trip Name
          </label>

          <input
            type="text"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            placeholder="Summer in Amalfi"
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Destination
          </label>

          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Paris, France"
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          />
        </div>

        {/* Travel Style */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Travel Style
          </label>

          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          >
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />
          </div>
        </div>

        {/* Budget + Travelers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        

         
        </div>

        {/* Notes */}
      
        {/* Upload */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Travel Documents
          </label>

          <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer hover:bg-gray-50">
            
            <span className="text-gray-500">
              Click to upload PDF, PNG, JPG
            </span>

           <input
  type="file"
  accept=".pdf,.png,.jpg,.jpeg"
  className="hidden"
  onChange={(e) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  }}
/>
          </label>

{file && (
  <div className="mt-3 p-3 bg-green-50 rounded-lg">
    <p className="text-green-700 text-sm">
      {file.name}
    </p>
  </div>
)}
        </div>

{/* Notes */}
<div>
  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
    Notes
  </label>

  <textarea
    rows={4}
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Any special requests, activities, food preferences, hotel requirements, etc."
    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 resize-none transition-colors"
  />
</div>


        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#006652] hover:bg-[#005242] text-white py-3 rounded-xl font-semibold"
        >
          {loading
            ? "Uploading..."
            : "Generate AI Itinerary"}
        </button>

      </form>
    </div>
  </div>
</div>
  );
};

export default Documents;