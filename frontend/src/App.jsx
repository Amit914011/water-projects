import React from 'react'

import './App.css'
import Login from './components/Login'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
   <>
   <div className='fixed top-0 w-full z-[99999] bg-white'> <Navbar/></div>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
