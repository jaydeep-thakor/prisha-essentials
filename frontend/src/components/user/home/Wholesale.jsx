import React from 'react'
import { Link } from 'react-router-dom'

const Wholesale = () => {
    return (
        <section className='section bg-primary'>

            <div className='wrapper'>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>

                    <div className='lg:col-span-7'>
                        <span className='text-[11px] tracking-[0.25em] uppercase text-white/45 block mb-4'>For Retailers & Gifting</span>
                        <h2 className='font-cg text-[30px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white mb-5'>Buying in bulk? Let's talk.</h2>
                        <p className='text-[15px] text-white/60 leading-relaxed max-w-[46ch]'>
                            We work with boutiques, gift curators and wellness studios on wholesale
                            pricing and custom-labelled boxes. Reach out with your quantity and
                            we'll get back within a day.
                        </p>
                    </div>

                    <div className='lg:col-span-5 bg-white/5 border border-white/15 rounded-md p-7 md:p-8'>

                        <div className='space-y-5'>
                            <div>
                                <span className='text-[10px] tracking-[0.2em] uppercase text-white/40 block'>Email</span>
                                <Link to='/' className="text-white text-[16px]">hello@jaydeep.example</Link>
                            </div>
                            <div>
                                <span className='text-[10px] tracking-[0.2em] uppercase text-white/40 block'>Phone / WhatsApp</span>
                                <Link to='/' className="text-white text-[16px]">+91 00000 00000</Link>
                            </div>
                            <Link className='mt-2 inline-block w-full text-center bg-white text-primary text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity'>Send a Wholesale Enquiry</Link>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Wholesale