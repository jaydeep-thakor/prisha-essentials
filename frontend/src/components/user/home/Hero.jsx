import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='section'>

            <div className='wrapper text-center'>

                <div className='w-10 h-px bg-primary mx-auto mb-7'></div>
                <span className='text-[11px] tracking-[0.3em] uppercase text-black/45 block mb-6'>Hand-Rolled · Small Batch</span>
                <h1 className='font-cg text-[38px] sm:text-[52px] md:text-[62pxs] leading-[1.12] max-w-[17ch] mx-auto mb-6'>Incense, made the <span className='italic text-primary'>slow</span> way.</h1>
                <p className='text-[15px] text-black/55 leading-relaxed max-w-[40ch] mx-auto mb-10'>
                    Real sandalwood, resin and flower, hand-rolled in small batches
                    and shipped across India.
                </p>
                <Link to="/" className='inline-block bg-primary hover:hover-bg-primary text-white text-sm px-9 py-3.5 rounded-full transitions-colors'>Explore Fragrances</Link>
                <div className='w-10 h-px bg-primary mx-auto mt-14'></div>
            </div>

        </section>
    )
}

export default Hero