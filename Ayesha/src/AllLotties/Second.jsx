import second from "../assets/p7fVzBuCXP.json";
import React from 'react';
import { useLottie } from 'lottie-react';
function Second() {
  const options = {
    animationData: second,
    loop: true
  };
  const { View } = useLottie(options);

  return <>
  {React.cloneElement(View, { style: { width: '300px', height: '400px' } })}
  </>
};

export default Second 