import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
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
            <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
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

function Scene5({ isPaused, color }) {
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

                    <Crate position={[1, 0, 0]} color={color[3]} />
                    <Crate position={[0, 0, 0]} color={color[3]} />
                    <WidthCrate position={[-1, 0, 0]} color={color[3]} />
                    <Crate position={[-2, 0, 0]} color={color[3]} />
                    <Crate position={[1, 0, 1]} color={color[3]} />
                    <Crate position={[0, 0, 1]} color={color[3]} />
                    <Crate position={[-1, 0, 1]} color={color[3]} />
                    <Crate position={[-2, 0, 1]} color={color[3]} />
                    <LengthCrate position={[1, 0, 2]} color={color[3]} />
                    <Crate position={[-1, 0, 2]} color={color[3]} />
                    <Crate position={[-2, 0, 2]} color={color[3]} />
                    <Crate position={[0, 0, 2]} color={color[3]} />
                    <Crate position={[1, 0, 3]} color={color[3]} />
                    <Crate position={[0, 0, 3]} color={color[3]} />
                    <Crate position={[-1, 0, 3]} color={color[3]} />
                    <Crate position={[-2, 0, 3]} color={color[3]} />


                    <Crate position={[1, 1, 0]} color={color[2]} />
                    <Crate position={[0, 1, 0]} color={color[2]} />
                    <Crate position={[-1, 1, 0]} color={color[2]} />
                    <Crate position={[1, 1, 1]} color={color[2]} />
                    <Crate position={[0, 1, 1]} color={color[2]} />
                    <Crate position={[-1, 1, 1]} color={color[2]} />
                    <Crate position={[1, 1, 2]} color={color[2]} />
                    <Crate position={[0, 1, 2]} color={color[2]} />
                    <Crate position={[-1, 1, 2]} color={color[2]} />

                    <HeightCrate position={[1, 2, 0]} color={color[1]} />
                    <Crate position={[0, 2, 0]} color={color[1]} />
                    <Crate position={[1, 2, 1]} color={color[1]} />
                    <Crate position={[0, 2, 1]} color={color[1]} />

                    <Crate position={[1, 3, 0]} color={color[0]} />

                </Debug>
            </Physics>

            <ambientLight />
        </>

    )
}

function Scene6({ isPaused, color }) {
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




const LandingPage = () => {
    const [isPaused, togglePaused] = useState(false)
    const [scene, setScene] = useState(1)
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setScene(scene + 1)
    }

    const handlePrevButtonClick = () => {
        setScene(scene - 1)
    }

    useEffect(()=>{
        if(scene===5){
            navigate('/app')
        }
    },[scene])

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div className="text-6xl font-thin mt-12" style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
                {scene == 1 && "We will represent each term in the series with the equivalent number of cubes"}

            </div>
            <div style={{ position: 'fixed', bottom: "0", left: "40%" }}>
            </div>

            <div className='flex h-[90%] text-3xl scroll-m-6' >
                {scene === 1 && (<><div className='basis-1/12'>
                    <Canvas camera={{ fov: 45, position: [0.2, 6.2, 10] }}>
                        <Scene1 isPaused={isPaused} color={"hotpink"} />
                    </Canvas>
                    <p className='-mt-52 ml-32'>1^2</p>
                    <p className='-mt-10 ml-64'>+</p>
                </div>
                    <div className='basis-1/4'>
                        <Canvas camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                            <Scene2 isPaused={isPaused} color={"red"} />
                        </Canvas>
                        <p className='-mt-52 ml-32'>2^2</p>
                        <p className='-mt-10 ml-64'>+</p>
                    </div>
                    <div className='basis-1/4'>
                        <Canvas camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                            <Scene3 isPaused={isPaused} color={"yellow"} />
                        </Canvas>
                        <p className='-mt-52 ml-36'>3^2</p>
                        <p className='-mt-10 ml-80'>+....+</p>
                    </div>
                    <div className='basis-5/12'>
                        <Canvas className='basis-5/12' camera={{ fov: 45, position: [0.2, 6.2, 10.2] }}>
                            <Scene4 isPaused={isPaused} color={"green"} />
                        </Canvas>
                        <p className='-mt-52 ml-56'>n^2</p>
                    </div></>)}
                {(scene === 2 || scene === 3) && (
                    <Canvas camera={{ fov: 35, position: [10, 10, 17] }}>
                        <Scene5 isPaused={isPaused} color={["hotpink", "red", "yellow", "green"]} />
                    </Canvas>
                )}
                {scene === 4 && (
                    <>
                        <Canvas camera={{ fov: 40, position: [10, 10, 17] }}>
                            <Scene6 isPaused={isPaused} color={"hotpink"} />
                        </Canvas>
                        <Canvas camera={{ fov: 40, position: [10, 10, 17] }}>
                            <Scene6 isPaused={isPaused} color={"red"} />
                        </Canvas>
                        <Canvas camera={{ fov: 40, position: [10, 10, 17] }}>
                            <Scene6 isPaused={isPaused} color={"yellow"} />
                        </Canvas>
                    </>
                )}
                {(scene === 2 || scene === 3 || scene === 4) &&
                    (<div style={{ position: 'fixed', bottom: 150, zIndex: 999, left: "50%", transform: "translateX(-50%)", width: "70%" }}>
                        <p className='text-center text-5xl font-thin'>
                            {scene == 2 && "We can see that the length, width, and heigth, of this shape, is equal to n"}
                            {scene == 3 && "Let's make 2 more copies of the same shape"}
                            {scene == 4 && "Now Let's Connect These Three Shapes"}
                        </p>
                    </div>)
                }
            </div>

            <div style={{ position: 'fixed', bottom: 50, right: 50, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={handleButtonClick}>Next -&gt;</button>
            </div>
            <div style={{ position: 'fixed', bottom: 50, right: 200, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={handlePrevButtonClick}>&lt;- Prev</button>
            </div>
        </div>
    )
}

export default LandingPage