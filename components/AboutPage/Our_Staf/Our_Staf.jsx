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


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

 const Our_Staf = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-3xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-black`}>OUR EXPERIENCED STAFFS</h2>
                    <p className={`${inter.className} text-lg text-center text-black text-medium`}>To help you build your career and accomplish your goal, 
                        we are offering 51 undergraduate and master's programs under 6 faculties.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex justify-center items-center">
                        <Swiper
                     slidesPerView={4}
                     spaceBetween={40}
                     freeMode={true}
                     pagination={{
                     clickable: true,
                      }}
                       modules={[FreeMode, Pagination]}
                       className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black opacity-40
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="shadow-lg relative group overflow-hidden">
                          <div className="w-full h-full lg:h-[300px]">
                            <img
                            src="https://i.ibb.co.com/3mDL8BJp/pexels-kampus-5940831.jpg"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="" />
                       </div>
                     <div className="flex justify-center items-center flex-col py-6 bg-black 
                   absolute bottom-[-100%] left-0 right-0 
                   transition-all duration-500 ease-in-out group-hover:bottom-0">
                     <h3 className={`${cinzel.className} text-2xl font-semibold text-white`}>
                         Mr. Hasin Ahmed
                    </h3>
        <h4 className="text-white">Professor, Department of EEE</h4>
    </div>
</div>

                    </SwiperSlide>
                    
                  </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Our_Staf;