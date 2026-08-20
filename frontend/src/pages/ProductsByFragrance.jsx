import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsByFragrance = () => {

    const {fragrance} = useParams();
    console.log(fragrance);

    return (
        <section className='section'>

            <div className="wrapper">

                <h1>{fragrance}</h1>

            </div>

        </section>
    )
}

export default ProductsByFragrance