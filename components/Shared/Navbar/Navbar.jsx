"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname(); // ✅ Get current active path

  const Links = session
    ? [
        { title:"Home", path: "/" },
        { title: "Teacher Portal", path: "/teacherPortal" },
        { title: "Student Portal", path: "/studentProfile" },
        { title: "Type Form", path: "/typeForm" },
      ]
    : [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Department", path: "/department" },
        { title: "Help Desk", path: "/helpDesk" },
      ];

  return (
    <div className="bg-slate-700">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-0">
        <div className="navbar">
          {/* Left side */}
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
                      className={`${cinzel.className} font-semibold ${
                        pathname === link.path
                          ? "text-green-400 border-b-2 border-green-400" // ✅ Active link style
                          : "text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/" className="text-xl text-white">
              EWE{" "}
              <sup className="text-green-500 font-bold text-lg">Portal</sup>
            </Link>
          </div>

          {/* Center links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {Links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${cinzel.className} font-semibold text-lg ${
                      pathname === link.path
                        ? "text-green-400 border-b-2 border-green-400" // ✅ Active link style
                        : "text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="navbar-end">
            {session ? (
              <div className="flex items-center gap-3 text-white">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user?.name || "User Avatar"}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  />
                )}
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-5 py-2 uppercase cursor-pointer bg-red-500 text-white font-semibold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  className="px-6 py-2 bg-green-500 uppercase cursor-pointer text-white font-bold"
                  onClick={() =>
                    document.getElementById("login_modal").showModal()
                  }
                >
                  Login
                </button>
                <dialog id="login_modal" className="modal bg-slate-900">
                  <div className="modal-box bg-slate-900">
                    <h3
                      className={`${cinzel.className} font-bold text-2xl mb-4 text-white text-center`}
                    >
                      Login to Portal
                    </h3>

                    <div className="space-y-3">
                      <button
                        onClick={() =>
                          signIn("google", { callbackUrl: "/typeForm" })
                        }
                        className="w-full flex items-center justify-center gap-2 text-white py-2 cursor-pointer bg-green-600 transition"
                      >
                        <FaGoogle /> Continue with Google
                      </button>
                      <h3
                        className={`${cinzel.className} text-center font-bold text-white`}
                      >
                        OR
                      </h3>
                      <button
                        onClick={() =>
                          signIn("github", { callbackUrl: "/typeForm" })
                        }
                        className="w-full flex items-center justify-center gap-2 text-white py-2 cursor-pointer bg-green-600 transition"
                      >
                        <FaGithub /> Continue with GitHub
                      </button>
                    </div>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn uppercase bg-red-500 text-white">
                          Close
                        </button>
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
