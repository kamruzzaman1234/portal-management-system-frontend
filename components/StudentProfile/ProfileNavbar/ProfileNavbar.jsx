"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useParams } from "next/navigation";

export default function ProfileNavbar() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(null);

  // Fetch student data
  useEffect(() => {
    if (!params.id) return;
    fetch(`http://localhost:6060/students_signup/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error("Student not found");
        return res.json();
      })
      .then(data => setInfo(data))
      .catch(err => console.error("Fetch error:", err));
  }, [params.id]);

  const navItems = [
    { name: "All Students", href: "/allStudents" },
    { name: "Courses", href: "/courses" },
    { name: "Routine", href: "/routine" },
    { name: "Notices", href: "/notices" },
    
  ];

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors"
        >
          🎓 Student Portal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="hover:text-yellow-300 font-medium transition-colors"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Profile & Logout */}
        <div className="hidden md:flex items-center space-x-5">
          {info && (
            <Link
              href={`/studentProfile/${params.id}`}
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <img
                src={info.profile_url || "https://i.pravatar.cc/40"}
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover"
              />
              <span className="font-medium">{info.full_name || "Profile"}</span>
            </Link>
          )}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-5 py-2 shadow-md uppercase bg-[#005ce6] rounded-2xl text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800/95 backdrop-blur-md px-6 py-6 space-y-5 shadow-lg rounded-b-2xl transition-all duration-300">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="block font-medium hover:text-yellow-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {info && (
            <Link
              href={`/studentProfile/${params.id}`}
              className="block font-medium hover:text-yellow-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {info.full_name || "Profile"}
            </Link>
          )}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full bg-yellow-400/90 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
