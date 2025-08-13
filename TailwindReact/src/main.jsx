import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Card from './Components/Card.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Card/>
     <Card/> */}
    
  </StrictMode>,
)
