"use client";

import Link from "next/link";
import { Cinzel, Inter } from "next/font/google";

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

const TeacherCard = ({teacher})=>{
   const {_id , profile_url, full_name, teacher_id} = teacher
    return(
        <div className="max-w-full w-full">
    <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center">
      
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
        <img
          src={profile_url}
          alt={full_name}
          className="w-full h-full object-cover"
        />
      </div>

 
      <h2 className={`${cinzel.className} mt-4 text-xl font-semibold text-gray-800`}>{full_name}</h2>

    
      <p className="text-gray-500 text-sm mt-1">ID: {teacher_id}</p>

     

      <Link href={`/teacherPortal/${_id}`}>
            <button className="mt-5 px-5 py-2
      cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-300">
        View Details
      </button>
      </Link>
      
    </div>
        </div>
    )
}

export default TeacherCard;