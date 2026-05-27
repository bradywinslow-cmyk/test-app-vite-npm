import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { sprig } from '@sprig-technologies/sprig-browser';

export const Sprig = sprig.configure({
  environmentId: 'iUPkMKvu11OT'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
