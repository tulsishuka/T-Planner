// import React, { useState } from "react";
// import axios from "axios";

// const Documents = () => {
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [notes, setNotes] = useState("");
//   const [files, setFiles] = useState<File[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");

//       const formData = new FormData();

//       formData.append("startDate", startDate);
//       formData.append("endDate", endDate);
//       formData.append("notes", notes);

//       // ✅ multiple files
//       files.forEach((file) => {
//         formData.append("document", file);
//       });

//       const res = await axios.post(
//         "http://localhost:3000/api/documents/upload",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("UPLOAD SUCCESS:", res.data);

//       alert("Trip created successfully!");

//       setStartDate("");
//       setEndDate("");
//       setNotes("");
//       setFiles([]);
//     } catch (error) {
//       console.log(error);
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex justify-center py-10 px-4">
//       <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-lg">

//         {/* HEADER */}
//         <h1 className="text-3xl font-bold mb-2 text-slate-800">
//           ✈ Create AI Trip
//         </h1>
//         <p className="text-gray-500 mb-6">
//           Upload multiple travel documents and generate AI itinerary
//         </p>

//         {/* DATES */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="date"
//             className="border p-3 rounded-lg"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />

//           <input
//             type="date"
//             className="border p-3 rounded-lg"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>

//         {/* NOTES */}
//         <textarea
//           className="w-full border p-3 rounded-lg mt-4"
//           rows={4}
//           placeholder="Enter trip notes..."
//           value={notes}
//           onChange={(e) => setNotes(e.target.value)}
//         />

//         {/* FILE UPLOAD BOX */}
//         <div className="mt-5 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition">
//           <input
//             type="file"
//             multiple
//             className="hidden"
//             id="fileUpload"
//             onChange={(e) => {
//               if (e.target.files) {
//                 setFiles(Array.from(e.target.files));
//               }
//             }}
//           />
        

//           <label
//             htmlFor="fileUpload"
//             className="cursor-pointer text-gray-600"
//           >
//             📂 Click to upload files (PDF, JPG, PNG)
//           </label>
//         </div>

//         {/* FILE LIST */}
//         {files.length > 0 && (
//           <div className="mt-4 bg-gray-50 p-3 rounded-lg">
//             <p className="font-semibold mb-2">Selected Files:</p>

//             {files.map((file, i) => (
//               <div key={i} className="text-sm text-gray-700">
//                 📄 {file.name}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* BUTTON */}
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
//         >
//           {loading ? "Generating AI Trip..." : "Generate Trip"}
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Documents;







import React, { useState } from "react";
import axios from "axios";

const Documents = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const removeFile = (index: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("notes", notes);

      files.forEach((file) => {
        formData.append("document", file);
      });

      const response = await axios.post(
        "http://localhost:3000/api/documents/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("UPLOAD SUCCESS:", response.data);

      alert("Trip created successfully!");

      setStartDate("");
      setEndDate("");
      setNotes("");
      setFiles([]);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          ✈ Create AI Trip
        </h1>

        <p className="text-gray-500 mb-6">
          Upload multiple travel documents and generate an AI itinerary
        </p>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-3 rounded-lg"
          />
        </div>

        {/* Notes */}
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter trip notes..."
          className="w-full border p-3 rounded-lg mt-4"
        />

        {/* Upload Box */}
        <div className="mt-5 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">

          <input
            id="fileUpload"
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const selectedFiles = e.target.files;

              if (!selectedFiles) return;

              const newFiles = Array.from(selectedFiles);

              setFiles((prevFiles) => [
                ...prevFiles,
                ...newFiles,
              ]);
            }}
          />

          <label
            htmlFor="fileUpload"
            className="cursor-pointer text-blue-600 font-semibold"
          >
            📂 Click to Upload Files
          </label>

          <p className="text-sm text-gray-500 mt-2">
            PDF, PNG, JPG, JPEG supported
          </p>
        </div>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className="mt-5 bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold mb-3">
              Selected Files ({files.length})
            </h3>

            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border rounded-lg p-3"
                >
                  <span className="text-sm truncate">
                    📄 {file.name}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || files.length === 0}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Generating AI Trip..." : "Generate Trip"}
        </button>

      </div>
    </div>
  );
};

export default Documents;