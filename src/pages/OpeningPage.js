import React from 'react';
import { useNavigate } from "react-router-dom";

const OpeningPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
        <div className="text-7xl" style={{ position: 'fixed', textAlign: 'center', top: '7%', zIndex: +1, fontFamily: "cursive" }}>
            <h1>Sum of Squares of N Natural Numbers</h1>
        </div>
        <div style={{ position: 'fixed', bottom: '20%', left: '32%'}}>
            <img style={{width:'100%'}} src={'./images/character.png'} alt='character'/>
        </div>
        <div className="fixed bg-gray-300/80 rounded-xl backdrop-blur-md" style={{ zIndex: 999 , left: "51%", bottom: "45%", width: "30%"}}>
            <div className="flex flex-col m-4">
                <p className="text-3xl">
                    Lets learn about the sum of squares of n natural numbers formula and it's derivation.
                </p>
            </div>
        </div>
        <div style={{ position: 'fixed', bottom: "16%", left: '45%', zIndex: 999}}>
                <button className='bg-white text-2xl text-blue-500 px-4 py-2 backdrop-blur-md rounded-md shadow-md hover:bg-gray-300 hover:text-blue-600 transition duration-300' onClick={()=> navigate('/landing-page',{state:{scene:1}})}>Continue -&gt;</button>
        </div>
    </div>
  );
};

export default OpeningPage;
