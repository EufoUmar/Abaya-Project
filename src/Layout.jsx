import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout