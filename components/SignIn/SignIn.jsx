"use client";
import { Cinzel, Nunito } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});



const SignIn = ()=>{
    return(
        <div className="py-24">
            <div className="max-w-7xl w-full px-12 lg:px-0 mx-auto">
                <div className="mb-12">
                    <h2 className={`$${nunito.className} text-3xl uppercase font-bold text-center`}>Please Sign In</h2>
                </div>

                <div className="max-w-6xl w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="">
                            <div className="flex items-center justify-center p-6">
                               <div>
                                 <h2 className={`${cinzel.className} text-3xl font-bold mb-4`}>Welcome Back!</h2>
                                  <p className="mb-4 text-lg">
                                   Welcome! Please sign in as a Student or Teacher to continue. We keep your experience safe and easy.
                                 </p>
                                <img src="/welcome-image.png" alt="Welcome" className="rounded-lg "/>
                         </div>
                                 </div>
                        </div>
                        <div className="p-4 border-2 border-cyan-400 shadow-lg shadow-cyan-200">
                            <form action="">
                                <div className='mb-6 flex flex-col gap-4'>
                                    <label htmlFor="student_id" className={`${cinzel.className} font-bold`}>Student ID</label>
                                    <input type="text"
                                     name="student_id"
                                     className={`
                                     input input-bordered w-full`} 
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
                                className="input input-bordered w-full"
                                placeholder="Enter Your Password"/>
                               </div>
                            
                        </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn;