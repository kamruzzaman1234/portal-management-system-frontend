"use client"

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

const Footer = ()=>{
    return(
        <div className="py-20 bg-slate-950">
            <div className="max-w-8xl px-10 w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="flex flex-col gap-6 ">
                        <div>
                            <h3 className={`${cinzel.className} text-2xl border-b-2 pb-8 font-bold text-white`}>Contact Us</h3>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                 <span className='font-bold text-white'>Address :</span> Kha 224 Pragati Sarani, Merul Badda , Dhaka 1212, Bangladesh</Link></li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                 <span className='font-bold text-white'>Tel:</span>+88 09638464646 Ext. 1001 for operator</Link>
                                 </li>
                                  <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                 <span className='font-bold text-white'>Email:</span>infoinlet@gmail.com</Link>
                                 </li>
                            </ul>
                        </div>
                        <div>
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.277904227205!2d90.42172052484644!3d23.77311628790478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrac%20university%20merul%20badda!5e0!3m2!1sen!2sbd!4v1755841599896!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                             ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className={`${cinzel.className} text-2xl border-b-2 pb-8 font-bold text-white`}>About Us</h3>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                  About Our University</Link></li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                   Mission and Vision</Link>
                                 </li>
                                  <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Founder</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Leadership and Management</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Affiliation</Link>
                                 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className={`${cinzel.className} text-2xl border-b-2 pb-8 font-bold text-white`}>Academic</h3>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                  School and Department</Link></li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                   Institutes</Link>
                                 </li>
                                  <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Centres</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Offices</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Program in Detial  Policies and Procedures</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Policies and Procedures</Link>
                                 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className={`${cinzel.className} text-2xl border-b-2 pb-8 font-bold text-white`}>Resources</h3>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                  Ayesha Abed Library</Link></li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                   Annual Report</Link>
                                 </li>
                                  <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     News</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Media Center
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Social Media</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     IT Systems Office</Link>
                                 </li>
                                   <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Convocation</Link>
                                 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className={`${cinzel.className} text-2xl border-b-2 pb-8 font-bold text-white`}>Quick Links
</h3>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                  Apply Now</Link></li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                   Addmissions</Link>
                                 </li>
                                  <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Tution and fees</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Residential Semester
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Announcement

Transport</Link>
                                 </li>
                                 <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Student Life</Link>
                                 </li>
                                   <li>
                                    <Link href="" className={`${inter.className} text-lg text-slate-300`}>
                                     Transport</Link>
                                 </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;