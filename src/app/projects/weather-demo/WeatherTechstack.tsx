'use client'

import {
    SiAmazon, SiNodedotjs, SiExpress, SiLaravel, SiLeaflet, SiOpenapiinitiative
} from 'react-icons/si'

const techs = [
    { Icon: SiAmazon, name: 'AWS' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: SiExpress, name: 'Express' },
    { Icon: SiLaravel, name: 'Laravel' },
    { Icon: SiLeaflet, name: 'Leaflet' },
    { Icon: SiOpenapiinitiative, name: 'Open-Meteo API' }, // 没有专属Open-Meteo图标，用API图标替代
]

export default function WeatherTechstack() {
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
