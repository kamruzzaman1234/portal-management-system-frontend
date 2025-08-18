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

const StudentForm = ()=>{
    return(
        <div className="max-w-full w-full">
            <div className="px-3 py-6 border-2 w-full lg:w-[550px] shadow-lg border-gray-100">
                            <div className="bg-[#0066ff] py-3 mb-12">
                                <h3 className={`${nunito.className} text-lg font-bold text-center text-white`}>Student Form</h3>
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
                                         focus:ring-gray-500 focus:outline-none"
                                        >
                                       <option value="">Select Gender</option>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    </select>
                                </div>
                                 <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="father name" className={`${cinzel.className} text-lg font-bold`}>Father Name</label>
                                    <input type="text" name="father_name" className="input input-bordered w-full"
                                     placeholder="Enter Your Father name"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="Mother name" className={`${cinzel.className} text-lg font-bold`}>Mother Name</label>
                                    <input type="text" name="mother_name" className="input input-bordered w-full"
                                     placeholder="Enter Your Mother name"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="nationality" className={`${cinzel.className} text-lg font-bold`}>Nationality</label>
                                    <input type="text" name="nationality" className="input input-bordered w-full"
                                     placeholder="Enter Your Nationality"/>
                                </div>

                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="religion" className={`${cinzel.className} text-lg font-bold`}>Religion</label>
                                    <input type="text" name="religion" className="input input-bordered w-full"
                                     placeholder="Enter Your religion"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="data of birth" className={`${cinzel.className} text-lg font-bold`}>Date of Birth</label>
                                    <input type="date" name="date" className="input input-bordered w-full"
                                     placeholder=""/>
                                </div>

                                 <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="gender" className={`${cinzel.className} text-lg font-bold`}>Type</label>
                                     <select
                                        name="type"
                                        className="w-full border rounded-lg p-2 
                                         focus:ring-gray-500 focus:outline-none"
                                        >
                                       <option value="">Select Gender</option>
                                       <option value="male">Student</option>
                                       <option value="female">Teacher</option>
                                    <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="teacher_id" className={`${cinzel.className} text-lg font-bold`}>Student Id</label>
                                    <input type="text" name="teacher_id" className="input input-bordered w-full"
                                     placeholder="Enter Your Teacher Id"/>
                                </div>
                                <div className="mb-6 flex flex-col gap-4">
                                    <label htmlFor="department" className={`${cinzel.className} text-lg font-bold`}>Department</label>
                                    <input type="text" name="department" className="input input-bordered w-full"
                                     placeholder="Enter Your department"/>
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

                                 

                                <div className="mb-6 flex flex-col gap-4">
                                    
                                    <input type="submit" name="submit" className="input bg-[#0066ff] font-bold text-white input-bordered w-full"
                                     placeholder="http://image.jpg"/>
                                </div>

                            </form>


                        </div>

        </div>
    )
}

export default StudentForm;