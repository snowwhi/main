import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

      function addCount(){
        if (count>=20) {
         setCount(count)
         
        }else{
          setCount((prevCounter)=>prevCounter+1)
          setCount((prevCounter)=>prevCounter+1)
          setCount((prevCounter)=>prevCounter+1)
 
        //setCount(count+1)
    }}
        function removeCount(){
          if (count>0) {
        setCount(count-1)
            
          }else{
          setCount(count)
          }
      }
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={addCount}>
          Add-Count 
        </button>
       <button onClick={removeCount}>Remove-Count </button>
      </div>
      
    </>
  )
}

export default App
