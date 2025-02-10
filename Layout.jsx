import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
<Navbar/>

<Outlet/>

<Footer/>
    </>
  )
}

export default Layout
