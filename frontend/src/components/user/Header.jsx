import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='bg-[#FBF8F2]/95 backdrop-blur border-b border-black/5 sticky top-0 z-20'>

            <div className='wrapper flex items-center justify-between py-3.5 relative'>

                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img className='h-10' src={logo} alt="Logo" />
                </Link>

                <nav className='hidden md:flex items-center gap-7 text-[11px] tracking-[0.15em] uppercase text-black/55'>
                    <Link to="/" className='hover:text-primary transition-colors'>
                        Fragrances
                    </Link>

                    <Link to="/" className='hover:text-primary transition-colors'>
                        Best Sellers
                    </Link>

                    <Link to="/" className='hover:text-primary transition-colors'>
                        Where to Buy
                    </Link>

                    <Link to="/" className='hover:text-primary transition-colors'>
                        Wholesale
                    </Link>
                </nav>

                <div className='flex items-center gap-3'>

                    <button className='text-[11px] tracking-[0.08em] uppercase text-white bg-primary px-4 py-2 rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap'>
                        Bulk Order
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='md:hidden flex flex-col gap-1.5 p-2'
                        aria-label='Toggle menu'
                    >
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />

                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                                }`}
                        />

                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>

                </div>

                <div
                    className={`md:hidden absolute left-0 right-0 top-full bg-[#FBF8F2] border-t border-black/5 shadow-lg transition-all duration-300 ${menuOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                >
                    <nav className='wrapper flex flex-col py-4'>

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className='py-3 text-[11px] tracking-[0.15em] uppercase text-black/60 hover:text-primary transition-colors'
                        >
                            Fragrances
                        </Link>

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className='py-3 text-[11px] tracking-[0.15em] uppercase text-black/60 hover:text-primary transition-colors'
                        >
                            Best Sellers
                        </Link>

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className='py-3 text-[11px] tracking-[0.15em] uppercase text-black/60 hover:text-primary transition-colors'
                        >
                            Where to Buy
                        </Link>

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className='py-3 text-[11px] tracking-[0.15em] uppercase text-black/60 hover:text-primary transition-colors'
                        >
                            Wholesale
                        </Link>

                    </nav>
                </div>

            </div>

        </header>
    )
}

export default Header