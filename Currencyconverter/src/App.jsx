
import './index.css'
import Lottieclock from './components/Lottie'
function App() {
  return <>
   <div style={{ width: '100%', height: '100vh', backgroundImage: 
    'URL(https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg?t=st=1755268046~exp=1755271646~hmac=0155bc4a196105fab02ed94a10dfb235af17071f8b6c692714fa92a5f4e5a7b0&w=1060 )',
     backgroundRepeat:'no-repeat', backgroundSize:'cover',
    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          
          <Lottieclock/>
    <div className='w-lg h-96 bg-transparent border-amber-700 border-2 rounded-md'> 
                 All ui elements        
    </div>
    </div>
  </>;
};

export default App
