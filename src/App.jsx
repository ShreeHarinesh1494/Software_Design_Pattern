import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebLayout from './layout/WebLayout'
import Home from './Pages/Web/Home'
import Login from './Pages/Web/Login'
import Register from './Pages/Web/Register'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<WebLayout />} >
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App