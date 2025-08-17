
import './index.css'
import Lottieclock from './components/Lottie'
import  {InputBox}  from './components';
import useCurrencyinfo from './customhook/useCurrencyinfo'
import { useState } from 'react';
function App() {
  const [amount,setamount]=useState(0)
const  [from, setfrom]= useState('usd');
const  [to , setto]= useState('pkr');
  const [convertedamount,setconvertedamount]=useState(0)

// using my custom hook
const Currencyinfo=useCurrencyinfo(from)
// convertion of data into option and values
 const options=Object.keys(Currencyinfo)
 // functionality of swaping
 const swap=()=>{
  setfrom(to)
  setto(from)
  setamount(convertedamount)
  setconvertedamount(amount)
 }
// button convert 
const convert=()=> {
  console.log('i am being clicked')
  setconvertedamount(amount * Currencyinfo[to])
}
  return <>
   <div style={{ width: '100%', height: '100vh', backgroundImage: 
    'URL(https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg?t=st=1755268046~exp=1755271646~hmac=0155bc4a196105fab02ed94a10dfb235af17071f8b6c692714fa92a5f4e5a7b0&w=1060 )',
     backgroundRepeat:'no-repeat', backgroundSize:'cover',
    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          
          <Lottieclock/>
    <div className='w-lg h-80 bg-transparent border-amber-700 border-2 rounded-md flex content-center justify-center'> 
                     <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 m-4.5">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                OnCurrencyChange={()=>{setamount(amount)}}
                                selectCurrency={from}
                                OnamountChange={(amount)=>{setamount(amount)}}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                  amount={convertedamount}
                                CurrencyOptions={options}
                                OnCurrencyChange={(currency)=>{setto(currency)}}
                                selectCurrency={to}
                                amountdisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        onClick={convert}
                        >
                            Convert {from.toLocaleUpperCase()} to {to.toLocaleLowerCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    </div>
  </>;
};

export default App
