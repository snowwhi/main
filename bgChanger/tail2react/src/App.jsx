
import { useState } from 'react'
import './index.css'

function App() {

 const [color,setColor]=useState('blue')
  return (
    <div className='w-full h-screen'
      style={{backgroundColor:color}}
    >
     <div className='fixed px-2 py-1 bg-white flex justify-center items-center rounded-full m-4 bottom-0 left-1/2 translate-x-[-50%] max-w-3xl w-full'>
<button 
onClick={()=>setColor('red')}
className='p-2 m-2 bg-red-500 text-2xl text-white rounded-full'>
  Red
</button>
<button 
onClick={()=>setColor('green')}
className='p-2 m-2 bg-green-500 text-2xl text-white rounded-full'>
  Green
</button>
<button 
onClick={()=>setColor('blue')}
className='p-2 m-2 bg-blue-500 text-2xl text-white rounded-full'>
  Blue
</button>
<button 
onClick={()=>setColor('yellow')}
className='p-2 m-2 bg-yellow-500 text-2xl text-white rounded-full'>
  Yellow
</button>
<button 
onClick={()=>setColor('gray')}
className='p-2 m-2 bg-gray-500 text-2xl text-white rounded-full'>
  Gray
</button>
<button 
onClick={()=>setColor('violet')}
className='p-2 m-2 bg-violet-500 text-2xl text-white rounded-full'>
  Voilet
</button>
<button 
onClick={()=>setColor('fuchsia')}
className='p-2 m-2 bg-fuchsia-500 text-2xl text-white rounded-full'>
  Fuchsia
</button>
<button 
onClick={()=>setColor('pink')}
className='p-2 m-2 bg-pink-600 text-2xl text-white rounded-full'>
  pink
</button>
    </div>
    </div> 
  )
}

export default App
