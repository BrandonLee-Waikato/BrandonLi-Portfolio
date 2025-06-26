'use client'

import { DiJava } from 'react-icons/di'
import { SiReact, SiVite, SiGoogle, SiLeaflet } from 'react-icons/si'

const techs = [
    { Icon: SiReact, name: 'React' },
    { Icon: SiVite, name: 'Vite' },
    { Icon: DiJava, name: 'Java' },
    { Icon: SiGoogle, name: 'Google Service' }, // Google
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
