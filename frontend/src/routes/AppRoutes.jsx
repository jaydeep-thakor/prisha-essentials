import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserLayout from '../layout/UserLayout'
import Home from '../pages/user/Home'
import ProductsByFragrance from '../pages/ProductsByFragrance'
import PrivacyPolicy from '../pages/legal/PrivacyPolicy'
import Disclaimer from '../pages/legal/Disclaimer'
import TermsOfUse from '../pages/legal/TermsOfUse'

const AppRoutes = () => {
    return (

        <Routes>

            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path='fragrance/:fragrance' element={<ProductsByFragrance />} />
                
                
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/disclaimer' element={<Disclaimer />} />
                <Route path='/terms-of-use' element={<TermsOfUse />} />



            </Route>

        </Routes>

    )
}

export default AppRoutes