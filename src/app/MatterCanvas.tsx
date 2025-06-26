'use client'

import { useRef, useEffect } from 'react'
import Matter from 'matter-js'

interface MatterCanvasProps {
    width?: number
    height?: number
}
export default function MatterCanvas({ width = 1200, height = 420 }: MatterCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Events } = Matter

        const engine = Engine.create()
        const world = engine.world

        // 渲染到自定义canvas
        const render = Render.create({
            canvas: canvasRef.current!,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: 'rgba(0,0,0,0)', // 半透明白色背景
            }
        })

        // ground（深绿色半透明）
        const ground = Bodies.rectangle(
            width / 2, height - 50, width * 0.7, 36,
            {
                isStatic: true,
                render: { fillStyle: 'rgba(34,90,60,0.8)' }
            }
        )
        World.add(world, ground)

        // 鼠标拖拽添加物体
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } }
        })
        World.add(world, mouseConstraint)

        let timer = 0
        Events.on(mouseConstraint, 'mousemove', function () {
            if (mouseConstraint.mouse.button === 0) {
                timer++
                if (timer > 8) {
                    timer = 0
                    const box = Bodies.rectangle(
                        mouse.position.x, mouse.position.y, 54, 54,
                        { restitution: 0.7, render: { fillStyle: 'rgba(105,224,99,0.5)' } }
                    )
                    World.add(world, box)
                }
            }
        })
        Events.on(mouseConstraint, 'mouseup', function () { timer = 0 })

        Render.run(render)
        const runner = Runner.create()
        Runner.run(runner, engine)

        // 清理
        return () => {
            Render.stop(render)
            Runner.stop(runner)
        }
    }, [width, height])

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            // className="rounded-2xl shadow-lg mx-auto block"
            style={{ background: 'rgba(0,0,0,0)' }}
        />
    )
}
