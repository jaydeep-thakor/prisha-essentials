import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-[#FBF8F2]/95 backdrop-blur border-b border-black/10 sticky top-0 z-20'>

            <div className='wrapper flex items-center justify-between py-3.5'>

                <Link to="/">Logo</Link>

                <nav className='hidden md:flex items-center gap-7 text-[11px] tracking-[0.15em] uppercase text-black/55'>
                    <Link to="/" className='hover:text-primary transition-colors'>Fragrances</Link>
                    <Link to="/" className='hover:text-primary transition-colors'>Best Sellers</Link>
                    <Link to="/" className='hover:text-primary transition-colors'>Where to Buy</Link>
                    <Link to="/" className='hover:text-primary transition-colors'>Wholesale</Link>
                </nav>

                <button className='text-[11px] tracking-[0.08em] uppercase text-white bg-secondary px-4 py-2 rounded-full hover:hover-bg-secondary transition-colors whitespace-nowrap'>Bulk Order</button>

            </div>

        </header>
    )
}

export default Header