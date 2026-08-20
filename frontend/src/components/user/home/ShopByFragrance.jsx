import React from 'react'
import sandalwood from "../../../assets/images/fragrance/sandalwood.png"
import jasmine from "../../../assets/images/fragrance/jasmine.png"
import rose from "../../../assets/images/fragrance/rose.png"
import { Link } from 'react-router-dom'
import Title from '../../common/Title'

const ShopByFragrance = () => {
    return (
        <section className='section pt-0!'>

            <div className="wrapper">

                <Title title="Fragrance" subTitle="Shop by fragrance." />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 md:h-140'>

                    <Link to="/fragrance/sandalwood" className='group relative text-left overflow-hidden rounded-sm md:row-span-2 h-72 md:h-full cursor-pointer'>
                        <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase text-white/65">01</span>
                        <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent z-10'></div>
                        <img className='absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' src={sandalwood} alt="" />
                        <div className="relative z-10 h-full flex flex-col justify-end px-6 py-4 md:px-8 md:py-4">
                            <h3 className="font-cg italic text-white text-[30px] md:text-[36px] mt-1">Sandalwood</h3>
                        </div>
                    </Link>

                    <Link to="/fragrance/jasmine" className='group relative text-left overflow-hidden rounded-sm h-56 md:h-auto cursor-pointer'>
                        <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase text-white/65">02</span>
                        <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent z-10'></div>
                        <img className='absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' src={jasmine} alt="" />
                        <div className="relative z-10 h-full flex flex-col justify-end px-6 py-4 md:px-8 md:py-4">
                            <h3 className="font-cg italic text-white text-[30px] md:text-[36px] mt-1">Jasmine</h3>
                        </div>
                    </Link>

                    <Link to="/fragrance/rose" className='group relative text-left overflow-hidden rounded-sm h-56 md:h-auto cursor-pointer'>
                        <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase text-white/65">03</span>
                        <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent z-10'></div>
                        <img className='absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' src={rose} alt="" />
                        <div className="relative z-10 h-full flex flex-col justify-end px-6 py-4 md:px-8 md:py-4">
                            <h3 className="font-cg italic text-white text-[30px] md:text-[36px] mt-1">Rose</h3>
                        </div>
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default ShopByFragrance
