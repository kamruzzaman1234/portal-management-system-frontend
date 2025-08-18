"use client";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});


const SignIn = ()=>{
    return(
        <div className="py-24">
            <div className="max-w-7xl w-full px-12 lg:px-0 mx-auto">
                <div className="mb-12">
                    <h2 className={`$${cinzel} text-3xl font-bold text-center`}>Please Sign In</h2>
                </div>

                <div className="max-w-4xl w-full mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                        <form action="">
                                <div className='mb-6 flex flex-col gap-4'>
                                    <label htmlFor="student_id" className={`${cinzel.className}`}>Student ID</label>
                                    <input type="text"
                                     name="student_id"
                                     className={`
                                     input input-bordered`} 
                                     placeholder="Enter Your student ID" />
                                </div>
                            
                                <div className="mb-6 flex flex-col gap-4">
                                    <label
                                      htmlFor="email"
                                     className={`${cinzel.className} text-lg font-bold`}
                                   >
                                     Email
                                    </label>
                                 <input
                                   type="email"
                                   name="email"
                                   className="input input-bordered w-full"
                                   placeholder="Enter Your email"
                                 />
                               </div>
                               <div className="mb-6 flex flex-col gap-4">
                                <label htmlFor="password"
                                className={`${cinzel.className} text-lg font-bold`}>Password</label>
                                <input type="password" name="password" 
                                className="input input-bordered w-full"/>
                               </div>
                            
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn;