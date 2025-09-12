import './index.css' 
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/ZEMACU'>
    <App />
  </BrowserRouter>
)
