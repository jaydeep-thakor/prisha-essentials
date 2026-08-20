import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserLayout from '../layout/UserLayout'
import Home from '../pages/user/Home'
import ProductsByFragrance from '../pages/ProductsByFragrance'

const AppRoutes = () => {
    return (

        <Routes>

            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path='fragrance/:fragrance' element={<ProductsByFragrance />} />
            </Route>

        </Routes>

    )
}

export default AppRoutes