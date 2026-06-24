import React from 'react';

const testimonials = [
  {
    id: 1,
    text: `"VoyageAI literally saved my trip to Italy. I just uploaded my 12 different booking emails and it created a beautiful day-by-day map."`,
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    text: `"The AI extraction is magic. It caught a flight delay before my airline even notified me. Best travel companion ever."`,
    name: "Michael Chen",
    role: "Executive at TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    text: `"Finally, a travel app that feels as premium as the hotels I stay in. Clean, efficient, and actually useful."`,
    name: "Elena Rodriguez",
    role: "Luxury Travel Blogger",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  }
];

const Third = () => {
  return (
    <div className="bg-[#EDF2FC] min-h-screen py-16 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center">
      <div className="max-w-9xl w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D233A] tracking-tight mb-4">
              What explorers are saying
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Join thousands of travelers who have upgraded their travel experience with VoyageAI.
            </p>
          </div>
          
          {/* Slider Arrows */}
          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full border border-gray-300 bg-white/60 flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-11 h-11 rounded-full border border-gray-300 bg-white/60 flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-white flex flex-col justify-between min-h-[320px]"
            >
              <div>
                {/* 5-Star Rating (Custom deep teal/green matching the image) */}
                <div className="flex gap-1 mb-6 text-[#006652]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 italic text-sm md:text-[15px] leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-3 mt-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale border border-gray-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Third;