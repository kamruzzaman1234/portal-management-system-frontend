"use client";

import { useEffect, useState } from "react";
import DepartmentDetails from "./DepartmentDetails/DepartmentDetails";
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


const Department = ()=>{
    const [departments, setDepartments] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:6060/department')
        .then(res=> res.json())
        .then(data=>{
            setDepartments(data)
        })
    },[])


    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                         <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>Our All Department</h2>
                        <p className={`${inter.className} text-lg text-center text-black text-medium`}>To help you build your career and accomplish your goal, 
                         we are offering 51 undergraduate and master's programs under 6 faculties.</p>
                     </div>
                  </div>
                  <div className="mt-10">
                        <div className="grid grid-cols-1 gap-8">
                            {
                                departments.map((department)=> <DepartmentDetails key={department._id}
                                 department={department}></DepartmentDetails>)
                            }
                        </div>
                     </div>
            </div>
        </div>
    )
}

export default Department;