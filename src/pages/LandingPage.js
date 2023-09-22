import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { Box, Html, OrbitControls, Plane } from '@react-three/drei'
import { Debug, Physics, useBox } from '@react-three/cannon'
import { Mesh } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import almendra from '../fonts/Almendra_Regular.json'

extend({ TextGeometry })

function Crate(props) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 10, ...props }), useRef < Mesh > (null))

    return (
        <Box
            args={[1, 1, 1]}
            onClick={() => {
                // api.applyImpulse([0, 5, 2], [0, -1, 0])
            }}
            ref={ref}
        >
            <meshStandardMaterial color={props.color} />
        </Box>
    )
}

function Scene1({ isPaused, color }) {
    return (

        <>
            <OrbitControls />
            <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
                <Debug color="black" scale={1}>
                    <Crate position={[0, -1, 0]} color={color} />
                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}

function Scene2({ isPaused, color }) {
    return (

        <>
            <OrbitControls />
            <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
                <Debug color="black" scale={1}>
                    <Crate position={[0.5, -0.25, 0]} color={color} />
                    <Crate position={[-0.5, -0.25, 0]} color={color} />
                    <Crate position={[0.5, -0.25, 1]} color={color} />
                    <Crate position={[-0.5, -0.25, 1]} color={color} />
                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}

function Scene3({ isPaused, color }) {
    return (

        <>
            <OrbitControls />
            <Physics  gravity={[0, 0, 0]} isPaused={isPaused}>
                <Debug color="black" scale={1}>
                    <Crate position={[1, 0.5, 0]} color={color} />
                    <Crate position={[-1, 0.5, 0]} color={color} />
                    <Crate position={[0, 0.5, 0]} color={color} />
                    <Crate position={[1, 0.5, 1]} color={color} />
                    <Crate position={[-1, 0.5, 1]} color={color} />
                    <Crate position={[0, 0.5, 1]} color={color} />
                    <Crate position={[1, 0.5, 2]} color={color} />
                    <Crate position={[-1, 0.5, 2]} color={color} />
                    <Crate position={[0, 0.5, 2]} color={color} />
                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}

function Scene4({ isPaused, color }) {
    return (

        <>
            <OrbitControls />
            <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
                <Debug color="black" scale={1}>
                    <Crate position={[0.5, 1.25, 0]} color={color} />
                    <Crate position={[0.5, 1.25, 1]} color={color} />
                    <Crate position={[0.5, 1.25, 2]} color={color} />
                    <Crate position={[0.5, 1.25, 3]} color={color} />
                    <Crate position={[-0.5, 1.25, 0]} color={color} />
                    <Crate position={[-0.5, 1.25, 1]} color={color} />
                    <Crate position={[-0.5, 1.25, 2]} color={color} />
                    <Crate position={[-0.5, 1.25, 3]} color={color} />
                    <Crate position={[-1.5, 1.25, 0]} color={color} />
                    <Crate position={[-1.5, 1.25, 1]} color={color} />
                    <Crate position={[-1.5, 1.25, 2]} color={color} />
                    <Crate position={[-1.5, 1.25, 3]} color={color} />
                    <Crate position={[1.5, 1.25, 0]} color={color} />
                    <Crate position={[1.5, 1.25, 1]} color={color} />
                    <Crate position={[1.5, 1.25, 2]} color={color} />
                    <Crate position={[1.5, 1.25, 3]} color={color} />
                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}

const LandingPage = () => {
    const [isPaused, togglePaused] = useState(false)

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
                Hello
            </div>
            <div style={{ position: 'fixed', bottom: "0", left: "40%" }}>
            </div>

            <div className='flex h-full ml-12' >
                <Canvas className='basis-1/12' camera={{ fov: 45, position: [0.2, 6.2, 10] }}>
                    <Scene1 isPaused={isPaused} color={"hotpink"} />
                </Canvas>
                <Canvas className='basis-1/4' camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                    <Scene2 isPaused={isPaused} color={"red"} />
                </Canvas>
                <Canvas className='basis-1/4' camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                    <Scene3 isPaused={isPaused} color={"yellow"} />
                </Canvas>
                <Canvas className='basis-5/12' camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                    <Scene4 isPaused={isPaused} color={"green"} />
                </Canvas>
            </div>
        </div>
    )
}

export default LandingPage