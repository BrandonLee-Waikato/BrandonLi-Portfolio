'use client'


export default function Page() {
    return (
        <section className="min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">
            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* 主内容区域 */}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center"></h2>


                    <img
                        src="/Fishing1.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"

                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        {/*Counter-Strike*/}
                    </p>

                    <img
                        src="/Fishing2.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"

                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        {/*Red dead redemption 2*/}
                    </p>

                    <img
                        src="/Fishing3.jpg"
                        alt="Weather Dashboard Screenshot"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"

                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        {/*TimberBorn*/}
                    </p>


                </div>
            </div>
        </section>
    )
}
