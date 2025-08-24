"use client";
import Link from 'next/link';
import { Cinzel, Inter } from 'next/font/google';

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


const DepartmentDetails = ({ department }) => {
    const { _id, name, description } = department || {};

    return (
        <div className="max-w-full w-full  rounded-md shadow-md bg-white">
            <div className="flex justify-between items-center py-8 px-4 border-b-4 border-blue-400">
                <div className="space-y-3">
                    <h2 className={`${cinzel.className} text-xl font-bold text-blue-400`}>{name}</h2>
                    <p className={`${inter.className} text-slate-600`}>{description}</p>
                </div>
                <div>
                    <Link href={`/department/${_id}`} className="text-blue-400 px-4 rounded-lg text-lg
                     font-medium py-2 border-blue-400 border-2
                     hover:underline">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetails;
