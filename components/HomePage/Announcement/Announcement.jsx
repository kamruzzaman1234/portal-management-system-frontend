"use client";

import { Cinzel, Inter } from "next/font/google";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const Announcement = () => {
  return (
    <div
      className="bg-[url('https://i.ibb.co.com/KxW46VTR/pexels-kampus-5940831.jpg')] 
                 bg-no-repeat bg-cover bg-center bg-fixed py-20 relative"
    >
        <div className="bg-black opacity-70 absolute w-full h-full inset-0 top-0 z-10">

        </div>
      <div className="max-w-7xl px-8 lg:px-0 w-full mx-auto z-50">
        <div className="p-8 rounded-2xl">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-border space-x-4">
            {/* First Tab */}
            <input
              type="radio"
              name="my_tabs_2"
              className={`${cinzel.className} font-semibold relative z-50 tab pb-3 border-2 border-white text-2xl text-white hover:text-white`}
              aria-label="Annoucement"
              defaultChecked
            />
            <div className="tab-content border-base-300 z-10 px-6 py-8 mt-6">
              <div className="flex  justify-between">
                <div className="flex flex-col relative z-50 gap-8">
                  {/* Item 1 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        17
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Aug
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Pre Registration (Phase-1) schedule, Fall 2025
                      </Link>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        07
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Aug
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Addmission Test Result, Fall 2025
                      </Link>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        20
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Jul
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Mid-Term Exam Schedule For Summer
                      </Link>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        20
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Jul
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        US "Wishlist" Event Schedule, Fall 2025
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <Link
                    href=""
                    className={`${cinzel.className} text-sm px-5 py-3 font-semibold border-2 border-slate-900 transition-all delay-150 duration-300 hover:bg-slate-900 hover:text-white`}
                  >
                    View Details
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Second Tab */}
            <input
              type="radio"
              name="my_tabs_2"
              className={`${cinzel.className} tab relative z-50 text-white border-2 border-white text-2xl font-semibold hover:text-white`}
              aria-label="Academic Dates"
            />
            <div className="tab-content border-base-300  z-10 px-6 py-8 mt-6">
              <div className="flex justify-between">
                <div className="flex flex-col relative z-50 gap-8">
                  {/* Item 1 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        05
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Sep
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Eid-E Miladun Nabi* -University closed
                      </Link>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        14
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Sep
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Final Examinations
                      </Link>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        20
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Sep
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Last Day of Submiting Grades
                      </Link>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                      <h2
                        className={`${cinzel.className} text-6xl font-bold text-white`}
                      >
                        25
                      </h2>
                      <h3
                        className={`${cinzel.className} text-lg font-bold text-white`}
                      >
                        Sep
                      </h3>
                    </div>
                    <div>
                      <Link
                        href=""
                        className={`${inter.className} text-3xl font-semibold hover:underline text-white`}
                      >
                        Pulications of Result
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <Link
                    href=""
                    className={`${cinzel.className} text-sm px-5 py-3 font-semibold border-2 border-slate-900 transition-all delay-150 duration-300 hover:bg-slate-900 hover:text-white`}
                  >
                    View Details
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
