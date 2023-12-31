import React from "react";
import { TypeAnimation } from "react-type-animation";


function Home(){
    return (
        <>
      <div id="main">
        <img className="w-full h-screen object-cover object-left " src="../../public/coding.jpg"/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
<h1 className="flex justify-center items-center gap-2 top-50">
I am
        <TypeAnimation
      sequence={[
        'developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'coder',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h1>
    </div>
      </div>
        </>
    )
}
export default Home