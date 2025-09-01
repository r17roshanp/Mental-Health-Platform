import React from 'react'
import {React, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes path='/' element={<Home/>} />

    </div>
  )
}

export default App
