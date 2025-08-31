'use client';

import Image from "next/image";
import HotelierTechstack from "@/app/projects/Hotelier/HotelierTechstack";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {JSX} from "react";
import Hotelier2 from '@/public/Hotelier2.png'
import Hotelier3 from '@/public/Hotelier3.png'
import Hotelier1 from '@/public/Hotelier1.png'

export default function Page(): JSX.Element {
    return (
        <section className="min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">
            <Link
                href="/projects"
                className="fixed top-20 left-6 flex items-center gap-2 bg-white/10 hover:bg-green-700/80 text-green-400 px-4 py-2 rounded transition z-50"
                style={{ zIndex: 50 }}
                aria-label="Back to Projects"
            >
                <AiOutlineArrowLeft size={20} />
                <span className="font-semibold">Back</span>
            </Link>

            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* Main content */}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center"></h2>

                    <Image
                        src={Hotelier2}
                        alt="Hotelier login page"
                        width={1600}
                        height={900}
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                        priority
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">Login</p>

                    <Image
                        src={Hotelier3}
                        alt="Hotelier administrator management page"
                        width={1600}
                        height={900}
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">Administrator Management</p>

                    <Image
                        src={Hotelier1}
                        alt="Hotelier user interface"
                        width={1600}
                        height={900}
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">User Interface</p>
                </div>

                {/* Right side tech stack */}
                <div className="md:w-36 w-full shrink-0">
                    <HotelierTechstack />
                </div>
            </div>
        </section>
    );
}
