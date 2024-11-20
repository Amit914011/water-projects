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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/card' element={<CardDetails/>}/>
      <Route path='/faq' element={<Faqs/>}/>
      <Route path='/previous' element={<PreviousLiveDraws/>}/>
      <Route path='/support' element={<SupportInitiatives/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
