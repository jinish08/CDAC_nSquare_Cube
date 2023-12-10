import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Box, OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Mesh } from 'three'
import { useNavigate, useLocation } from "react-router-dom";


function Ground({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }), useRef < Mesh > (null))

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  )
}

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

function SemiCrate(props) {
  const [ref, api] = useBox(() => ({ args: [1, 0.5, 1], mass: 10, ...props }), useRef < Mesh > (null))

  return (
    <Box
      args={[1, 0.5, 1]}
      onClick={() => {
        // api.applyImpulse([0, 5, 2], [0, -1, 0])
      }}
      ref={ref}
    >
      <meshStandardMaterial color={props.color} />
    </Box>
  )
}
function MovableSemiCrate(props) {
  const [ref, api] = useBox(() => ({ args: [1, 0.5, 1], mass: 10, position: props.position, color: props.color, x: props.x, y: props.y, z: props.z }), useRef < Mesh > (null))

  const { movedCubes, setMovedCubes } = props;

  const handleClick = () => {
    setMovedCubes(movedCubes + 1);
    api.position.set(props.x, props.y, props.z);
  }

  return (
    <Box
      args={[1, 0.5, 1]}
      onClick={handleClick}
      ref={ref}
    >
      <meshStandardMaterial color={props.color} />
    </Box>
  )
}

function Scene({ isPaused = false, togglePaused, setMovedCubes, movedCubes }) {
  return (
    <>
      <OrbitControls />

      <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
        <Debug color="black" scale={1}>
          {/* <Ground color="grey" position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}

          <Crate position={[1, 0, 0]} color="hotpink" />
          <Crate position={[0, 0, 0]} color="hotpink" />
          <Crate position={[-1, 0, 0]} color="hotpink" />
          <Crate position={[-2, 0, 0]} color="hotpink" />
          <Crate position={[1, 0, 1]} color="hotpink" />
          <Crate position={[0, 0, 1]} color="hotpink" />
          <Crate position={[-1, 0, 1]} color="hotpink" />
          <Crate position={[-2, 0, 1]} color="hotpink" />
          <Crate position={[1, 0, 2]} color="hotpink" />
          <Crate position={[0, 0, 2]} color="hotpink" />
          <Crate position={[-1, 0, 2]} color="hotpink" />
          <Crate position={[-2, 0, 2]} color="hotpink" />
          <Crate position={[1, 0, 3]} color="hotpink" />
          <Crate position={[0, 0, 3]} color="hotpink" />
          <Crate position={[-1, 0, 3]} color="hotpink" />
          <Crate position={[-2, 0, 3]} color="hotpink" />


          <Crate position={[1, 1, 0]} color="hotpink" />
          <Crate position={[0, 1, 0]} color="hotpink" />
          <Crate position={[-1, 1, 0]} color="hotpink" />
          <Crate position={[1, 1, 1]} color="hotpink" />
          <Crate position={[0, 1, 1]} color="hotpink" />
          <Crate position={[-1, 1, 1]} color="hotpink" />
          <Crate position={[1, 1, 2]} color="hotpink" />
          <Crate position={[0, 1, 2]} color="hotpink" />
          <Crate position={[-1, 1, 2]} color="hotpink" />

          <Crate position={[1, 2, 0]} color="hotpink" />
          <Crate position={[0, 2, 0]} color="hotpink" />
          <Crate position={[1, 2, 1]} color="hotpink" />
          <Crate position={[0, 2, 1]} color="hotpink" />

          <Crate position={[1, 3, 0]} color="hotpink" />

          {/* green  wala section */}
          <SemiCrate position={[1, 3.75, 0]} color="red" />
          <SemiCrate position={[1, 3.75, 1]} color="red" />
          <SemiCrate position={[0, 3.75, 1]} color="red" />
          <SemiCrate position={[1, 3.75, 2]} color="red" />
          <SemiCrate position={[0, 3.75, 2]} color="red" />
          <SemiCrate position={[-1, 3.75, 2]} color="red" />
          <SemiCrate position={[1, 3.75, 3]} color="red" />
          <SemiCrate position={[0, 3.75, 3]} color="red" />
          <SemiCrate position={[-1, 3.75, 3]} color="red" />
          <SemiCrate position={[-2, 3.75, 3]} color="red" />

          <MovableSemiCrate position={[1, 4.25, 0]} color="blue" x={0} y={3.75} z={0} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[1, 4.25, 1]} color="blue" x={-1} y={3.75} z={0} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[0, 4.25, 1]} color="blue" x={-1} y={3.75} z={1} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[1, 4.25, 2]} color="blue" x={-2} y={3.75} z={0} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[0, 4.25, 2]} color="blue" x={-2} y={3.75} z={1} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[-1, 4.25, 2]} color="blue" x={-2} y={3.75} z={2} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[1, 4.25, 3]} color="blue" x={-3} y={3.75} z={0} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[0, 4.25, 3]} color="blue" x={-3} y={3.75} z={1} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[-1, 4.25, 3]} color="blue" x={-3} y={3.75} z={2} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />
          <MovableSemiCrate position={[-2, 4.25, 3]} color="blue" x={-3} y={3.75} z={3} movedCubes={movedCubes} setMovedCubes={setMovedCubes} />

          <Crate position={[1, 3, 1]} color="red" />
          <Crate position={[0, 3, 1]} color="red" />
          <Crate position={[1, 3, 2]} color="red" />
          <Crate position={[0, 3, 2]} color="red" />
          <Crate position={[-1, 3, 2]} color="red" />
          <Crate position={[1, 3, 3]} color="red" />
          <Crate position={[0, 3, 3]} color="red" />
          <Crate position={[-1, 3, 3]} color="red" />
          <Crate position={[-2, 3, 3]} color="red" />

          <Crate position={[1, 2, 2]} color="red" />
          <Crate position={[0, 2, 2]} color="red" />
          <Crate position={[-1, 2, 2]} color="red" />
          <Crate position={[1, 2, 3]} color="red" />
          <Crate position={[0, 2, 3]} color="red" />
          <Crate position={[-1, 2, 3]} color="red" />
          <Crate position={[-2, 2, 3]} color="red" />

          <Crate position={[1, 1, 3]} color="red" />
          <Crate position={[0, 1, 3]} color="red" />
          <Crate position={[-1, 1, 3]} color="red" />
          <Crate position={[-2, 1, 3]} color="red" />


          <Crate position={[-3, 0, 3]} color="yellow" />
          <Crate position={[-3, 0, 2]} color="yellow" />
          <Crate position={[-3, 0, 1]} color="yellow" />
          <Crate position={[-3, 0, 0]} color="yellow" />
          <Crate position={[-3, 1, 3]} color="yellow" />
          <Crate position={[-3, 1, 2]} color="yellow" />
          <Crate position={[-3, 1, 1]} color="yellow" />
          <Crate position={[-3, 1, 0]} color="yellow" />
          <Crate position={[-3, 2, 3]} color="yellow" />
          <Crate position={[-3, 2, 2]} color="yellow" />
          <Crate position={[-3, 2, 1]} color="yellow" />
          <Crate position={[-3, 2, 0]} color="yellow" />
          <Crate position={[-3, 3, 3]} color="yellow" />
          <Crate position={[-3, 3, 2]} color="yellow" />
          <Crate position={[-3, 3, 1]} color="yellow" />
          <Crate position={[-3, 3, 0]} color="yellow" />

          <Crate position={[-2, 1, 0]} color="yellow" />
          <Crate position={[-2, 1, 1]} color="yellow" />
          <Crate position={[-2, 1, 2]} color="yellow" />
          <Crate position={[-2, 2, 0]} color="yellow" />
          <Crate position={[-2, 2, 1]} color="yellow" />
          <Crate position={[-2, 2, 2]} color="yellow" />
          <Crate position={[-2, 3, 0]} color="yellow" />
          <Crate position={[-2, 3, 1]} color="yellow" />
          <Crate position={[-2, 3, 2]} color="yellow" />

          <Crate position={[-1, 2, 0]} color="yellow" />
          <Crate position={[-1, 2, 1]} color="yellow" />
          <Crate position={[-1, 3, 0]} color="yellow" />
          <Crate position={[-1, 3, 1]} color="yellow" />

          <Crate position={[0, 3, 0]} color="yellow" />

        </Debug>
      </Physics>

      <ambientLight />
    </>
  )
}

export default function App() {
  const [isPaused, togglePaused] = useState(false)
  const location = useLocation();
  const [scene, setScene] = useState(location.state?.scene || 1);
  const [movedCubes, setMovedCubes] = useState(0);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const divRef = useRef(null);

    const toggleShowModel = () => {
        setShowModal(!showModal);
    };

    const handleButtonClick = () => {
        if (scene === 4) {
            setScene(6);
            return;
        }
        setScene(scene + 1)
    }

    const handlePrevButtonClick = () => {
        if (scene === 1) {
            navigate("/landing-page",{state:{scene:6}});
        }
        if (scene === 6) {
            setScene(4);
            return;
        }
        setScene(scene - 1)
    }

  useEffect(() => {
    if (movedCubes > 9) {
      setScene(6);
    }
  }, [movedCubes])

  useEffect(() => {
    if (scene === 8) {
      navigate("/app-new");
    }
  }, [scene])
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <div style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
            <button
                onClick={() => togglePaused((value) => !value)}
                style={{ fontSize: '20px', margin: '20px', padding: '8px' }}
            >
            {/* {isPaused ? 'RESUME' : movedCubes} */}
            </button>
        </div>

        <Canvas camera={{ fov: 30, position: [4, 15, 25] }}>
            <Scene isPaused={isPaused} togglePaused={togglePaused} setMovedCubes={setMovedCubes} movedCubes={movedCubes} />
        </Canvas>
            
        <div className="text-6xl font-thin mt-12" style={{ position: 'fixed',top:0, textAlign: 'center', width: '100%', zIndex: +1 }}>
            <p>Sum of Squares of N Natural Numbers</p>
        </div>

        <div className=" bg-gray-300/80 rounded-xl backdrop-blur-md"
            style={{ position: 'fixed', bottom: 100, zIndex: 999, left: "50%", transform: "translateX(-50%)", width: "70%" }}>
            <p className='text-center m-1 text-5xl font-thin'>
            {scene === 1 && "This is the combined figure in 3D, which you can rotate and zoom in and out"}
            {scene === 2 && "Now you are familariased with the 3D space, let's move on to the next part"}
            {scene === 3 && "Now, lets try to make a complete cuboid of this figure by moving the extra cubes above (blue) and flatten the top layer"}
            {scene === 4 && "Click on the blue cubes to move them to the correct position"}
            {scene === 6 && "You have successfully completed the activity"}
            {scene === 7 && "Move and play around with the new figure and try to predict its dimensions"}
            </p>
        </div>
    
        <div style={{ position: 'fixed', bottom: -30, left: '5%' }}>
            <img style={{width:'42%'}} src={'./images/character.png'} alt='character'/>
        </div>

        <div style={{ position: 'fixed', bottom: 20, left: 10, zIndex: 999 }}>
            <button style={{
                padding: '8px 16px',
                border: '2px solid #000',
                borderRadius: '20px',
                background: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                }}
                onClick={toggleShowModel}>i</button>
        </div>
    
        {showModal && (
            <div
            ref={divRef}
                    className="fixed w-6/12 bg-gray-300/80 rounded-xl backdrop-blur-md"
                    style={{ zIndex: 999 , left: "48px", bottom: "50px"}}
            >
            <div className="flex flex-col m-2">
                <p className="text-xl">
                    You can rotate the objects in 3D by clicking and dragging on the screen,<br/>
                    You can zoom in and out using the mouse wheel or pinch gesture.
                </p>
            </div>
            </div>
        )}
    
        {/* <div style={{ position: 'fixed', top: 40, left: 40, zIndex: 999 }} >
            <button style={{
                padding: '8px 16px',
                border: '2px solid #000',
                borderRadius: '4px',
                background: 'none',
                cursor: 'pointer',
                fontSize: '16px',
            }} onClick={() => { navigate("/") }}>Home</button>
        </div> */}

        {(scene !== 4 || movedCubes > 9) && <div style={{ position: 'fixed', bottom: 50, right: 50, zIndex: 999 }} >
        <button style={{
            padding: '8px 16px',
            border: '2px solid #000',
            borderRadius: '4px',
            background: 'none',
            cursor: 'pointer',
            fontSize: '16px',
        }} onClick={handleButtonClick}>Next -&gt;</button>
        </div>}

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