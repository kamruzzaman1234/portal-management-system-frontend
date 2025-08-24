"use client";

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

const Alumni = ()=>{
    return(
        <div className="py-20 ">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>Our Alumni</h2>
                    <p className={`${inter.className} text-lg text-center text-black text-medium`}>To help you build your career and accomplish your goal, 
                        we are offering 51 undergraduate and master's programs under 6 faculties.</p>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="carousel w-full bg-slate-900 py-14">
  <div id="slide1" className="carousel-item relative w-full">
        <div className="max-w-2xl w-full mx-auto">
            <div className="flex justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className={`text-lg text-white`}><span className="font-bold ">Name:</span> Ankita Rahman</h2>
                    <h2 className="text-lg text-white"><span className="font-bold ">Department</span> Computer Science and Engineering</h2>
                    <h2 className="text-lg text-white"><span className="font-bold ">ID:</span> 191-15-434</h2>
                </div>
            </div>
        </div>
    <div className="absolute space-x-2 -bottom-10 left-1/2 -translate-x-1/2 transform justify-center">
      <a href="#slide4" className="btn btn-circle bg-slate-700 text-white">❮</a>
      <a href="#slide2" className="btn btn-circle bg-slate-700 text-white">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   <div className="max-w-2xl w-full mx-auto">
            <div className="flex justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className={`text-lg text-white`}><span className="font-bold">Name:</span> Ankita Rahman</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">Department</span> Computer Science and Engineering</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">ID:</span> 191-15-434</h2>
                </div>
            </div>
        </div>
    <div className="absolute space-x-2 -bottom-10 left-1/2 -translate-x-1/2 transform justify-center">
      <a href="#slide1" className="btn btn-circle bg-slate-700 text-white">❮</a>
      <a href="#slide3" className="btn btn-circle bg-slate-700 text-white ">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
   <div className="max-w-2xl w-full mx-auto">
            <div className="flex justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className={`text-lg text-white`}><span className="font-bold">Name:</span> Ankita Rahman</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">Department</span> Computer Science and Engineering</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">ID:</span> 191-15-434</h2>
                </div>
            </div>
        </div>
    <div className="absolute space-x-2 -bottom-10 left-1/2 -translate-x-1/2 transform justify-center">
      <a href="#slide2" className="btn btn-circle bg-slate-700 text-white ">❮</a>
      <a href="#slide4" className="btn btn-circle bg-slate-700 text-white ">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
   <div className="max-w-2xl w-full mx-auto">
            <div className="flex justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className={`text-lg text-white`}><span className="font-bold">Name:</span> Ankita Rahman</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">Department</span> Computer Science and Engineering</h2>
                    <h2 className="text-lg text-white"><span className="font-bold">ID:</span> 191-15-434</h2>
                </div>
            </div>
        </div>
    <div className="absolute space-x-2 -bottom-10 left-1/2 -translate-x-1/2 transform justify-center">
      <a href="#slide3" className="btn btn-circle bg-slate-700 text-white ">❮</a>
      <a href="#slide1" className="btn btn-circle bg-slate-700 text-white ">❯</a>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Alumni;