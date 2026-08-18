import React from 'react'
import Title from '../../common/Title'
import { Link } from 'react-router-dom'
import chandan from "../../../assets/images/products/chandan.png"
import gulab from "../../../assets/images/products/gulab.png"
import mogra from "../../../assets/images/products/mogra.png"

const MostLoved = () => {
    return (
        <section className='section section-bg'>

            <div className="wrapper">

                <Title title="Most-loved boxes." subTitle="Customer Favourites" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <Link to="/" className="group block">
                        <div className='aspect-square bg-neutral-100 rounded-sm overflow-hidden mb-4'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={chandan} alt="" />
                        </div>
                        <h3 className='font-cg italic text-[20px] text-neutral-900'>Sandalwood Reserve</h3>
                        <div class="flex items-center gap-2 mt-1"><p class="text-[14px] text-neutral-900 font-medium">₹340</p><p class="text-[13px] text-black/40 line-through">₹450</p></div>
                    </Link>

                    <Link to="/" className="group block">
                        <div className='aspect-square bg-neutral-100 rounded-sm overflow-hidden mb-4'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={gulab} alt="" />
                        </div>
                        <h3 className='font-cg italic text-[20px] text-neutral-900'>Sandalwood Reserve</h3>
                        <div class="flex items-center gap-2 mt-1"><p class="text-[14px] text-neutral-900 font-medium">₹340</p><p class="text-[13px] text-black/40 line-through">₹450</p></div>
                    </Link>

                    <Link to="/" className="group block">
                        <div className='aspect-square bg-neutral-100 rounded-sm overflow-hidden mb-4'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={mogra} alt="" />
                        </div>
                        <h3 className='font-cg italic text-[20px] text-neutral-900'>Sandalwood Reserve</h3>
                        <div class="flex items-center gap-2 mt-1"><p class="text-[14px] text-neutral-900 font-medium">₹340</p><p class="text-[13px] text-black/40 line-through">₹450</p></div>
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default MostLoved