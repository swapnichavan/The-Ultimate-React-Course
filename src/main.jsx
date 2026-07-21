import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from '../src/Accordion/index1.jsx'
// import App from '../src/steps/index.jsx'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FlashCards /> */}
    {/* <Counter /> */}
  </StrictMode>
)
