import React from 'react'

import './App.css'
import Login from './components/Login'
import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'

function App() {


  return (
   <>
    {/* <Navbar/> */}
    <Outlet/>
   </>
  )
}

export default App
