'use client'


import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Image from "next/image";

export default function Page() {
    return (
        <section className="min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">

            <Link
                href="/projects"
                className="fixed top-20 left-6 flex items-center gap-2 bg-white/10 hover:bg-green-700/80 text-green-400 px-4 py-2 rounded transition z-50"
                style={{ zIndex: 50 }}
            >
                <AiOutlineArrowLeft size={20} />
                <span className="font-semibold">Back</span>
            </Link>

            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* 主内容区域 */}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center"></h2>


                    <img
                        src="/Layout.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                    </p>

                    <img
                        src="/Layout2.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                    </p>

                    <img
                        src="/Layout3.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">

                    </p>

                    <img
                        src="/Layout4.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">

                    </p>


                </div>


                {/*/!* 右侧技术栈 *!/*/}
                {/*<div className="md:w-36 w-full shrink-0">*/}
                {/*    <HotelierTechstack />*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
