'use client'

import Image from "next/image";
// static imports from public (works with basePath/assetPrefix)
import fishing1 from "@/public/Fishing1.jpg";
import fishing2 from "@/public/Fishing2.jpg";
import fishing3 from "@/public/Fishing3.jpg";

export default function Page() {
    return (
        <section className="min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">
            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* main content */}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center"></h2>

                    <Image
                        src={fishing1}
                        alt="Fishing photo 1"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                        width={1600}
                        height={900}
                        priority
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">{/*Counter-Strike*/}</p>

                    <Image
                        src={fishing2}
                        alt="Fishing photo 2"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                        width={1600}
                        height={900}
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">{/*Red dead redemption 2*/}</p>

                    <Image
                        src={fishing3}
                        alt="Fishing photo 3"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                        width={1600}
                        height={900}
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">{/*TimberBorn*/}</p>
                </div>
            </div>
        </section>
    );
}
