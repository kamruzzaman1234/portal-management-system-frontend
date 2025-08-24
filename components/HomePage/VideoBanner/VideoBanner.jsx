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

const VideoBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex justify-center items-center h-full bg-black/50">
       <div className="max-w-7xl w-full mx-auto">
            <div className="space-y-4">
            <h3 className={`${inter.className} text-white font-bold text-2xl`}>Welcome To Our Website</h3>
            <h1 className={`${cinzel.className} text-white text-5xl font-bold`}>Bangladesh Science University</h1>
            <h3 className={`${inter.className} text-white text-2xl font-semibold`}>Innovating Education for a Better Future</h3>
            <div className="flex gap-4">
                <Link href="" className={`${cinzel.className} px-8 py-3 bg-green-500
                 font-semibold text-white`}>Apply Now</Link>
                 <Link href="/about" className={`${cinzel.className} px-8 py-3 border-2 border-green-500 
                 transition-all delay-150 duration-300 hover:bg-green-500
                 font-semibold text-white`}>About Our Details</Link>
            </div>
            </div>
       </div> 
        
      </div>
    </div>
  );
};

export default VideoBanner;
