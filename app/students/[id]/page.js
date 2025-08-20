"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Cinzel, Inter } from "next/font/google";
import { FaPhone } from "react-icons/fa6";
import Navbar from "@/components/Shared/Navbar/Navbar";

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"

})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display: "swap"
})

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);


  useEffect(() => {
    const fetchStudent = async () => {
      const res = await fetch(`http://localhost:6060/students_signup/${id}`);
      const data = await res.json();
      setStudent(data);
      console.log("Your data is", data);
    };
    fetchStudent();
  }, [id]);

  if (!student) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="">
       
        <div className="max-w-7xl w-full mx-auto">
            <div className="flex gap-10">
                <div className="w-full lg:w-[400px] py-12 px-8 bg-slate-700">
                    <div className="flex flex-col gap-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-gray-200 mx-auto">
                             <img
                              src={student?.profile_url}
                              alt={student?.full_name}
                              className="w-full h-full object-cover"
                             />
                        </div>
                        <div>
                            <h2 className={`${cinzel.className} lg font-bold text-yellow-400 text-lg text-center`}>{student?.type}</h2>
                        </div>
                        <div className="mt-4">
                            <div className="flex gap-4  items-center  pb-3 border-b-2 border-amber-300">
                                <div className="p-2 bg-amber-400 rounded-full">
                                    <FaPhone className="text-lg text-white"/>
                                </div>
                                <div>
                                    <h3 className={`${cinzel.className} text-2xl text-white font-semibold`}>Contact</h3>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-2">
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Email</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.email}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Phone</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.phone}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Address</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.address}</h4>
                                </div>
                            </div>
                            
                        </div>

                        <div className="mt-4">
                            <div className="flex gap-4  items-center  pb-3 border-b-2 border-amber-300">
                                <div className="p-2 bg-amber-400 rounded-full">
                                    <FaPhone className="text-lg text-white"/>
                                </div>
                                <div>
                                    <h3 className={`${cinzel.className} text-2xl text-white font-semibold`}>About</h3>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-2">
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Name</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.full_name}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Father Name</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.father_name}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Mother Name</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.mother_name}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Nationality</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.nationality}</h4>
                                </div>
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-white`}>Religion</h3>
                                    <h4 className="text-amber-300 text-sm">{student?.religion}</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[800px] py-12 px-8 shadow-lg">
                    <div className="flex flex-col gap-4">
                         <div className="mt-4">
                            <div className="flex gap-4  items-center  pb-3 border-b-2 border-amber-300">
                                <div className="p-2 bg-amber-400 rounded-full">
                                    <FaPhone className="text-lg text-white"/>
                                </div>
                                <div>
                                    <h3 className={`${cinzel.className} text-2xl text-black font-semibold`}>Profile Details</h3>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-2">
                                <div className="">
                                    <p className={`${inter.className} text-sm text-black`}>
                                        Abdul Rahman is a talented and enthusiastic student currently pursuing his studies in the Department of Computer
                                         Science and Engineering.
                                         He has a strong interest in programming, web development, 
                                        and data structures. His goal is to become a skilled Software Engineer and contribute to technological innovations in the future.
                                         Abdul is not only dedicated to his academic excellence but also actively participates in various co-curricular activities. 
                                      He possesses excellent skills in teamwork, problem-solving, and adapting to new technologies.
                                    </p>
                                </div> 

                         <div className="mt-4">
                            <div className="flex gap-4  items-center  pb-3 border-b-2 border-amber-300">
                                <div className="p-2 bg-amber-400 rounded-full">
                                    <FaPhone className="text-lg text-white"/>
                                </div>
                                <div>
                                    <h3 className={`${cinzel.className} text-2xl text-black font-semibold`}>Education</h3>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-2">
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-black`}>Education</h3>
                                    <h4 className="text-cyan-900 font-bold text-sm">{student?.qualification}</h4>
                                </div>   
                            </div>
                            
                        </div>

                        <div className="mt-4">
                            <div className="flex gap-4  items-center  pb-3 border-b-2 border-amber-300">
                                <div className="p-2 bg-amber-400 rounded-full">
                                    <FaPhone className="text-lg text-white"/>
                                </div>
                                <div>
                                    <h3 className={`${cinzel.className} text-2xl text-black font-semibold`}>Other Info</h3>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-2">
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-black`}>Student ID</h3>
                                    <h4 className="text-cyan-900 font-bold text-sm">{student?.student_id}</h4>
                                </div> 
                                
                                <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-black`}>Date of Birth</h3>
                                    <h4 className="text-cyan-900 font-bold text-sm">{student?.date}</h4>
                                </div>   
                                 <div className="">
                                    <h3 className={`${inter.className} text-lg font-semibold text-black`}>Joining Date</h3>
                                    <h4 className="text-cyan-900 font-bold text-sm">{student?.joining_date}</h4>
                                </div> 

                                  
                            </div>
                            
                        </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  );
};

export default StudentDetails;



{/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-gray-200 mx-auto">
          <img
            src={student?.profile_url}
            alt={student?.full_name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{student?.full_name}</h2>
        <p className="text-gray-600 mt-1">ID: {student?.student_id}</p>
        <p className="text-gray-600 mt-1">Email: {student?.email}</p>
        <p className="text-gray-600 mt-1">Joining Date: {student?.joining_date}</p>
        <p className="text-gray-600 mt-1">Date of Birth: {student?.date}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div> */}
