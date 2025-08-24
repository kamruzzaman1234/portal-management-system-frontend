"use client";

import { Cinzel, Inter } from "next/font/google";
import { SiTransmission } from "react-icons/si";
const cinzel = Cinzel({
    subsets:["latin"],
    weight:['400', '500', '600', '700', '800'],
    display:'swap'
})


const inter = Inter({
    subsets:["latin"],
    weight:['400', '500', '600', '700', '800'],
    display:'swap'
})


const Mission_Vission  = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center py-6 px-4 border-r-8 border-blue-400 shadow-lg">
                        <div className="space-y-3">
                            <div className="flex justify-center items-center">
                               <SiTransmission className="text-7xl text-blue-400 "/>
                                
                            </div>
                            <div className="space-y-2">
                                <h2 className={`${cinzel.className} text-3xl font-semibold text-center `}>Vission</h2>
                            <p className={`${inter.className} text-sm font-medium text-center`}>Loream ispum dolar site amet and conceptetur and ohter lorem Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit. Possimus nam id dicta itaque praesentium nemo soluta
                                 neque quae, unde cupiditate labore iusto cum dolorum recusandae harum quod assumenda. 
                             </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-6 px-4 border-r-8 border-blue-400 shadow-lg">
                        <div className="space-y-3">
                            <div className="flex justify-center items-center">
                               <SiTransmission className="text-7xl text-blue-400 "/>
                                
                            </div>
                            <div className="space-y-2">
                                <h2 className={`${cinzel.className} text-3xl font-semibold text-center `}>Mission</h2>
                            <p className={`${inter.className} text-sm font-medium text-center`}>Loream ispum dolar site amet and conceptetur and ohter lorem Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit. Possimus nam id dicta itaque praesentium nemo soluta
                                 neque quae, unde cupiditate labore iusto cum dolorum recusandae harum quod assumenda. 
                             </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-6 px-4 border-r-8 border-blue-400 shadow-lg">
                        <div className="space-y-3">
                            <div className="flex justify-center items-center">
                               <SiTransmission className="text-7xl text-blue-400 "/>
                                
                            </div>
                            <div className="space-y-2">
                                <h2 className={`${cinzel.className} text-3xl font-semibold text-center `}>Values</h2>
                            <p className={`${inter.className} text-sm font-medium text-center`}>Loream ispum dolar site amet and conceptetur and ohter lorem Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit. Possimus nam id dicta itaque praesentium nemo soluta
                                 neque quae, unde cupiditate labore iusto cum dolorum recusandae harum quod assumenda. 
                             </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission_Vission;