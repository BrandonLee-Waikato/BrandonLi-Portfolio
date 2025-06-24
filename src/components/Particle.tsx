// src/components/Particle.tsx
'use client'

import Particles from 'react-tsparticles'

export default function Particle() {
    return (
        <Particles
            id="tsparticles"
            options={{
                particles: {
                    number: { value: 160, density: { enable: true, area: 1500 } },
                    links: { enable: false, opacity: 0.03 },
                    move: { direction: 'right', speed: 0.05 },
                    size: { value: 1 },
                    opacity: { anim: { enable: true, speed: 1, minimumValue: 0.05 } },
                },
                interactivity: {
                    events: { onClick: { enable: true, mode: 'push' } },
                    modes: { push: { quantity: 1 } },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 z-0"
        />
    )
}
