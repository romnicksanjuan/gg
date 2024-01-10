import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Create from './components/create'
function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
