import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './pages/AllContact'
import MainLayout from './pages/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='text-xl font-extrabold'>Vite + React</h1>
    <MainLayout/>
    </>
  )
}

export default App
