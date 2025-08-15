
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
   <div style={{ width: '100%', height: '100vh', backgroundImage: 'URL( )', display: 'flex', alignItems: 'center', justifyContent: 'center' ,gap:'30px'}}>
          {React.cloneElement(View, { style: { width: '200px', height: '200px' } })}
          <div className='w-96 h-80 bg-transparent border-amber-700 border-2 rounded-md'> 
            
          </div>
        </div>
  </>;
};

export default App
