"use client";
import { Nunito, Cinzel } from "next/font/google";
import TeacherForm from "../FormArea/TeacherForm/TeacherForm";
import StudentForm from "../FormArea/StudentForm/StudentForm";


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
            <div className="max-w-7xl px-12 lg:px-0 w-full mx-auto">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="mb-12">
                        <h2 className={`${cinzel.className} font-bold text-2xl
                         text-center`}>Registration Portal</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div>
                           <TeacherForm></TeacherForm>
                        </div>
                        <div>
                          <StudentForm></StudentForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeForm;