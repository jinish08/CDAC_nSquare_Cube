import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Box, OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh } from 'three'


function Ground({ color, ...props }){
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null))

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  )
}

function Crate(props){
  const [ref, api] = useBox(() => ({ args: [1,1,1], mass: 10, ...props }), useRef<Mesh>(null))

  return (
    <Box
      args={[1, 1, 1]}
      onClick={() => {
        // api.applyImpulse([0, 5, 2], [0, -1, 0])
      }}
      ref={ref}
    >
      <meshStandardMaterial color={props.color}/>
    </Box>
  )
}

function SemiCrate(props){
  const [ref, api] = useBox(() => ({ args: [1,0.5,1], mass: 10, ...props }), useRef<Mesh>(null))

  return (
    <Box
      args={[1, 0.5, 1]}
      onClick={() => {
        // api.applyImpulse([0, 5, 2], [0, -1, 0])
      }}
      ref={ref}
    >
      <meshStandardMaterial color={props.color}/>
    </Box>
  )
}
function MovableSemiCrate(props){
  const [ref, api] = useBox(() => ({ args: [1,0.5,1], mass: 10, ...props }), useRef<Mesh>(null))

  return (
    <Box
      args={[1, 0.5, 1]}
      onClick={() => {
        // api.applyImpulse([0, 5, 2], [0, -1, 0])
        api.position.set(props.x, props.y, props.z)
      }}
      ref={ref}
    >
      <meshStandardMaterial color={props.color}/>
    </Box>
  )
}

function Scene({ isPaused = false }) {
  return (
    <>
      <OrbitControls />

      <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
        <Debug color="black" scale={1}>
          <Ground color="grey" position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />

          <Crate position={[1, 0, 0]} color="hotpink"/>
          <Crate position={[0, 0, 0]} color="hotpink"/>
          <Crate position={[-1, 0, 0]}color="hotpink" />
          <Crate position={[-2, 0, 0]}color="hotpink" />
          <Crate position={[1, 0,  1]}color="hotpink" />
          <Crate position={[0, 0, 1]} color="hotpink"/>
          <Crate position={[-1, 0, 1]}color="hotpink" />
          <Crate position={[-2, 0, 1]}color="hotpink" />
          <Crate position={[1, 0,  2]}color="hotpink" />
          <Crate position={[0, 0, 2]} color="hotpink"/>
          <Crate position={[-1, 0, 2]}color="hotpink" />
          <Crate position={[-2, 0, 2]}color="hotpink" />
          <Crate position={[1, 0,  3]}color="hotpink" />
          <Crate position={[0, 0, 3]} color="hotpink"/>
          <Crate position={[-1, 0, 3]}color="hotpink" />
          <Crate position={[-2, 0, 3]}color="hotpink" />
          

          <Crate position={[1, 1, 0]} color="hotpink"/>
          <Crate position={[0, 1, 0]} color="hotpink"/>
          <Crate position={[-1, 1, 0]}color="hotpink" />
          <Crate position={[1, 1,  1]}color="hotpink" />
          <Crate position={[0, 1, 1]} color="hotpink"/>
          <Crate position={[-1, 1, 1]}color="hotpink" />
          <Crate position={[1, 1,  2]}color="hotpink" />
          <Crate position={[0, 1, 2]} color="hotpink"/>
          <Crate position={[-1, 1, 2]}color="hotpink" />

          <Crate position={[1, 2, 0]} color="hotpink"/>
          <Crate position={[0, 2, 0]} color="hotpink"/>
          <Crate position={[1, 2, 1]} color="hotpink"/>
          <Crate position={[0, 2, 1]} color="hotpink"/>

          <Crate position={[1, 3, 0]} color="hotpink"/>


          <SemiCrate position={[1, 3.75, 0]} color="green"/>
          <SemiCrate position={[1, 3.75,  1]}color="green" />
          <SemiCrate position={[0, 3.75, 1]} color="green"/>
          <SemiCrate position={[1, 3.75,  2]}color="green" />
          <SemiCrate position={[0, 3.75, 2]} color="green"/>
          <SemiCrate position={[-1, 3.75, 2]}color="green" />
          <SemiCrate position={[1, 3.75,  3]}color="green" />
          <SemiCrate position={[0, 3.75, 3]} color="green"/>
          <SemiCrate position={[-1, 3.75, 3]}color="green" />
          <SemiCrate position={[-2, 3.75, 3]}color="green" />

          <MovableSemiCrate position={[1, 4.25, 0]} color="blue" x={0} y={3.75} z={0}/>
          <MovableSemiCrate position={[1, 4.25,  1]}color="blue" x={-1} y={3.75} z={0} />
          <MovableSemiCrate position={[0, 4.25, 1]} color="blue" x={-1} y={3.75} z={1}/>
          <MovableSemiCrate position={[1, 4.25,  2]}color="blue" x={-2} y={3.75} z={0} />
          <MovableSemiCrate position={[0, 4.25, 2]} color="blue" x={-2} y={3.75} z={1}/>
          <MovableSemiCrate position={[-1, 4.25, 2]}color="blue" x={-2} y={3.75} z={2} />
          <MovableSemiCrate position={[1, 4.25,  3]}color="blue" x={-3} y={3.75} z={0} />
          <MovableSemiCrate position={[0, 4.25, 3]} color="blue" x={-3} y={3.75} z={1}/>
          <MovableSemiCrate position={[-1, 4.25, 3]}color="blue" x={-3} y={3.75} z={2} />
          <MovableSemiCrate position={[-2, 4.25, 3]}color="blue" x={-3} y={3.75} z={3} />

          <Crate position={[1, 3, 1]} color="red"/>
          <Crate position={[0, 3, 1]} color="red"/>
          <Crate position={[1, 3,  2]}color="red" />
          <Crate position={[0, 3, 2]} color="red"/>
          <Crate position={[-1, 3, 2]} color="red"/>
          <Crate position={[1, 3,  3]}color="red" />
          <Crate position={[0, 3, 3]} color="red"/>
          <Crate position={[-1, 3, 3]}color="red" />
          <Crate position={[-2, 3, 3]}color="red" />

          <Crate position={[1, 2, 2]} color="red"/>
          <Crate position={[0, 2, 2]} color="red"/>
          <Crate position={[-1, 2, 2]} color="red"/>
          <Crate position={[1, 2, 3]} color="red"/>
          <Crate position={[0, 2, 3]} color="red"/>
          <Crate position={[-1, 2, 3]} color="red"/>
          <Crate position={[-2, 2, 3]} color="red"/>

          <Crate position={[1, 1, 3]} color="red"/>
          <Crate position={[0, 1, 3]} color="red"/>
          <Crate position={[-1, 1, 3]} color="red"/>
          <Crate position={[-2, 1, 3]} color="red"/>


          <Crate position={[-3, 0, 3]}color="yellow" />
          <Crate position={[-3, 0, 2]}color="yellow" />
          <Crate position={[-3, 0, 1]}color="yellow" />
          <Crate position={[-3, 0, 0]}color="yellow" />
          <Crate position={[-3, 1, 3]}color="yellow" />
          <Crate position={[-3, 1, 2]}color="yellow" />
          <Crate position={[-3, 1, 1]}color="yellow" />
          <Crate position={[-3, 1, 0]}color="yellow" />
          <Crate position={[-3, 2, 3]}color="yellow" />
          <Crate position={[-3, 2, 2]}color="yellow" />
          <Crate position={[-3, 2, 1]}color="yellow" />
          <Crate position={[-3, 2, 0]}color="yellow" />
          <Crate position={[-3, 3, 3]}color="yellow" />
          <Crate position={[-3, 3, 2]}color="yellow" />
          <Crate position={[-3, 3, 1]}color="yellow" />
          <Crate position={[-3, 3, 0]}color="yellow" />

          <Crate position={[-2, 1,0]}color="yellow" />
          <Crate position={[-2, 1,1]}color="yellow" />
          <Crate position={[-2, 1,2]}color="yellow" />
          <Crate position={[-2, 2,0]}color="yellow" />
          <Crate position={[-2, 2,1]}color="yellow" />
          <Crate position={[-2, 2,2]}color="yellow" />
          <Crate position={[-2, 3,0]}color="yellow" />
          <Crate position={[-2, 3,1]}color="yellow" />
          <Crate position={[-2, 3,2]}color="yellow" />

          <Crate position={[-1, 2,0]}color="yellow" />
          <Crate position={[-1, 2,1]}color="yellow" />
          <Crate position={[-1, 3,0]}color="yellow" />
          <Crate position={[-1, 3,1]}color="yellow" />

          <Crate position={[0, 3,0]}color="yellow" />

        </Debug>
      </Physics>

      <ambientLight />
    </>
  )
}

export default function App() {
  const [isPaused, togglePaused] = useState(false)
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
        <button
          onClick={() => togglePaused((value) => !value)}
          style={{ fontSize: '20px', margin: '20px', padding: '8px' }}
        >
          {isPaused ? 'RESUME' : 'PAUSE'}
        </button>
      </div>

      <Canvas camera={{ fov: 50, position: [2, 10, 7] }}>
        <Scene isPaused={isPaused} togglePaused={togglePaused}/>
      </Canvas>
    </div>
  )
}