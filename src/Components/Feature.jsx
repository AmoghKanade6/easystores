import React, { useEffect } from 'react'
import FeatureCard from './FeatureCard'
import UpdatedComponent from './HomeHOC'

const Feature = ({ productData, fetchProducts }) => {

    useEffect(() => {
        fetchProducts('http://localhost:4000/products?_sort&category=Electronics')
    }, [])

    return (
        <>
            <section id="featured" className="mt-5">
                <div className="cointainer text-center mt-2 pt-5 pb-1">
                    <h3 className='fw-bold'>Electronics</h3>
                    <hr className=" mx-auto" />
                    <p>Here you can check out our new electronic products with fair price on easy stores</p>
                </div>
                <div className="row mx-auto cointainer-fluid p-5">
                    {productData &&
                        productData.slice(0, 4).map((item, index) => (
                            <FeatureCard data-testid='ele' data={item} key={index} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default UpdatedComponent(Feature)