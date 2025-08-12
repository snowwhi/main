import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// creating a random Function to confirm everything is Function
function random() {
  return(
    <>
    <h1>Creating Random</h1>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {random()}
  </StrictMode>,
)
