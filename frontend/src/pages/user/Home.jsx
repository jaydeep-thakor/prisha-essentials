import React from 'react'
import Hero from '../../components/user/home/Hero'
import Wholesale from '../../components/user/home/Wholesale'
import ShopByFragrance from '../../components/user/home/ShopByFragrance'
import MostLoved from '../../components/user/home/MostLoved'

const Home = () => {
    return (
        <>
            <Hero />
            <ShopByFragrance />
            <MostLoved />
            <Wholesale />
        </>
    )
}

export default Home