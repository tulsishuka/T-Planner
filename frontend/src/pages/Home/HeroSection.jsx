import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center px-6 py-9 md:px-8 lg:px-15">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-5 z-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 bg-[#C9E6FF] text-[#141D21] px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            <span>✨</span> AI-Powered Exploration
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141D21] leading-[1.15] tracking-tight">
            Turn Travel Bookings into <br />
            <span className="text-[#006A60]">Smart AI Itineraries</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
            Stop juggling PDFs and confirmation emails. Upload your tickets and
            let our AI concierge build a seamless, personalized journey in
            seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-[#006A60] hover:bg-[#004D46] text-white font-medium px-6 py-3.5 rounded-xl transition duration-200 shadow-md shadow-[#006A60]/20 cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Get Started Free
            </button>

            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3.5 rounded-xl bg-white transition duration-200 cursor-pointer">
              See Example Trip
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="User 1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="User 2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="User 3"
              />
            </div>

            <p className="text-xs text-gray-500 font-medium">
              Trusted by{" "}
              <span className="text-gray-700 font-semibold">
                12,000+ globetrotters
              </span>
            </p>
          </div>
        </div>

{/* Right Image */}
<div className="lg:col-span-6">
  <img
    src="/hero.png"
    alt="Travel Hero"
    className="w-full"
  />
</div>
      </div>
    </section>
  );
};

export default HeroSection;