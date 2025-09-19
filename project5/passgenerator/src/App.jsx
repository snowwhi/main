import './index.css'
import { useState,useCallback ,useEffect,useRef} from 'react'
function App() {
const [Password,setPassword]=useState('')
const [AllowNum,setAllowNum]=useState(false)
const [AllowCharac,setAllowCharac]=useState(false)
const [length,setlength]=useState(8)

 const  passGenerator = useCallback(() => {
   let pass=''
   let string='ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz'
   if (AllowNum) string +="0123456789"
   if (AllowCharac) string +="!@#$%^&*()_+{}:.,~`"
   for (let index = 1; index < length; index++) {
    let char = Math.floor(Math.random()* string.length +1);
       pass += string.charAt(char)
}

setPassword(pass)

}, [AllowNum,AllowCharac,length,setPassword]);

 const copytoChlipboard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(Password)
 },[Password])

 
 useEffect(()=>{ 
  passGenerator()
 },[length,AllowNum,AllowCharac,passGenerator])


const passwordRef=useRef(null)
  return (
   <div className='flex justify-center flex-wrap content-center w-full h-screen bg-gray-950 text-white'> 
      <div className=' content-center w-lg h-60 bg-gray-700 border-pink-700 border-2 '>
           <h1 className='text-3xl text-center'> Password Generator </h1>
           <h1 className='text-xl text-center'> Random </h1>

           <div className='relative '>

           <input 
           type="text"
           className='w-120 px-1.5 bg-gray-100 h-10 m-3 box-border rounded-2xl outline-pink-700 border-2 border-pink-700 text-lg text-pink-700'
           placeholder='Password'
           value={Password}
           ref={passwordRef}
           readOnly
           />

           <button 
           type="button"
            className='bg-pink-700  p-1.5 text-xl text-white  absolute right-4.5 top-3 rounded-r-full' 
           onClick={copytoChlipboard}
           >
            Copy
          </button>
          </div>
          
          <div className='flex gap-1 m-3.5'>
            <input type="range" 
             min={1} max={30}
             value={length}
             onChange={(e)=>{setlength(e.target.value)}}
             className='accent-pink-700 '
             />
            <label htmlFor="range"
             className='px-2'
            >Length {length}</label>


            <input type="checkbox"
            className='accent-pink-700 px-3'
            onChange={()=>{setAllowNum((prev)=>!prev)}}
             />
             
            <label htmlFor="checkbox"
             className='px-2'
            >Number</label>


            <input type="checkbox"
            className='accent-pink-700 px-3'
              onChange={()=>{setAllowCharac((prev)=>!prev)}}
             />
            <label htmlFor="checkbox"
             className='px-2'
            >Character</label>
          </div>
      </div>
   </div>
  )
}

export default App
