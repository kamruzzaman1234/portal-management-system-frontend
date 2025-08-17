"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function Navbar() {
  const { data: session } = useSession();

  const Links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "My Courses", path: "/myCourse" },
  ];

  return (
    <div className="py-4 bg-[#1a75ff]">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-0">
        <div className="navbar">
          
          <div className="navbar-start">
            
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-sky-900 rounded-box w-52"
              >
                {Links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`${cinzel.className} font-semibold text-white`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white">
              Portal Management
            </a>
          </div>

          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {Links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${cinzel.className} font-semibold text-white text-lg`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="navbar-end">
            {session ? (
              <div className="flex items-center gap-3 text-white">
                <span className="font-semibold">
                    <div>
                        {session.user?.image && (
                          <img
                           src={session.user.image}
                          alt={session.user?.name || "User Avatar"}
                          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                   />
  )}
                    </div>
                 
                </span>
                <button onClick={() => signOut({callbackUrl: '/'})} className="px-6 py-2 shadow-lg shadow-[#005ce6] uppercase
                   bg-[#005ce6] rounded-2xl cursor-pointer text-white font-bold">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  className="px-6 py-2 shadow-lg shadow-[#005ce6] uppercase
                   bg-[#005ce6] rounded-2xl cursor-pointer text-white font-bold"
                  onClick={() =>
                    document.getElementById("login_modal").showModal()
                  }
                >
                  Login
                </button>
                <dialog id="login_modal" className="modal bg-sky-900">
                  <div className="modal-box bg-sky-900">
                    <h3 className={`${cinzel.className} font-bold text-2xl mb-4 text-white text-center`}>
                      Login to Portal
                    </h3>

                    
                    <div className="space-y-3">
                      <button
                        onClick={() =>
                          signIn("google", { callbackUrl: "/typeForm" })
                        }
                        className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                      >
                        <FaGoogle /> Continue with Google
                      </button>
                      <h3 className={`${cinzel.className} text-center font-bold text-white`}>OR</h3>
                      <button
                        onClick={() =>
                          signIn("github", { callbackUrl: "/typeForm" })
                        }
                        className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
                      >
                        <FaGithub /> Continue with GitHub
                      </button>
                    </div>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn uppercase bg-sky-800 text-white">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
