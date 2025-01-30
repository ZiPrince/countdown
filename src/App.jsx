import { useState } from 'react'
import Timer from './components/Timer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
		Neat Lil Countdown Tool
      </h1>
	  <div>
		<Timer />
	  </div>

    </>
  )
}

export default App
