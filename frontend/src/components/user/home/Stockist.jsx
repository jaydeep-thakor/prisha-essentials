import React from 'react'
import Title from '../../common/Title'
import amazon from "../../../assets/images/platforms/amazon.png"
import flipkart from "../../../assets/images/platforms/flipkart.png"
import meesho from "../../../assets/images/platforms/meesho.png"
import { Link } from 'react-router-dom'

const Stockist = () => {
  return (
    <section className='section'>

      <div className="wrapper">
        <Title title="Where to Buy" subTitle="Order through our marketplace listings." />

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>

          <Link to="" className='flex flex-col items-center justify-center text-center rounded-2xl border border-black/10 px-8 py-10 hover:border-black/20 hover:shadow-md transition-all'>
            <img src={amazon} alt="amazon" className='h-9 w-auto object-contain mb-6'/>
            <span className='text-[11px] tracking-[0.12em] uppercase text-black/50'>Visit Store</span>
          </Link>

          <Link to="" className='flex flex-col items-center justify-center text-center rounded-2xl border border-black/10 px-8 py-10 hover:border-black/20 hover:shadow-md transition-all'>
            <img src={flipkart} alt="flipkart" className='h-9 w-auto object-contain mb-6'/>
            <span className='text-[11px] tracking-[0.12em] uppercase text-black/50'>Visit Store</span>
          </Link>

          <Link to="" className='flex flex-col items-center justify-center text-center rounded-2xl border border-black/10 px-8 py-10 hover:border-black/20 hover:shadow-md transition-all'>
            <img src={meesho} alt="meesho" className='h-7 w-auto object-contain mb-6'/>
            <span className='text-[11px] tracking-[0.12em] uppercase text-black/50'>Visit Store</span>
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Stockist