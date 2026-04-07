import { Link } from "react-router-dom";
import { useState } from "react";
import logo2 from "../Images/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 mt-4">
      <div className="w-full max-w-6xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo2} 
            alt="BIA Logo" 
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* RIGHT CTA */}
        <div className="hidden md:block text-xs text-white bg-white/10 px-3 py-1 rounded-full">
          info@bia-advisory.com
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-20 w-[90%] max-w-6xl bg-black/90 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 text-white md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <div className="pt-4 border-t border-gray-700 text-sm">
            info@bia-advisory.com
          </div>
        </div>
      )}
    </div>
  );
}