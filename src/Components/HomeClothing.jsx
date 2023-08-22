import React, { useEffect } from 'react'
import FeatureCard from './FeatureCard'
import UpdatedComponent from './HomeHOC'

const HomeClothing = ({ productData, fetchProducts }) => {

    useEffect(() => {
        fetchProducts('http://localhost:4000/products?_sort&category=Clothing')
    }, [])

    return (
        <>
            <section id="featuredc" className="mt-5">
                <div className="cointainer text-center mt-2 pt-5 pb-1">
                    <h3 className='fw-bold'>Clothing</h3>
                    <hr className=" mx-auto" />
                    <p>Here you can check out our new products with fair price on easy stores</p>
                </div>
                <div className="row mx-auto cointainer-fluid p-5">
                    {productData &&
                        productData.slice(0, 4).map((item, index) => (
                            <FeatureCard data-testid='home' data={item} key={index} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default UpdatedComponent(HomeClothing)