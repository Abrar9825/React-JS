import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterButton from './CounterExample/counter-button'
import CounterValue from './CounterExample/counter-value'

function App() {

  return (
    <div>
      <h1>Redux toolkit</h1>
      <CounterButton/>
      <CounterValue/>
    </div>
  )
}

export default App
