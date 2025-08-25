"use client";
import { Cinzel, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";

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

const Teacher_Portal = ()=>{
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:6060/teacher`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setTeachers(data)
        })
    },[])
    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                 <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>Our All Teachers</h2>
                    <p className={`${inter.className} text-lg text-center text-black text-medium`}>To help you build your career and accomplish your goal, 
                        we are offering 51 undergraduate and master's programs under 6 faculties.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            teachers.map((teacher)=> <TeacherCard key={teacher._id}
                             teacher={teacher}></TeacherCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher_Portal;