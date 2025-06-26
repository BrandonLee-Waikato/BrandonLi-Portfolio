'use client'

// import { DiAws } from 'react-icons/di'
import { SiDotnet, SiBootstrap, SiLeaflet, SiSharp } from 'react-icons/si'
import { TbBrandAzure } from "react-icons/tb";
const techs = [
    { Icon: SiSharp, name: 'C#' },
    { Icon: SiDotnet, name: 'ASP.NET' },
    { Icon: SiBootstrap, name: 'Bootstrap' },
    // { Icon: DiAws, name: 'AWS' },
    { Icon: TbBrandAzure, name: 'Azure DevOps' },
    { Icon: SiLeaflet, name: 'Leaflet' },
]

export default function MightyTechstack() {
    return (
        <div className="bg-white/10 border border-white/10 rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-400 text-center">Tech Stack</h3>
            <div className="grid grid-cols-1 gap-4">
                {techs.map(({ Icon, name }, idx) => (
                    <div key={idx} className="flex flex-col items-center" title={name}>
                        <Icon className="text-3xl text-green-400 hover:scale-110 transition" />
                        <span className="text-xs mt-1 text-gray-200">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
