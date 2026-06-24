import React from 'react';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-teal-50/20 flex flex-col items-center justify-center p-6 relative font-sans">
      
      {/* Top Header Branding */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#005B52] tracking-wide">
          VoyageAI
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Your effortless journey starts here.
        </p>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 flex flex-col">
        
        {/* Card Title Header */}
        <h2 className="text-xl font-bold text-slate-800">
          Welcome back
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Please enter your details to sign in.
        </p>

        {/* Form Elements */}
        <form className="w-full mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Input Container */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Mail className="w-4 h-4 stroke-[1.75]" />
              </span>
              <input 
                type="email" 
                placeholder="alex@example.com" 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#005B52] focus:ring-1 focus:ring-[#005B52] transition-all text-slate-800 placeholder-slate-300"
              />
            </div>
          </div>

          {/* Password Input Container */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                Password
              </label>
              <a href="#forgot" className="text-[11px] font-medium text-teal-600 hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Lock className="w-4 h-4 stroke-[1.75]" />
              </span>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#005B52] focus:ring-1 focus:ring-[#005B52] transition-all text-slate-800 placeholder-slate-300"
              />
            </div>
          </div>

          {/* Action Sign-In Button */}
          <button 
            type="submit" 
            className="w-full py-2.5 bg-[#005B52] text-white text-xs font-semibold rounded-xl hover:bg-[#00473F] active:scale-[0.99] transition-all pt-3 mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Form Separator Label */}
        <div className="w-full flex items-center my-5">
          <div className="flex-1 h-[1px] bg-slate-100"></div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-3">or continue with</span>
          <div className="flex-1 h-[1px] bg-slate-100"></div>
        </div>

        {/* OAuth Form Providers Grid */}
        <div className="w-full grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-all">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.14-3.14C17.45 1.68 14.93 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.14 8.74 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57l3.6 2.84c2.1-1.94 3.85-4.81 3.85-8.56z"/>
              <path fill="#FBBC05" d="M5.1 14.8c-.25-.76-.39-1.57-.39-2.4s.14-1.64.39-2.4L1.5 7.2C.54 9.12 0 11.25 0 13.5s.54 4.38 1.5 6.3l3.6-2.8z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.6-2.84c-1.1.74-2.51 1.18-4.36 1.18-3.26 0-6-2.1-6.99-5.26l-3.6 2.8C3.4 20.35 7.35 23 12 23z"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-all">
            <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.94 1.07.08 2.18-.52 2.84-1.33z"/>
            </svg>
            Apple
          </button>
        </div>

        {/* Bottom Registration CTA Link */}
        <p className="text-xs text-slate-500 mt-6 text-center">
          New to VoyageAI?{' '}
          <a href="#signup" className="text-[#005B52] font-bold hover:underline">
            Create an account
          </a>
        </p>
      </div>

      {/* External Utilities Navigation Links */}
      <div className="flex items-center gap-4 mt-8 text-[11px] text-slate-400 font-medium">
        <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
        <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
        <a href="#help" className="hover:text-slate-600 transition-colors">Help Center</a>
      </div>

    </div>
  );
};

export default Login;