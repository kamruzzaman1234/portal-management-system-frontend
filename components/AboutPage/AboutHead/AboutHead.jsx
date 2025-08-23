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

const AboutHead = ()=>{
    return(
        <div className="py-8 bg-slate-800">
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className={`${cinzel.className} text-3xl font-bold text-white`}>About Us</h2>
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                            <Link href="/" className={`${inter.className} text-white`}>Home</Link>
                            <span className="text-white"> / </span>
                            <Link href="/about" className={`${inter.className} text-white`}>About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHead;