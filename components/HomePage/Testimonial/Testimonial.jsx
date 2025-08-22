"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Inter, Cinzel } from 'next/font/google';
import { FaStar } from 'react-icons/fa6';

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap",
})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"
})

 const Testimonial = ()=>{
    return(
        <div className="py-20 bg-slate-700">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-4xl w-full mx-auto">
                    <div className="flex flex-col gap-2">
                    <h2 className={`${cinzel.className} text-3xl font-bold text-center text-white`}>Visitor's says about us</h2>
                    <p className={`${inter.className} text-lg text-center text-white text-medium`}>National and International scholars,
                         Business leaders, Entrepreneurs,
                         Dignitaries visited us to share experiences, 
                        explore opportunities, collaborate and give guidance to the students.</p>
                    </div>
                </div>
                  <div className="mt-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="p-10 bg-white flex flex-col gap-4 w-1/2 mx-auto shadow-lg shadow-black rounded-br-3xl rounded-tl-3xl">
                <div className="flex gap-8">
                    <div className="w-[80px] h-[80px]">
                        <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" 
                        className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className={`${cinzel.className} text-2xl font-semibold text-black`}>Raifa Jesmin</h3>
                        <h4 className={`${inter.className} text-lg font-normal text-slate-700`}>Co-founder</h4>
                    </div>
                </div>
                 <div className="flex gap-2 flex-col">
                        <div className="flex gap-0.5">
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                        </div>
                        <div>
                            <p className={`${inter.className} text-slate-700 text-lg`}>I am very happy with the work. He converted my Figma design into a 
                                responsive React website with Tailwind CSS flawlessly. 
                                Will surely come back for future projects!</p>
                        </div>
                    </div>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="p-10 bg-white flex flex-col gap-4 w-1/2 mx-auto shadow-lg shadow-black rounded-br-3xl rounded-tl-3xl">
                <div className="flex gap-8">
                    <div className="w-[80px] h-[80px]">
                        <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" 
                        className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className={`${cinzel.className} text-2xl font-semibold text-black`}>Raifa Jesmin</h3>
                        <h4 className={`${inter.className} text-lg font-normal text-slate-700`}>Co-founder</h4>
                    </div>
                </div>
                 <div className="flex gap-2 flex-col">
                        <div className="flex gap-0.5">
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                        </div>
                        <div>
                            <p className={`${inter.className} text-slate-700 text-lg`}>I am very happy with the work. He converted my Figma design into a 
                                responsive React website with Tailwind CSS flawlessly. 
                                Will surely come back for future projects!</p>
                        </div>
                    </div>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className="p-10 bg-white flex flex-col gap-4 w-1/2 mx-auto shadow-lg shadow-black rounded-br-3xl rounded-tl-3xl">
                <div className="flex gap-8">
                    <div className="w-[80px] h-[80px]">
                        <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" 
                        className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className={`${cinzel.className} text-2xl font-semibold text-black`}>Raifa Jesmin</h3>
                        <h4 className={`${inter.className} text-lg font-normal text-slate-700`}>Co-founder</h4>
                    </div>
                </div>
                 <div className="flex gap-2 flex-col">
                        <div className="flex gap-0.5">
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                        </div>
                        <div>
                            <p className={`${inter.className} text-slate-700 text-lg`}>I am very happy with the work. He converted my Figma design into a 
                                responsive React website with Tailwind CSS flawlessly. 
                                Will surely come back for future projects!</p>
                        </div>
                    </div>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className="p-10 bg-white flex flex-col gap-4 w-1/2 mx-auto shadow-lg shadow-black rounded-br-3xl rounded-tl-3xl">
                <div className="flex gap-8">
                    <div className="w-[80px] h-[80px]">
                        <img src="https://i.ibb.co.com/bjkZwTfF/testimg.jpg" alt="" 
                        className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="space-y-1">
                        <h3 className={`${cinzel.className} text-2xl font-semibold text-black`}>Raifa Jesmin</h3>
                        <h4 className={`${inter.className} text-lg font-normal text-slate-700`}>Co-founder</h4>
                    </div>
                </div>
                 <div className="flex gap-2 flex-col">
                        <div className="flex gap-0.5">
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                            <FaStar className="text-2xl text-amber-400"/>
                        </div>
                        <div>
                            <p className={`${inter.className} text-slate-700 text-lg`}>I am very happy with the work. He converted my Figma design into a 
                                responsive React website with Tailwind CSS flawlessly. 
                                Will surely come back for future projects!</p>
                        </div>
                    </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
            </div>
        </div>
    )
 }

 export default Testimonial;