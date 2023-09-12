import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottles_container from './components/Bottles_container/Bottles_container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Bottles_container></Bottles_container>
  
    </div>
  )
}

export default App
