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



const AboutDetails = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="">
                        <div>
                            <img src="https://i.ibb.co.com/3Yhqktdk/pexels-pixabay-207684.jpg" alt="" />
                        </div>
                    </div>

                    <div className="">
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-3xl font-bold `}>Introductions</h3>
                            <p className={`${inter.className} text-xm `}>Daffodil International University (DIU), established in 2002, is one of the most prestigious and innovative private universities 
                                in Bangladesh. Since its inception,
                                 DIU has been committed to 
                            transforming higher education by fostering academic excellence, innovation, and research. 
                            With a strong vision to create a knowledge-driven society, the university 
                            empowers students to become skilled professionals, critical thinkers, and responsible global citizens.
                            DIU offers a dynamic learning environment where students are encouraged to explore their potential, 
                            challenge their limits, and achieve excellence in their respective fields. The university integrates modern teaching methodologies, state-of-the-art facilities, 
                           and industry-oriented curricula to ensure graduates are well-prepared for the competitive global job market.
                           In addition to academic programs, DIU focuses on personal development, 
                           entrepreneurship, and leadership skills, providing students with ample opportunities
                            to engage in co-curricular and extracurricular activities. Through international 
                            collaborations with over 30+ renowned universities worldwide, DIU facilitates student exchange programs, joint research, 
                           and global networking opportunities.
                        By combining quality education, innovative learning techniques, 
                       and a holistic development approach, DIU strives to produce graduates who are not only academically 
competent but also socially responsible and globally competitive. The university’s motto — "Empowering Knowledge, Inspiring Innovation, and Shaping the Future" — reflects its dedication to nurturing the next generation of leaders, innovators, and change-makers.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="space-y-3">
                            <h3 className={`${cinzel.className} text-3xl font-bold `}>Our University and It's Founder</h3>
                            <p className={`${inter.className} text-xm `}>Dhaka International University was founded by Late Alhaj Professor
                                 Dr. A.B.M. Mafizul Islam Patwari. He was a Professor of the Department of Law, University of Dhaka, Bangladesh. 
                                 It may be observed that Dhaka International
                                 University is perhaps the only private university which was established by a person who was basically an academician.
                                 He established this university with high hopes and aspirations to disseminate knowledge and
                                  thus to extend the horizon of knowledge. That is why, the slogan of DIU is the universal adage, “Knowledge is Power.”
                                   DIU wants to generate this power among individuals through teaching, training and guidance by using age worthy,
                                    pragmatic and well-designed curricula and syllabi.</p>
                        </div>
                    </div>

                     <div className="">
                        <div>
                            <img src="https://i.ibb.co.com/Dx01f80/pexels-aathif-19747906.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDetails;