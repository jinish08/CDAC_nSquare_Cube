import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Box, OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import almendra from '../fonts/Almendra_Regular.json'
import { useNavigate } from "react-router-dom";

const moveBox = [0,0,0,0,0,0,0,0,0];


function Ground({ color, ...props }){
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null))

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  )
}


const ThinRodLength = ({ position }) => {
    return (
        <Box
            args={[5, 0.02, 0.02]}
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
            args={[0.02, 4.5, 0.02]}
            position={props.position}
        >
            <meshStandardMaterial color={props.color} />
        </Box>
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
        //   moveBox[props.i] = 1;
        //   console.log(moveBox);
        //   props.setCheckBoxTick(checkBox());
      }}
      ref={ref}
    >
      <meshStandardMaterial color={props.color}/>
    </Box>
  )
}

function checkBox() {
    for (var i = 0; i < 9; i++) {
        if (moveBox[i] !== 1) {
            return false;
        }
    }
    
    return true;
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
                <textGeometry args={['N + 1', textProps]} />
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
                <textGeometry args={['N+1/2', textProps]} />
                <meshBasicMaterial attach="material" color="black" />
            </mesh>
        </group>
    );
}

function Scene({ isPaused = false }) {
const { checkBoxTick,setCheckBoxTick } = useState(false);
  return (
    <>
      <OrbitControls />

      <Physics gravity={[0, 0, 0]} isPaused={isPaused}>
        <Debug color="black" scale={1}>
          {/* <Ground color="grey" position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}

        { <ThinRodHeight position={[1.4, 1.75, -0.6]} color={"black"} />}
        { <ThinRodLength position={[-1, -0.6, 3.6]} color={"black"} />}
        {<ThinRodWidth position={[1.6, -0.6, 1.5]} color={"black"} />}
                  
        <LetterDiagonal position={[1.6, 1.75, -0.6]} />
        <LetterHorizontal position={[-1.5, -1.2, 3.6]} />
        <LetterVertical position={[1.6, -1.2, 1.5]} />
        
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


          {/* green wala section  */}
          <SemiCrate position={[1, 3.75, 0]} color="red"/>
          <SemiCrate position={[1, 3.75,  1]}color="red" />
          <SemiCrate position={[0, 3.75, 1]} color="red"/>
          <SemiCrate position={[1, 3.75,  2]}color="red" />
          <SemiCrate position={[0, 3.75, 2]} color="red"/>
          <SemiCrate position={[-1, 3.75, 2]}color="red" />
          <SemiCrate position={[1, 3.75,  3]}color="red" />
          <SemiCrate position={[0, 3.75, 3]} color="red"/>
          <SemiCrate position={[-1, 3.75, 3]}color="red" />
          <SemiCrate position={[-2, 3.75, 3]} color="red" />
                  
          {/* blue wala section  */}
          <SemiCrate position={[0, 3.75, 0]} color="red" />
          <SemiCrate position={[-1, 3.75,  0]}color="red"/>
          <SemiCrate position={[-1, 3.75, 1]} color="red" />
          <SemiCrate position={[-2, 3.75,  0]}color="red"/>
          <SemiCrate position={[-2, 3.75, 1]} color="red"/>
          <SemiCrate position={[-2, 3.75, 2]}color="red" />
          <SemiCrate position={[-3, 3.75,  0]}color="red" />
          <SemiCrate position={[-3, 3.75, 1]} color="red"/>
          <SemiCrate position={[-3, 3.75, 2]}color="red" />
          <SemiCrate position={[-3, 3.75, 3]}color="red" />

          {/* <MovableSemiCrate position={[1, 4.25, 0]} color="blue" x={0} y={3.75} z={0} i={0} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[1, 4.25,  1]}color="blue" x={-1} y={3.75} z={0} i={1} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[0, 4.25, 1]} color="blue" x={-1} y={3.75} z={1} i={2} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[1, 4.25,  2]}color="blue" x={-2} y={3.75} z={0} i={3} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[0, 4.25, 2]} color="blue" x={-2} y={3.75} z={1} i={4}setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[-1, 4.25, 2]}color="blue" x={-2} y={3.75} z={2} i={5} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[1, 4.25,  3]}color="blue" x={-3} y={3.75} z={0} i={6} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[0, 4.25, 3]} color="blue" x={-3} y={3.75} z={1} i={7} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[-1, 4.25, 3]}color="blue" x={-3} y={3.75} z={2} i={8} setCheckBoxTick={setCheckBoxTick}/>
          <MovableSemiCrate position={[-2, 4.25, 3]}color="blue" x={-3} y={3.75} z={3} i={9} setCheckBoxTick={setCheckBoxTick}/> */}

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

export default function AppNew() {
    const [isPaused, togglePaused] = useState(false);
    const navigate = useNavigate();
    const textList = [
        <p>Volume of a cuboid = Length x Width x Height</p>,
        <p>And as illustrated, the volume of this cuboid =<br/>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>)</p>,
        <p>Given Height = (n + (1/2))</p>,
        <p>Simplifying,</p>,
        <p>Height = (2n+1)/2</p>,
        <p>Now we know<br/>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>) = Length x Width x Height,</p>,
        <p>Hence 3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>) = n*(n + 1)*(2n + 1)/2</p>,
        // <p>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>) = [n(n + 1)(2n + 1)]/2</p>,
        <><p>Dividing by 3 on both sides, We get</p><br/></>,
        <p></p>,
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState(textList[0]);
    const [textDisplay, setTextDisplay] = useState([
        <p>Dimensions: </p>,
        <p> length = n, width = n + 1, height = n + 1/2 </p>,
        
    ]);
    const [showEquation, setShowEquation] = useState(false);
    const [showEquation1, setShowEquation1] = useState(true);

    const handleButtonClick = () => {
        // The new text should add to the next line
        // setDisplayText(displayText + "<br/>" + textList[nextIndex]);
        // if (currentTextIndex === 0 && !showEquation) {
        //     setTextDisplay([]);
        //     setShowEquation(true);
        //     setCurrentTextIndex(1);
        //     return;
        // }
        const nextIndex = (currentTextIndex + 1);
        if (nextIndex !== 10) {
            if (nextIndex === 1) {
                textDisplay.pop();
                textDisplay.pop();
                textDisplay.pop();
                textDisplay.pop();
            }
            // setShowEquation(false);
            // setShowEquation1(false);
            if (nextIndex === 6) {
                // Clear the textDisplay.
                setTextDisplay([]);
                for(var i = 0; i < nextIndex+1; i++) {
                    textDisplay.pop();
                }
            }
            textDisplay.push(
                <>
                    {textList[nextIndex-1]}
                </>
            );
            setTextDisplay(textDisplay);
            setCurrentTextIndex(nextIndex);
        }
    };
    const handlePrevButtonClick = () => {
        // The new text should add to the next line
        // setDisplayText(displayText + "<br/>" + textList[nextIndex]);
        if (currentTextIndex === 0) {
            return;
        }
        const nextIndex = (currentTextIndex - 1);
        if (nextIndex === 0) {
            // setShowEquation(false);
            // setShowEquation1(true);
            setTextDisplay([
              <p>Dimensions: </p>,
              <p> length = n, width = n + 1, height = n + 1/2 </p>,
            ]);
            setCurrentTextIndex(nextIndex);
            return;
        }
        // if (nextIndex === 1) {
        //     setShowEquation(true);
        //     setShowEquation1(true);
        //     setTextDisplay([]);
        //     setCurrentTextIndex(nextIndex);
        //     return;
        // }
        if (nextIndex === 5) {
            setTextDisplay([
                <p>Volume of a cuboid = Length x Width x Height</p>,
                <p>And as illustrated, the volume of this cuboid =<br/>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>)</p>,
                <p>Given Height = (n + (1/2))</p>,
                <p>Simplifying,</p>,
                <p>Height = (2n+1)/2</p>
            ]);
            setCurrentTextIndex(nextIndex);
            return;
        }
        textDisplay.pop();
        setTextDisplay(textDisplay);
        setCurrentTextIndex(nextIndex);
    };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {/* <div style={{ position: 'fixed', textAlign: 'center', width: '100%', zIndex: +1 }}>
        <button
          onClick={() => togglePaused((value) => !value)}
          style={{ fontSize: '20px', margin: '20px', padding: '8px' }}
        >
          {isPaused ? 'RESUME' : currentTextIndex}
        </button>
      </div> */}
      {/* <div style={{ position: 'fixed', top: 100, left: 50, zIndex: 999 }}>
        <p style={{ fontSize: '45px', margin: '20px', padding: '8px' }}>
            {showEquation1? <span>3(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup>)</span> : <></>}{showEquation? <span>= n(n + 1)(n + 1 / 2)</span> : <></>
            }
        </p>
          </div> */}
          <div style={{ position: 'fixed', top: 100, left: '45%', zIndex: 999 }}>
              {!showEquation1 ? <p>{currentTextIndex}</p>:<></>}
          </div>
          
      {/* <div style={{position:'fixed',bottom:"0",left:"40%"}}> */}
      {/* <button
          style={{ fontSize: '20px', margin: '20px', padding: '8px' }}
      >
        Click on the Blue Boxes to move them
      </button> */}
          {/* </div> */}
    <div className='flex h-full' >
      <div className='basis-5/12 pl-7'>
        <Canvas  camera={{ fov: 37, position: [10, 8, 20],  }}>
            <Scene isPaused={isPaused} togglePaused={togglePaused}/>
        </Canvas>
        </div>
        <div >
            <div style={{ position: 'fixed', top: '30%', zIndex: 999, width:'60%',paddingRight:"20px" }}>
                <p className='text-4xl font-thin' style={{ margin: '20px', marginLeft: '10px',padding: '8px', textAlign: 'right'}}>
                        {/* {displayText} */}
                        {textDisplay}
                </p>
            </div>

            {currentTextIndex==9 && <div style={{ position: 'fixed', bottom: 150, zIndex: 999, left: "50%", transform: "translateX(-50%)", width: "70%", backgroundColor: "#D3D3D3", padding: "20px", borderRadius: "10px" }}>
        <p className='text-center text-5xl font-semibold'>
          1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup> = [n(n + 1)(2n + 1)]/6
        </p>
      </div>}

      <div style={{ position: 'fixed', top: 40, left: 40, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={()=>{navigate("/app")}}>Return</button>
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
                {currentTextIndex!=0 && <div style={{ position: 'fixed', bottom: 50, right: 200, zIndex: 999 }} >
                <button style={{
                    padding: '8px 16px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }} onClick={handlePrevButtonClick}>&lt;- Prev</button>
                </div>} 
            </div>      
        </div>
      </div>
  )
}