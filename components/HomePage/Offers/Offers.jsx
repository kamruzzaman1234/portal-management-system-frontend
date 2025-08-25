"use client";

import { Cinzel, Inter } from "next/font/google";
import { CiBookmarkCheck } from "react-icons/ci";

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



const Offers = ()=>{
    return(
        <div className="">
            <div className="max-w-7xl px-12 lg:px-0 w-full mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="w-full lg:w-1/2">
                        <div className="py-20">
                                <div className="space-y-2">
                                    <h2 className={`${cinzel.className} text-3xl
                                     font-bold `}>What We Offer</h2>
                                    <p className={`${inter.className} text-sm font-medium`}>At Our University, students get the opportunity to think, learn and grow.</p>
                                </div>

                                <div className="mt-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>Accommodation</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>We are providing a secure and convenient living facility 
                                                    for our students. 
                                                    DIU dormitories are a home away from home....</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>Transportation</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>To make the student’s life easier and safe, 
                                                    we are providing
                                                     50+ buses from different points of Dhaka city to.....</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>Libray</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>Our library has a collection of over 50000 books,
                                                     journals, and research papers,
                                                     enriching the resources day by day....</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>One Student One laptop</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>Under the ‘One student one laptop’ project, 
                                                    EWU has distributed over 25000 f...</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>Blended Learning platform</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>To engage students in learning after 
                                                 face-to-face classes,
                                                 our faculty members and students collaborate in the online...</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div>
                                                <div className="p-3 bg-blue-950 rounded-full w-[]">
                                                <CiBookmarkCheck className="text-lg text-white font-bold"/>
                                            </div>
                                            </div>
                                            <div className="w-[] space-y-3">
                                                <h3 className={`${inter.className} text-2xl font-medium`}>Sports and Gymnatium</h3>
                                                <p className={`${inter.className} text-lg font-normal`}>To ensure the mental and physical well-being of
                                                     our students and employees, 
                                                    we are providing a well-equipped gymnasiu...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="min-h-screen">
                            <img src="https://i.ibb.co.com/cS1m00pm/pexels-zulal-sezici-85999700-15143644.jpg"
                             alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;