"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ApplyNow() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    
    if (status === "unauthenticated") {
      const modal = document.getElementById("login_modal");
      if (modal) {
        modal.showModal();
      }
    }
  }, [status]);

  if (status === "loading") {
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div className="max-w-3xl mx-auto mt-20 p-6 shadow-lg rounded-lg border">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Welcome, {session.user?.name} 👋
        </h2>
        <p className="mt-4 text-center text-gray-700">
          Now you can apply for your desired service.
        </p>
      </div>
    );
  }

  return null;
}
