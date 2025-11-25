"use client";

import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"

})

const AllStudents = ()=>{
    const [students, setStudents] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:6060/students_singup')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setStudents(data)
        })
    },[])

 const handleDelete = async (_id) => {
  if (!confirm("Are you sure you want to delete?")) return;

  try {
    const res = await fetch(`http://localhost:6060/students_signup/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      setStudents(prev => prev.filter(item => item._id !== _id));
    }
  } catch (error) {
    console.log(error);
  }
};




    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                <div>
                    <h3 className={`${cinzel.className} text-3xl font-bold text-center`}>All Students </h3>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-3 gap-8">
                        {
                            students.map((student)=> <StudentCard 
                            student={student} key={student._id} 
                            handleDelete={handleDelete}></StudentCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllStudents;