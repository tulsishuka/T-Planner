
import React, { useState } from "react";
import axios from "axios";
import { Calendar, FileUp, Sparkles, X, Mail, FileText } from "lucide-react";

const Documents = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12 font-sans antialiased text-slate-800">
      <div className="mx-auto max-w-5xl">
  
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-25">Create New Trip</h1>
          <p className="text-sm text-slate-500 mt-2 max-w-xl leading-relaxed">
            Upload your documents and let our AI craft a perfectly synchronized itinerary for your next adventure.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
         
          <div className="lg:col-span-2 space-y-6">
            
    
            <div className="border-2 border-dashed border-slate-200 rounded-3xl bg-white p-8 text-center shadow-xs hover:border-emerald-400 transition-colors relative">
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
                  setFiles((prevFiles) => [...prevFiles, ...newFiles]);
                }}
              />

              <div className="mx-auto h-12 w-12 rounded-2xl bg-[#ECFDF5] flex items-center justify-center text-[#047857] mb-4">
                <FileUp className="h-6 w-6" />
              </div>

              <h3 className="text-sm font-bold text-slate-700">Drag & Drop Documents</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed">
                Upload PDFs, boarding passes, or hotel confirmations. Our AI extracts dates, locations, and flight details automatically.
              </p>

           
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer bg-[#047857] hover:bg-[#065F46] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  Browse Files
                </label>
               
              </div>

              <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mt-4 block">
                Supported: PDF, JPG, PNG, WEBP (Max 15MB)
              </span>
            </div>

     
            {files.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Uploaded Queue ({files.length})
                </h3>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-700 truncate max-w-[240px] md:max-w-md">
                          {file.name}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="p-1 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Remove Document"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

  
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" /> Travel Notes
              </label>
              
              <textarea
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us about your preferences... (e.g., 'I love hidden gems', 'Prefer early morning flights', 'Vegetarian friendly restaurants only')"
                className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 focus:bg-white resize-none transition-all leading-relaxed"
              />
            </div>

          </div>

  
       <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> Trip Window
              </span>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-100 text-xs md:text-sm font-medium text-slate-700 rounded-xl p-3 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-100 text-xs md:text-sm font-medium text-slate-700 rounded-xl p-3 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

         
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="relative aspect-video w-full bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80" 
                  alt="Destination Preview Thumbnail" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute top-3 left-3 bg-[#ECFDF5] text-[#047857] text-[9px] font-black tracking-widest px-2 py-0.5 rounded uppercase">
                  Auto-Detect
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white tracking-wide truncate">New Adventure</h4>
                </div>
              </div>
              
              <div className="p-4 text-slate-500 text-xs leading-relaxed border-t border-slate-50">
                Our AI will use your uploaded documents to determine your destination, budget, and travel style automatically.
              </div>
            </div>

          
            <button
              onClick={handleSubmit}
              disabled={loading || files.length === 0}
              className="w-full bg-[#10B981] hover:bg-[#059669] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm tracking-wide py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? "Generating AI Trip..." : "Generate Trip"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Documents;