import React from 'react';
import { User, Mail, Lock, Eye, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const Register = () => {

 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    if (!formData.name.trim()) {
      return toast.error("Please enter your name");
    }

    if (!formData.email.trim()) {
      return toast.error("Please enter your email");
    }

    if (!formData.password.trim()) {
      return toast.error("Please enter your password");
    }

    try {
      setLoading(true);

      await axios.post(
        "https://t-planner-1.onrender.com/api/v1/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      toast.success("Account created successfully");

      const userEmail = formData.email;

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/verify", {
          state: { email: userEmail },
        });
      }, 1000);
    } 
  
    catch (error) {
  const err = error as AxiosError<{ message: string }>;

  toast.error(
    err.response?.data?.message ||
      "Account already exists or something went wrong"
  );
}
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-15 w-full bg-gradient-to-br from-slate-50 to-teal-50/30 flex items-center justify-center p-4 relative overflow-hidden font-sans">

      <div className="absolute top-1/4 left-10 md:left-20 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#005B52" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>

      <div className="relative w-full max-w-4xl flex items-center justify-center">
      
        <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-[380px] h-[460px] bg-[#005B52] rounded-[32px] shadow-2xl rotate-6 hidden lg:flex flex-col justify-end p-8 text-white overflow-hidden transform origin-center transition-all duration-300 hover:rotate-3">
     
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 space-y-2">
            <p className="text-sm tracking-widest uppercase opacity-60">Featured Journey</p>
            <h3 className="text-2xl font-semibold">Odyssey '25</h3>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[440px] bg-white rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10 flex flex-col items-center">
 
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


          <form className="w-full mt-8 space-y-5" onSubmit={handleSubmit}>

  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-2">
      Full Name
    </label>

    <div className="relative">
      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Alex Rivers"
        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#005B52]/20 focus:border-[#005B52]"
      />
    </div>
  </div>

  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-2">
      Email Address
    </label>

    <div className="relative">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="alex@gmail.com"
        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#005B52]/20 focus:border-[#005B52]"
      />
    </div>
  </div>

  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-2">
      Password
    </label>

    <div className="relative">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#005B52]/20 focus:border-[#005B52]"
      />
    </div>
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full py-3.5 bg-[#005B52] hover:bg-[#00473F] text-white rounded-2xl font-semibold transition disabled:opacity-50"
  >
    {loading ? "Creating Account..." : "Create Account"}
  </button>
</form>

        
<p className="text-sm text-slate-500 mt-6">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-[#005B52] font-semibold hover:underline"
  >
    Sign in
  </Link>
</p>
        </div>
      </div>
    </div>
  );
};

export default Register;