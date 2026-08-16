import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserLayout from '../layout/UserLayout'
import Home from '../pages/user/Home'

const AppRoutes = () => {
    return (

        <Routes>

            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
            </Route>

        </Routes>

    )
}

export default AppRoutes