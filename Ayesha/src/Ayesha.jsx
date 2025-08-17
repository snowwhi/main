import First from './AllLotties/First'
import Second from "./AllLotties/Second";
import logo from './assets/logo.gif';
import gift from './assets/gift.gif';
import hug from './assets/hug.gif';

function Ayesha() {
  return (
        <>
        <div className='w-full h-auto bg-purple-300 text-2xl flex justify-center content-center flex-col'>

      <div className='w-full h-screen bg-purple-500 text-2xl flex justify-center content-center flex-col'>
            
  <h1 className='text-xl font-bold text-white text-center mt-12'>🎂 Happy Birthday, Ayesha!</h1>
           <First/>
      </div>
      <div className='w-full h-screen bg-purple-500 text-2xl flex justify-center content-space-between flex-col'>
           <h1 className='text-2xl font-bold text-white text-center mt-12'>Oopsie you'r revealed</h1>
           <Second/>
      </div>
      <div className='w-full h-screen bg-purple-500 text-2xl flex justify-center content-between flex-col'>
        <h1 className='text-2xl font-bold text-white text-center'>Koi ni Happy birthday boss </h1>
        <img src={logo} alt="Loading..." className='w-52 h-52 mt-12 ml-12' />
      </div>
       <div className='w-full h-screen bg-purple-500 text-2xl flex justify-center content-center flex-col'>
        <h1 className='text-2xl font-bold text-white text-center mt-12'>Gift bhaja hai g qabool kro</h1>
        <img src={gift} alt="Loading..." className='w-52 h-52 mt-12 ml-12 rounded-2xl' />
      </div>
       <div className='w-full h-screen bg-purple-500 text-2xl flex justify-center content-center flex-col'>
        <h1 className='text-2xl font-bold text-white text-center mt-12'>DIjital jadooie jhapie</h1>
        <img src={hug} alt="Loading..." className='w-52 h-52 mt-12 ml-12 rounded-full' />
      </div>
        </div>
        </>
      )}
export default Ayesha;