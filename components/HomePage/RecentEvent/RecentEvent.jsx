"use client";

import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap",
})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap",

})

const RecentEvent  =()=>{
    return(
        <div className="py-20 ">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>Recent Event</h2>
                    <p className={`${inter.className} text-lg text-center text-black text-medium`}>Life at Daffodil is very much eventful. Through a lot of meaningful 
                        and impactful events 
                        students get the opportunity to develop their skills and portfolio beyond the curriculam</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-6 flex flex-col gap-4">
                            <div className="w-full h-[350px]">
                                <img src="https://i.ibb.co.com/QFcnqgJH/pexels-marc-schulte-656598-2952834.jpg"
                                 alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className={`${cinzel.className} text-2xl text-center font-bold`}>13th Convocation Program</h3>
                                <p className={`${inter.className} text-lg text-slate-600 `}>13th Convocation of Our University held on 8th February 2025 with</p>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <div className="w-full h-[350px]">
                                <img src="https://i.ibb.co.com/QFcnqgJH/pexels-marc-schulte-656598-2952834.jpg"
                                 alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className={`${cinzel.className} text-2xl text-center font-bold`}>13th Convocation Program</h3>
                                <p className={`${inter.className} text-lg text-slate-600 `}>13th Convocation of Our University held on 8th February 2025 with</p>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <div className="w-full h-[350px]">
                                <img src="https://i.ibb.co.com/QFcnqgJH/pexels-marc-schulte-656598-2952834.jpg"
                                 alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className={`${cinzel.className} text-2xl text-center font-bold`}>13th Convocation Program</h3>
                                <p className={`${inter.className} text-lg text-slate-600 `}>13th Convocation of Our University held on 8th February 2025 with</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentEvent;