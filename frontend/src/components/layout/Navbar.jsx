
import React, { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const navLinks = [
    {
      name: "Features",
      href: "/#features",
    },
    {
      name: "How It Works",
      href: "/#how-it-works",
    },
    {
      name: "Testimonials",
      href: "/#testimonial",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="text-white text-2xl font-bold tracking-wide">
            VoyageAI
          </div>
        </Link>

  
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          {token && (
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white transition"
            >
              Dashboard
            </Link>
          )}
        </div>


        <div className="hidden md:flex items-center gap-4">

          {token ? (
            <>
              <div className="flex items-center gap-2 text-white">
                <User size={18} />
                <span>{user?.name}</span>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-teal-600 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-gray-300 hover:text-white">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-full transition">
                  Get Started
                </button>
              </Link>
            </>
          )}

        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/10 px-6 py-6 space-y-5">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          {token && (
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          )}

          <hr className="border-white/10" />

          {token ? (
            <>
              <div className="flex items-center gap-2 text-white">
                <User size={18} />
                {user?.name}
              </div>

              <button
                onClick={handleLogout}
                className="w-full bg-teal-600 hover:bg-red-600 py-3 rounded-full text-white flex justify-center items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full bg-teal-600 hover:bg-teal-500 py-3 rounded-full text-white">
                  Get Started
                </button>
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
