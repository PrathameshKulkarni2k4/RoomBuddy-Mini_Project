import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout01() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout01
