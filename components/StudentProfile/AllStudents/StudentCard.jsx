"use client";

import Link from "next/link";

const StudentCard  = ({student})=>{
    const {full_name, emaill, date, student_id, profile_url, joining_date, _id} = student
    return(
       <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center">
      {/* Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
        <img
          src={profile_url}
          alt={full_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{full_name}</h2>

      {/* ID */}
      <p className="text-gray-500 text-sm mt-1">ID: {student_id}</p>

      {/* Button */}

      <Link href={`/students/${_id}`}>
            <button className="mt-5 px-5 py-2
      cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-300">
        View Details
      </button>
      </Link>
      
    </div>
    )
}
export default StudentCard;