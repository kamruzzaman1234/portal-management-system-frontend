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

const StudentCard  = ({student, handleDelete})=>{
    const {full_name, emaill, date, student_id, profile_url, joining_date, _id} = student
    

//   const handleDelete = async (_id) => {
//       if (!confirm("Are you sure you want to delete?")) return;

//     try {
//       const res = await fetch(`http://localhost:6060/students_singup/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setNews(news.filter(item => item._id !== _id));
//       }
//     } catch (error) {
//       console.log(error);
//     }

// };

    return(
       <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center">
      
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
        <img
          src={profile_url}
          alt={full_name}
          className="w-full h-full object-cover"
        />
      </div>

      
      <h2 className={`${cinzel.className} mt-4 text-xl font-semibold text-gray-800`}>{full_name}</h2>

      <p className="text-gray-500 text-sm mt-1">ID: {student_id}</p>


     <div className="flex justify-between">
  <Link href={`/students/${_id}`}>
    <button className="mt-5 px-5 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-300">
      View Details
    </button>
  </Link>

  <button
    onClick={() => handleDelete(_id)}
    className="mt-5 px-5 py-2 bg-red-600 hover:bg-red-700 cursor-pointer
    text-white font-medium rounded-xl shadow-md transition-all duration-300"
  >
    Delete
  </button>
</div>

      
    </div>
    )
}
export default StudentCard;