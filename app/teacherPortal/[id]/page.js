"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Cinzel, Inter } from "next/font/google";
import { Loader2, Mail, Phone, MapPin, GraduationCap, Calendar } from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function TeacherProfile() {
  const { id } = useParams();
  const router = useRouter();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  // Teacher fetch
  useEffect(() => {
    if (!id) return;
    const fetchTeacher = async () => {
      try {
        const res = await fetch(`https://portal-management-system-backend-1.onrender.com/teacher/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch teacher data");
        }
        const data = await res.json();
        setTeacher(data);
      } catch (err) {
        console.error("Error fetching teacher:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Teacher not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">
            <img
              src={teacher.profile_url || "https://via.placeholder.com/150"}
              alt={teacher.full_name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className={`${cinzel.className} mt-4 text-3xl font-bold text-gray-800`}>
            {teacher.full_name}
          </h1>
          <p className="text-gray-500">{teacher.designation || "Teacher"}</p>
          <p className="text-sm text-gray-400">ID: {teacher.teacher_id}</p>
        </div>

        {/* Teacher Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InfoItem icon={<Mail />} label="Email" value={teacher.email} />
            <InfoItem icon={<Phone />} label="Phone" value={teacher.phone} />
            <InfoItem icon={<Calendar />} label="Joining Date" value={teacher.joining_date || "N/A"} />
          </div>
          <div className="space-y-4">
            <InfoItem icon={<GraduationCap />} label="Qualification" value={teacher.qualification} />
            <InfoItem icon={<MapPin />} label="Address" value={teacher.address} />
            <InfoItem label="Department" value={teacher.department || "N/A"} />
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            ← Back to Teachers
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable info component
const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
      {icon && <span className="text-blue-600 w-5 h-5">{icon}</span>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value || "N/A"}</p>
      </div>
    </div>
  );
};
