import { Canvas, extend, useLoader } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { Box, Html, OrbitControls, Plane } from '@react-three/drei'
import { Debug, Physics, useBox } from '@react-three/cannon'
import { Mesh } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import almendra from '../fonts/Almendra_Regular.json'
import { useNavigate } from "react-router-dom";

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
function HeightCrate(props) {
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

function WidthCrate(props) {
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

function LengthCrate(props) {
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


const LetterHorizontal = ({ position }) => {

    const font = new FontLoader().parse(almendra);

    const textProps = {
        font,
        size: 0.5,
        height: 0.1,
    };

    return (
        <group position={position} >
            <mesh>
                <textGeometry args={['N', textProps]} />
                <meshBasicMaterial attach="material" color="black" />
            </mesh>
        </group>
    );
};

const LetterVertical = ({ position }) => {

    const font = new FontLoader().parse(almendra);

    const textProps = {
        font,
        size: 0.5,
        height: 0.1,
    };

    return (
        <group position={position} rotation={[0, Math.PI / 2, 0]}>
            <mesh>
                <textGeometry args={['N', textProps]} />
                <meshBasicMaterial attach="material" color="black" />
            </mesh>
        </group>
    );
}

const LetterDiagonal = ({ position }) => {

    const font = new FontLoader().parse(almendra);

    const textProps = {
        font,
        size: 0.5,
        height: 0.1,
    };

    return (
        <group position={position} rotation={[0, Math.PI / 4, 0]}>
            <mesh>
                <textGeometry args={['N', textProps]} />
                <meshBasicMaterial attach="material" color="black" />
            </mesh>
        </group>
    );
}

const ThinRodLength = ({ position }) => {
    return (
        <Box
            args={[4, 0.02, 0.02]}
            position={position}
        >
            <meshStandardMaterial color={"black"} />
        </Box>
    )
}

const ThinRodWidth = ({ position }) => {
    return (
        <Box
            args={[0.02, 0.02, 4]}
            position={position}
        >
            <meshStandardMaterial color={"black"} />
        </Box>
    )
}

function ThinRodHeight(props) {
    return (
        <Box
            args={[0.02, 4, 0.02]}
            position={props.position}
        >
            <meshStandardMaterial color={props.color} />
        </Box>
    )
}

function Scene({ isPaused, color }) {
    return (

        <>
            <OrbitControls />
            <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
                <Debug color="black" scale={1}>
                    {/* <Ground color="grey" position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}

                    <ThinRodHeight position={[1.6, 1.5, -0.6]} color={"black"} />
                    <ThinRodLength position={[-0.5, -0.6, 3.6]} color={"black"} />
                    <ThinRodWidth position={[1.6, -0.6, 1.5]} color={"black"} />

                    <LetterDiagonal position={[1.6, 1.5, -0.6]} />
                    <LetterHorizontal position={[-0.5, -1.2, 3.6]} />
                    <LetterVertical position={[1.6, -1.2, 1.5]} />

                    <Crate position={[1, 0, 0]} color={color} />
                    <Crate position={[0, 0, 0]} color={color} />
                    <WidthCrate position={[-1, 0, 0]} color={color} />
                    <Crate position={[-2, 0, 0]} color={color} />
                    <Crate position={[1, 0, 1]} color={color} />
                    <Crate position={[0, 0, 1]} color={color} />
                    <Crate position={[-1, 0, 1]} color={color} />
                    <Crate position={[-2, 0, 1]} color={color} />
                    <LengthCrate position={[1, 0, 2]} color={color} />
                    <Crate position={[0, 0, 2]} color={color} />
                    <Crate position={[-1, 0, 2]} color={color} />
                    <Crate position={[-2, 0, 2]} color={color} />
                    <Crate position={[1, 0, 3]} color={color} />
                    <Crate position={[0, 0, 3]} color={color} />
                    <Crate position={[-1, 0, 3]} color={color} />
                    <Crate position={[-2, 0, 3]} color={color} />


                    <Crate position={[1, 1, 0]} color={color} />
                    <Crate position={[0, 1, 0]} color={color} />
                    <Crate position={[-1, 1, 0]} color={color} />
                    <Crate position={[1, 1, 1]} color={color} />
                    <Crate position={[0, 1, 1]} color={color} />
                    <Crate position={[-1, 1, 1]} color={color} />
                    <Crate position={[1, 1, 2]} color={color} />
                    <Crate position={[0, 1, 2]} color={color} />
                    <Crate position={[-1, 1, 2]} color={color} />

                    <HeightCrate position={[1, 2, 0]} color={color} />
                    <Crate position={[0, 2, 0]} color={color} />
                    <Crate position={[1, 2, 1]} color={color} />
                    <Crate position={[0, 2, 1]} color={color} />

                    <Crate position={[1, 3, 0]} color={color} />

                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}


const ThreePyramid = () => {

    const [isPaused, togglePaused] = useState(false)
    const navigate = useNavigate()

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div className="text-6xl font-thin mt-20" style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
                {/* Hello */}
                        <span>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>)</span>
            </div>

            <div className='flex h-full' >
                <Canvas camera={{ fov: 50, position: [2, 10, 17] }}>
                    <Scene isPaused={isPaused} color={"hotpink"} />
                </Canvas>
                <Canvas camera={{ fov: 50, position: [2, 10, 17] }}>
                    <Scene isPaused={isPaused} color={"red"} />
                </Canvas>
                <Canvas camera={{ fov: 50, position: [2, 10, 17] }}>
                    <Scene isPaused={isPaused} color={"yellow"} />
                </Canvas>
                <div style={{ position: 'fixed', bottom: 150, left:"50%",transform: "translateX(-50%)", zIndex: 999, textAlign:"center", width:"70%" }}>
                    <p className='text-5xl font-thin'>
                        Now Let's Connect These Three Shapes
                    </p>
                </div>

                <div style={{ position: 'fixed', top: 40, left: 40, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={()=>{navigate("/")}}>Restart</button>
                </div> 

                <div style={{ position: 'fixed', bottom: 50, right: 50, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={navigate("/")} >Next -&gt;</button>
                </div>  
            <div style={{ position: 'fixed', bottom: 50, right: 200, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} >&lt;- Prev</button>
                </div> 
            </div>
        </div>
    )
}

export default ThreePyramid