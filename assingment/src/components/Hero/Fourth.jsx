import React from 'react';

const Fourth = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="w-full max-w-9xl bg-gradient-to-br from-[#20354B] to-[#142232] text-white rounded-[32px] px-8 py-16 md:py-20 text-center shadow-xl relative overflow-hidden">
        
        {/* Banner Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to travel <span className="text-[#7EFAD6]">smarter?</span>
        </h2>
        
        {/* Banner Subtitle */}
        <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto mb-10">
          Upload your first booking today and experience the future of travel planning. No credit card required.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button className="w-full sm:w-auto bg-[#7EFAD6] text-[#142232] font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-[#6be0be] transition-colors shadow-md">
            Get Started for Free
          </button>
          
          {/* Secondary CTA */}
          <button className="w-full sm:w-auto bg-[#2C3E52]/60 text-white font-medium text-sm px-7 py-3.5 rounded-xl border border-gray-600/30 hover:bg-[#2C3E52]/90 transition-colors">
            View Pricing
          </button>
        </div>

      </div>
    </div>
  );
};

export default Fourth;