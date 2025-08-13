import './index.css'
import Card from './Components/Card.jsx'
function App() {
 
 let namearray=['khadija','kakak','zohan','Azlan']
  return (
    <>
     <h1 className='bg-blue-700 rounded-3xl text-black'>Tailwind + React Props practice</h1>
    <div className='flex'>
         <Card name={namearray[0]} btntext="love you" description='hi, my name is khadija Hanif i am 22 yaers old'/>
         <Card name={[namearray[1]]} btntext='like you' description='hi,my name is asia i am  24 years old'/>
         <Card name={[namearray[2]]} btntext='beat you' description='hi,my name is zohan i am  3 years old'/>
    </div>
    </>
  )
}

export default App
