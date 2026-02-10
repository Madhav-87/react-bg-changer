import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState('red')
  function changeColor(color){
    setColor(color)
  }

  return (
    <div className={`min-height-width main-panel ${color}`}>
      <div className='title-section'><span className='title-txt'>Change Background Color PlayGround</span></div>
      <div className='button-section'>
        <button type='button' onClick={()=>{changeColor('red')}}>Red</button>
        <button type='button' onClick={()=>{changeColor('green')}}>Green</button>
        <button type='button' onClick={()=>{changeColor('yellow')}}>Yellow</button>
      </div>
    </div>
  )
}

export default App
