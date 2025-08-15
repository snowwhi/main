import clock from "../assets/clock.json";
import React from 'react';
import { useLottie } from 'lottie-react';
function Lottieclock() {
  const options = {
    animationData: clock,
    loop: true
  };
  const { View } = useLottie(options);

  return <>
  {React.cloneElement(View, { style: { width: '200px', height: '200px' } })}
  </>
};

export default Lottieclock