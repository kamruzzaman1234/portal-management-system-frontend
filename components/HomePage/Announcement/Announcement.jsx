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

const Announcement = ()=>{
    return(
        <div className="bg-[url('https://i.ibb.co.com/KxW46VTR/pexels-kampus-5940831.jpg')] 
        bg-no-repeat  bg-cover bg-center bg-fixed py-20">
            <div className="max-w-7xl px-10 lg:px-0 w-full mx-auto">
                <div className="bg-slate-950 opacity-70 p-8 rounded-2xl">
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-border space-x-4">
                    <input type="radio" name="my_tabs_2" className={`${cinzel.className} font-semibold tab pb-3 border-2 border-white text-2xl  text-white hover:text-white`} aria-label="Annoucement" defaultChecked />
                    <div className={`tab-content border-base-300  bg-blue-100 z-10 px-6 py-8 mt-6`}>
                        <div className="flex justify-between">
                           <div className="flex flex-col relative z-50 gap-8">
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>17</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>Aug</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Pre Registration (Phase-1) schedule, Fall 2025</Link>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>07</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>Aug</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Addmission Test Result, Fall 2025</Link>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>20</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>jul</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Mid-Term Exam Schedule For Summer</Link>
                                    </div>
                                </div>
                                 <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>20</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>jul</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>US "Wishlist" Event Schedule, Fall 2025</Link>
                                    </div>
                                </div>
                           </div>
                           <div>
                                <Link href="/viewAll" 
                                className={`${cinzel.className} text-sm px-5 py-3 font-semibold
                                 border-2 border-slate-900 transition-all delay-150 duration-300
                                 hover:bg-slate-900 hover:text-white`}>View Details</Link>
                           </div>
                        </div>
                        
                     </div>
                    <input type="radio" name="my_tabs_2" className={`${cinzel.className} tab text-white border-2 border-white text-2xl font-semibold hover:text-white`} aria-label="Academic Dates" />
                    <div className={`tab-content border-base-300  bg-blue-100 z-10 px-6 py-8 mt-6`}>
                        <div className="flex justify-between">
                           <div className="flex flex-col relative z-50 gap-8">
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>05</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>Sep</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Eid-E Miladun Nabi* -University closed</Link>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>14</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>sep</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Final Examinations</Link>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>20</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>sep</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Last Day of Submiting Grades</Link>
                                    </div>
                                </div>
                                 <div className="flex gap-10 items-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className={`${cinzel.className} text-6xl font-bold text-black`}>25</h2>
                                        <h3 className={`${cinzel.className} text-lg font-bold text-black`}>sep</h3>

                                    </div>
                                    <div>
                                        <Link href="/" className={`${inter.className} text-3xl 
                                        font-semibold hover:underline text-black`}>Pulications of Result</Link>
                                    </div>
                                </div>
                           </div>
                           <div>
                                <Link href="/viewAll" 
                                className={`${cinzel.className} text-sm px-5 py-3 font-semibold
                                 border-2 border-slate-900 transition-all delay-150 duration-300
                                 hover:bg-slate-900 hover:text-white`}>View Details</Link>
                           </div>
                        </div>
                        
                     </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement;