import React,{useContext} from 'react'
 // marka wa istimalosa wa ina so import gareysata use context
import { ColorContext } from './Context'


function App() {
  const data = useContext(ColorContext);
  return (
    <div>
      { data }
    </div>
  )
}

export default App