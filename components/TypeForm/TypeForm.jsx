"use client";
import { Nunito, Cinzel } from "next/font/google";


const nunito = Nunito({
    subsets:['latin'],
    weight:["500", "600", "700", "800"],
    display:"swap"
})

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["500", "600", "700", "800"],
    display:"swap"
})

const TypeForm = ()=>{
    return(
        <div className="py-18">
            <div className="max-w-7xl w-full mx-auto">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="mb-12">
                        <h2 className={`${cinzel.className} font-bold text-2xl
                         text-center`}>Registration Portal</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="p-3 border-2 w-full lg:w-[550px] border-gray-100">
                            <div className="bg-[#0066ff] py-3 mb-12">
                                <h3 className={`${nunito.className} text-lg font-bold text-center text-white`}>Teacher Form</h3>
                            </div>

                            <form action="">
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="name" className={`${cinzel.className} text-lg font-bold`}>Full Name</label>
                                    <input type="text" name="full_name" className="input input-bordered w-full"
                                     placeholder="Enter Your Name"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="email" className={`${cinzel.className} text-lg font-bold`}>Email</label>
                                    <input type="text" name="email" className="input input-bordered w-full"
                                     placeholder="Enter Your email"/>
                                </div>

                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="phone" className={`${cinzel.className} text-lg font-bold`}>Phone Number</label>
                                    <input type="tel" name="phone" className="input input-bordered w-full"
                                     placeholder="+880......."/>
                                </div>

                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="gender" className={`${cinzel.className} text-lg font-bold`}>Gender</label>
                                     <select
                                        name="gender"
                                        className="w-full border rounded-lg p-2 
                                        focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                        >
                                       <option value="">Select Gender</option>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="data of birth" className={`${cinzel.className} text-lg font-bold`}>Date of Birth</label>
                                    <input type="date" name="date" className="input input-bordered w-full"
                                     placeholder=""/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="teacher_id" className={`${cinzel.className} text-lg font-bold`}>Teacher Id</label>
                                    <input type="text" name="teacher_id" className="input input-bordered w-full"
                                     placeholder="Enter Your Teacher Id"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="department" className={`${cinzel.className} text-lg font-bold`}>Department</label>
                                    <input type="text" name="department" className="input input-bordered w-full"
                                     placeholder="Enter Your department"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="designation" className={`${cinzel.className} text-lg font-bold`}>Designation</label>
                                    <input type="text" name="designation" className="input input-bordered w-full"
                                     placeholder="Enter Your Designation"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="qualification" className={`${cinzel.className} text-lg font-bold`}>Qualification</label>
                                    <input type="text" name="qualification" className="input input-bordered w-full"
                                     placeholder="Enter Your qualification"/>
                                </div>
                                 <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="address" className={`${cinzel.className} text-lg font-bold`}>Adress</label>
                                    <input type="text" name="address" className="input input-bordered w-full"
                                     placeholder="Enter Your address"/>
                                </div>
                                 <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="joining date" className={`${cinzel.className} text-lg font-bold`}>Joining Date</label>
                                    <input type="date" name="joining-date" className="input input-bordered w-full"
                                     placeholder="Enter Your Joining Date"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="profile ulr" className={`${cinzel.className} text-lg font-bold`}>Profile Url</label>
                                    <input type="text" name="profile_url" className="input input-bordered w-full"
                                     placeholder="http://image.jpg"/>
                                </div>
                            </form>


                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeForm;