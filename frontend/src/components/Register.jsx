import React from 'react';
import { User, Mail, Lock, Eye, Compass } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-teal-50/30 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#005B52" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>

      {/* Main Container Layering (Card & Side Deck) */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        
        {/* Right Side Card Mockup (Voyage Odyssey Card) */}
        <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-[380px] h-[460px] bg-[#005B52] rounded-[32px] shadow-2xl rotate-6 hidden lg:flex flex-col justify-end p-8 text-white overflow-hidden transform origin-center transition-all duration-300 hover:rotate-3">
          {/* Subtle overlay graphics / image placeholder */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 space-y-2">
            <p className="text-sm tracking-widest uppercase opacity-60">Featured Journey</p>
            <h3 className="text-2xl font-semibold">Odyssey '25</h3>
          </div>
        </div>

        {/* Foreground Sign Up Card */}
        <div className="relative z-10 w-full max-w-[440px] bg-white rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10 flex flex-col items-center">
          
          {/* App Icon */}
          <div className="w-12 h-12 bg-[#005B52] rounded-2xl flex items-center justify-center shadow-lg shadow-teal-900/20 mb-6">
            <Compass className="w-6 h-6 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center tracking-tight">
            Begin your journey
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center mt-2 px-4 leading-relaxed">
            Join VoyageAI to experience travel planning redefined by artificial intelligence.
          </p>

          {/* Form */}
          <form className="w-full mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <User className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  placeholder="Alex Rivers" 
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#005B52] focus:ring-2 focus:ring-teal-500/10 transition-all text-slate-800 placeholder-slate-300"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input 
                  type="email" 
                  placeholder="alex@voyage.ai" 
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#005B52] focus:ring-2 focus:ring-teal-500/10 transition-all text-slate-800 placeholder-slate-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full pl-11 pr-11 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#005B52] focus:ring-2 focus:ring-teal-500/10 transition-all text-slate-800 placeholder-slate-300"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-3.5 bg-[#005B52] text-white text-sm font-semibold rounded-2xl shadow-lg shadow-teal-900/10 hover:bg-[#00473F] active:scale-[0.98] transition-all mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center my-6">
            <div className="flex-1 h-[1px] bg-slate-100"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3">or continue with</span>
            <div className="flex-1 h-[1px] bg-slate-100"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="w-full grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.14-3.14C17.45 1.68 14.93 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.14 8.74 5.04 12 5.04z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57l3.6 2.84c2.1-1.94 3.85-4.81 3.85-8.56z"/>
                <path fill="#FBBC05" d="M5.1 14.8c-.25-.76-.39-1.57-.39-2.4s.14-1.64.39-2.4L1.5 7.2C.54 9.12 0 11.25 0 13.5s.54 4.38 1.5 6.3l3.6-2.8z"/>
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.6-2.84c-1.1.74-2.51 1.18-4.36 1.18-3.26 0-6-2.1-6.99-5.26l-3.6 2.8C3.4 20.35 7.35 23 12 23z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-all">
              <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.94 1.07.08 2.18-.52 2.84-1.33z"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-slate-500 mt-8">
            Already have an account?{' '}
            <a href="#signin" className="text-[#005B52] font-semibold hover:underline">
              Sign in
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;