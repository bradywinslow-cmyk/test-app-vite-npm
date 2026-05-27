import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { sprig } from '@sprig-technologies/sprig-browser';

export const Sprig = sprig.configure({
  environmentId: window.location.host === 'localhost:5173' ? 'Fo7CM2CT4uiD' : 'iUPkMKvu11OT'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
