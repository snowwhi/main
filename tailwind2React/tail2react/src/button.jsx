import { useState } from "react";
function Button({ color }) {
    const [bgColor, setBgColor] = useState('green');

    return (
    <>
    {/* great concept but props value is read only and you have not reached that state to chnge it  */}
    <div className='w-full h-screen'
      style={{backgroundColor: bgColor}}
    >

    </div>
            <button
                onClick={() => setBgColor(color)}
                className={`p-2 m-2 bg-${color}-500 text-2xl text-black fixed px-2 py-1 flex justify-center items-center top-0 left-1/2`}
                >
                {color}
            </button>
        
                </>
    );
}

export default Button;