import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UseContextProvider } from './Context.jsx' 
// wrap all app with provider

ReactDOM.createRoot(document.getElementById('root')).render(
  // hda melkasto ku istimali kara value ga
  <UseContextProvider> 
    <App />
  </UseContextProvider>,
)
