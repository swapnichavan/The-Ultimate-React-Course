import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import FlashCards from './FlashCards/FlashCards.jsx'
import Counter from './Counter2/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FlashCards /> */}
    <App />
    {/* <Counter /> */}
  </StrictMode>
)
