import first from "../assets/m8CZUXonsY.json";
import React from 'react';
import { useLottie } from 'lottie-react';
function First() {
  const options = {
    animationData: first,
    loop: true
  };
  const { View } = useLottie(options);

  return <>
  {React.cloneElement(View, { style: { width: '300px', height: '400px',margin:'20px'  } })}
  </>
};

export default First 