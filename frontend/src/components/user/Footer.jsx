import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <footer className='border-t border-black/5'>

            <div className="wrapper py-14">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-10'>
                    <div className='col-span-2'>
                        <Link className='mb-5 block'>
                            <img src={logo} className='h-10' alt="" />
                        </Link>
                        <p className='text-[13px] max-w-[32ch] leading-relaxed text-black/55'>
                            Hand-rolled incense for the hour between light and dark. Made in small
                            batches, shipped across India.
                        </p>
                    </div>
                    <div>
                        <h4 className='text-[12px] tracking-[0.15em] uppercase text-black/40 mb-4'>Explore</h4>
                        <ul className='space-y-2.5 text-[14px] text-black/70'>
                            <li>
                                <Link to="/" class="hover:text-black">Fragrances</Link>
                            </li>
                            <li>
                                <Link to="/" class="hover:text-black">Best Sellers</Link>
                            </li>
                            <li>
                                <Link to="/" class="hover:text-black">Where to Buy</Link>
                            </li>
                            <li>
                                <Link to="/" class="hover:text-black">Wholesale</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[12px] tracking-[0.15em] uppercase text-black/40 mb-4'>Contact</h4>
                        <ul className='space-y-2.5 text-[14px] text-black/70'>
                            <li>
                                <Link>hello@jaydeep.example</Link>
                            </li>
                            <li>
                                <Link>+91 00000 00000</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-black/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <p className='text-[12px] text-black/40'>© 2026 Sandhya. All rights reserved.</p>
                    <p className='text-[12px] text-black/40'>Available on Amazon · Flipkart · Meesho</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer