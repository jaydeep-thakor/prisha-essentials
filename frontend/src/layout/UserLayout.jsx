import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'

const UserLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-1'>
            <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout