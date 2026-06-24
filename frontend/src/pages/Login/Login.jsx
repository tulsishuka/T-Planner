import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <p className="text-xs text-slate-500 mt-6 text-center">
          New to VoyageAI?{' '}
          <Link to="/register" className="text-[#005B52] font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </div>

     
    </div>
  );
};

export default Login;