"use client";

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

const Faculties = ()=>{
    return(
        <div className="py-20 bg-blue-100 bg-fixed">
            <div className="max-w-7xl w-full mx-auto">
                 <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>Our Faculties</h2>
                    <p className={`${inter.className} text-lg text-center text-black text-medium`}>To help you build your career and accomplish your goal, 
                        we are offering 51 undergraduate and master's programs under 6 faculties.</p>
                    </div>
                </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/mCVLX1SS/pexels-bazeeyto-gallery-1938440-26767345.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Science and Information Technology</h3>
                            <p className={`${inter.className} text-slate-500`}>A degree from SCIENCE AND IT will transform your life for the better. We are inviting
                             you to prepare yourself for the fourth industrial revolution which is already happening.</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/QsLhPYk/pexels-hillaryfox-1595391.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Business & Entrepreneurship</h3>
                            <p className={`${inter.className} text-slate-500`}>Do you want to pursue your career in the business industry as a leader? 
                                A degree from BUSINESS AND ENTREPRENEURSHIP will help you to become an independent
                                 thinker and take action for your next startup to become an entrepreneur...</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/1fbBWNyk/pexels-helenalopes-27175727.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Humanities & Social Sciences</h3>
                            <p className={`${inter.className} text-slate-500`}>Studying HUMANITIES AND SOCIAL SCIENCE will help you excel in thinking, judgment, communication, and leadership skills. Along with corporate success,
                                 our alumni are making a positive impact on society and the community..</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/GYJ2KTk/pexels-tima-miroshnichenko-6754850.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Engineering</h3>
                            <p className={`${inter.className} text-slate-500`}>In the era of rapid integration & innovation of technology in every field of life,
                             becoming an ENGINEERING graduate will give you the opportunity of high potential career growth..</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/Pzm3bNqM/pexels-artempodrez-5726794.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Health and Science</h3>
                            <p className={`${inter.className} text-slate-500`}>An exclusive faculty with global demand dedicated to producing
                                 an impact on health and human life. 
                                Get direct guidance and supervision from prominent faculty members both at home and abroad.


</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col gap-4 bg-white">
                        <div className="h-full lg:h-[300px] w-full">
                            <img src="https://i.ibb.co.com/6cx1Gc94/pexels-emily-ranquist-493228-1205651.jpg"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-2xl font-semibold`}>Graduates Students</h3>
                            <p className={`${inter.className} text-slate-500`}>This faculty’s primary mission is to provide support for the overall
                                 research and publications of the faculty, researchers, and students, and help offer advanced degrees, particularly PhDs, 
                                 in collaboration with the academic departments


</p>
                            <div className="mt-8">
                                <Link href="/typeForm" className={`${inter.className} px-6 py-3 bg-green-500 text-white`}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Faculties;