import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import CardDetails from './components/howToWithdraw/CardDetails.jsx'
import Faqs from './components/Faqs.jsx'
import PreviousLiveDraws from './components/PreviousLiveDraws.jsx'
import SupportInitiatives from './components/SupportInitiatives.jsx'
import Home from './components/Home.jsx'
import Millionaires from './components/Millionaires.jsx'
import Tripple from './components/Tripple.jsx'
import HallofFame from './components/HallofFame.jsx'
import FraudAwareness from './components/FraudAwareness.jsx'
import About from './components/About.jsx'
import Draw from './components/Draw.jsx'
import Community from './components/Community.jsx'
import Blogs from './components/Blogs.jsx'
import Legal from './components/Legal.jsx'
import Error404 from './components/Error404.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/draw' element={<Draw/>}/>
      <Route path='/how-to-withdraw' element={<CardDetails/>}/>
      <Route path='/faq' element={<Faqs/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/previous-live-draw' element={<PreviousLiveDraws/>}/>
      <Route path='/mahzooz-millionaires' element={<Millionaires/>}/>
      <Route path='/tripple' element={<Tripple/>}/>
      <Route path='/hall-of-fame' element={<HallofFame/>}/>
      <Route path='/support' element={<SupportInitiatives/>}/>
      <Route path='/fraud-awareness' element={<FraudAwareness/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/legal' element={<Legal/>}/>
      <Route path='/*' element={<Error404/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
