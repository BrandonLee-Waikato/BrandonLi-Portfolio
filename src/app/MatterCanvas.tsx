// src/app/MatterCanvas.tsx
'use client'

import { useEffect, useRef } from 'react'
import {
    Engine,
    Render,
    Runner,
    Composites,
    Common,
    MouseConstraint,
    Mouse,
    Composite,
    Bodies,
} from 'matter-js'
import type { Body as MatterBody, Render as MatterRenderType } from 'matter-js'

type Props = {
    width?: number
    height?: number
    className?: string
    wallThickness?: number
    borderColor?: string
    title?: string
    titleClassName?: string
}

// Render type with textures map (avoid `any`)
type RenderWithTextures = MatterRenderType & {
    textures: Record<string, unknown>
}

export default function MatterCanvas({
                                         width = 1200,
                                         height = 420,
                                         className,
                                         wallThickness = 18,
                                         borderColor = '#0f172a',
                                         title = 'Experimental Playground',
                                         titleClassName,
                                     }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        while (container.firstChild) container.removeChild(container.firstChild)

        // engine & renderer
        const engine = Engine.create()
        const world = engine.world
        const render = Render.create({
            element: container,
            engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                showAngleIndicator: true,
                pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
            },
        })

        Render.run(render)
        const runner = Runner.create()
        Runner.run(runner, engine)

        // bodies (mixed demo)
        const padding = wallThickness + 20
        const stack = Composites.stack(
            padding,
            padding,
            10,
            5,
            0,
            0,
            (x: number, y: number): MatterBody => {
                const sides = Math.round(Common.random(1, 8))
                let chamfer: { radius: number } | null = null
                if (sides > 2 && Common.random() > 0.7) chamfer = { radius: 10 }

                if (Math.round(Common.random(0, 1)) === 0) {
                    if (Common.random() < 0.8) {
                        return Bodies.rectangle(
                            x,
                            y,
                            Common.random(25, 50),
                            Common.random(25, 50),
                            { chamfer: chamfer || undefined }
                        )
                    } else {
                        return Bodies.rectangle(
                            x,
                            y,
                            Common.random(80, 120),
                            Common.random(25, 30),
                            { chamfer: chamfer || undefined }
                        )
                    }
                }
                return Bodies.polygon(
                    x,
                    y,
                    sides,
                    Common.random(25, 50),
                    { chamfer: chamfer || undefined }
                )
            }
        )
        Composite.add(world, stack)

        // walls as border with custom color/thickness
        const t = wallThickness
        Composite.add(world, [
            Bodies.rectangle(width / 2, t / 2, width, t, {
                isStatic: true,
                render: { fillStyle: borderColor, strokeStyle: borderColor },
            }),
            Bodies.rectangle(width / 2, height - t / 2, width, t, {
                isStatic: true,
                render: { fillStyle: borderColor, strokeStyle: borderColor },
            }),
            Bodies.rectangle(width - t / 2, height / 2, t, height, {
                isStatic: true,
                render: { fillStyle: borderColor, strokeStyle: borderColor },
            }),
            Bodies.rectangle(t / 2, height / 2, t, height, {
                isStatic: true,
                render: { fillStyle: borderColor, strokeStyle: borderColor },
            }),
        ])

        // mouse control
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
        })
        Composite.add(world, mouseConstraint)
// narrow types instead of using bare expressions
        const renderWT: RenderWithTextures = render as unknown as RenderWithTextures;
        const renderWithMouse: { mouse: Mouse } = render as unknown as { mouse: Mouse };
        renderWithMouse.mouse = mouse;

        Render.lookAt(render, { min: { x: 0, y: 0 }, max: { x: width, y: height } })

        // cleanup on unmount
        return () => {
            Render.stop(render)
            Runner.stop(runner)
            Engine.clear(engine)
            render.canvas.remove()

            // clear loaded textures without `any`
            const textures = renderWT.textures;
            for (const key of Object.keys(textures)) {
                delete textures[key]
            }
        }
    }, [width, height, wallThickness, borderColor])

    return (
        <div ref={containerRef} className={`relative ${className ?? ''}`}>
            {/* title overlay */}
            {title && (
                <div
                    className={
                        `pointer-events-none select-none absolute top-2 left-1/2 -translate-x-1/2 
             text-xs md:text-sm font-semibold tracking-widest uppercase 
             text-white/90 bg-black/30 backdrop-blur px-3 py-1 rounded-full shadow` +
                        (titleClassName ? ` ${titleClassName}` : '')
                    }
                >
                    {title}
                </div>
            )}
        </div>
    )
}
