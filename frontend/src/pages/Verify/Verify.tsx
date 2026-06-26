
import axios, { AxiosError } from "axios";
import React, { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface LocationState {
  email?: string;
}

const Verify: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationState;
  const email = state?.email;

  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!otp.trim()) {
      toast.error("Please enter OTP");
      return;
    }

    if (!email) {
      toast.error("Email not found. Please login again.");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending:", {
        email,
        otp,
      });

      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/verify-otp",
        {
          email,
          otp: otp.trim(),
        }
      );

      console.log("Response:", res.data);

      toast.success(
        res.data.message || "Verified successfully ❤️"
      );

      navigate("/login");
    } catch (error) {
      const err = error as AxiosError<{
        message?: string;
      }>;

      console.log(
        "VERIFY ERROR:",
        err.response?.data
      );

      toast.error(
        err.response?.data?.message ||
          "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (

      <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 to-teal-50/30 flex items-center justify-center px-4 py-10 overflow-hidden">

    <div className="absolute top-28 left-16 opacity-10 hidden lg:block">
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#005B52"
        strokeWidth="1.5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </div>

    <div className="relative w-full max-w-4xl flex items-center justify-center">


      <div className="absolute left-[46%] top-1/2 -translate-y-1/2 w-[380px] h-[470px] bg-[#005B52] rounded-[32px] shadow-2xl rotate-6 hidden lg:flex flex-col justify-end p-8 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>

        <div className="relative">
          <p className="uppercase tracking-[0.3em] text-xs opacity-70">
            Secure Access
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Verify
            <br />
            Your Identity
          </h2>

          <p className="text-white/70 mt-4 leading-7 text-sm">
            Enter the verification code sent to your email to activate your
            VoyageAI account.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-[36px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-10">

        {/* Logo */}

        <div className="w-14 h-14 rounded-2xl bg-[#005B52] flex items-center justify-center mx-auto shadow-lg">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"
            />
          </svg>

        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800 mt-6">
          Verify Account
        </h1>

        <p className="text-center text-slate-500 text-sm mt-2">
          We've sent a verification code to
        </p>

        <p className="text-center font-semibold text-[#005B52] mt-2 break-all">
          {email}
        </p>

        <form onSubmit={handleVerify} className="mt-8 space-y-6">

          <div>

            <label className="block text-sm font-semibold text-slate-600 mb-2">
              OTP Code
            </label>

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              className="w-full rounded-2xl border border-slate-200 py-3 px-4 text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-[#005B52] focus:ring-2 focus:ring-[#005B52]/10"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#005B52] hover:bg-[#00473F] text-white py-3.5 rounded-2xl font-semibold transition-all disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <div className="text-center text-sm text-slate-500">

            Didn't receive the OTP?

            <button
              type="button"
              className="ml-1 text-[#005B52] font-semibold hover:underline"
            >
              Resend OTP
            </button>

          </div>

        </form>

      </div>

    </div>
  </div>
  );
};

export default Verify;