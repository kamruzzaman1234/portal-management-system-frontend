"use client";

import { Cinzel, Inter } from "next/font/google";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    dispaly:"swap"
})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    dispaly:"swap"
})



const Facility = ()=>{
    return(
        <div className="py-20 bg-blue-950">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-white`}>Find Your Way</h2>
                    <p className={`${inter.className} text-lg text-center text-white text-medium`}>Explore the countless paths and opportunities that our University has to offer.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-gray-100 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        School and Department</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

             <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-white 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        Institutes</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

             <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-white 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        Addmission</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

             <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-white 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        Research</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

             <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-white 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        Student Life</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

             <Link href="" className="group flex gap-2 p-10 justify-between border-[0.5px] border-white 
                              transition-all duration-300 delay-150 hover:bg-green-700 shadow-lg 
                              shadow-base-content transform hover:scale-105">
                    <div>
                       <h3 className={`${cinzel.className} text-2xl text-white transition-all duration-300 group-hover:text-3xl`}>
                        Scholarships and Financial Aid</h3>
                    </div>
                <div>
               <div className="p-2 border-2 border-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-lg font-semibold text-white" />
              </div>
               </div>
             </Link>

                       
                        
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Facility;