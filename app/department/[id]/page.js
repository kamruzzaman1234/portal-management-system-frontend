"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaEnvelope, FaPhone, FaUsers, FaBook, FaMoneyBillWave, FaMapMarkerAlt, FaChalkboardTeacher, FaCalendarAlt, FaTools } from "react-icons/fa";
import { Cinzel, Inter } from "next/font/google";
import Link from "next/link";


const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"
})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"
})

export default function DepartmentDetails() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchDepartment = async () => {
      try {
        const res = await fetch(`http://localhost:6060/department/${id}`);
        if (!res.ok) throw new Error("Failed to fetch department");
        const data = await res.json();
        setDepartment(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, [id]);

  if (loading) return <p className="text-center text-blue-500 mt-20">Loading department...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;
  if (!department) return <p className="text-center text-gray-600 mt-20">Department not found!</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 shadow-2xl rounded-2xl bg-white">
      {/* Title */}
      <h2 className={`${cinzel.className} text-4xl font-bold text-center text-indigo-600 mb-6`}>{department.name}</h2>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={department.image}
          alt={department.name}
          className="rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
        />
      </div>

      {/* Description */}
      <p className={`${inter.className} text-black text-lg leading-relaxed mb-6 text-center`}>{department.description}</p>

      {/* Key Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaChalkboardTeacher className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Head of Department</h3>
            <p className="text-slate-700">{department.head_of_department}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaCalendarAlt className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Established</h3>
            <p className="text-gray-700">{department.established_year}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaBook className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Courses</h3>
            <p className="text-gray-700">{department.total_courses}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaUsers className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-gray-700">{department.total_students}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaMoneyBillWave className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Cost per Semester</h3>
            <p className="text-gray-700">৳ {department.cost_per_semester}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl shadow-md">
          <FaMapMarkerAlt className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-700">{department.location}</p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
          <FaTools /> Facilities
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {department.facilities.map((facility, idx) => (
            <li
              key={idx}
              className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg shadow-sm font-medium text-center"
            >
              {facility}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="mt-10 bg-indigo-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contact Information</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-600 text-2xl" />
            <span className="text-gray-800">{department.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-indigo-600 text-2xl" />
            <span className="text-gray-800">{department.phone}</span>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center">
            <Link href="/applyNow" className={`${cinzel.className} w-full py-3 text-center text-white font-bold bg-blue-300`}>Apply Now</Link>
      </div>
    </div>
  );
}
