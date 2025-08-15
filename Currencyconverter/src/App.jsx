
import './index.css'
import React from 'react';
import { useLottie } from 'lottie-react';
import clock from "./assets/clock.json";
function App() {
  const options = {
    animationData: clock,
    loop: true
  };
  const { View } = useLottie(options);

  return <>
   <div style={{ width: '100%', height: '100vh', backgroundImage: 'URL(https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg?t=st=1755268046~exp=1755271646~hmac=0155bc4a196105fab02ed94a10dfb235af17071f8b6c692714fa92a5f4e5a7b0&w=1060 )', backgroundRepeat:'no-repeat', backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          {React.cloneElement(View, { style: { width: '200px', height: '200px' } })}
          <div className='w-lg h-96 bg-transparent border-amber-700 border-2 rounded-md'> 
            
          </div>
        </div>
  </>;
};

export default App
