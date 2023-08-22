import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams()
    console.log(id);
    const [productData, setProductsData] = useState({})
    const { title, description, price, brand, quantity, category, thumbnail, viewCount } = productData

    useEffect(() => {
        axios.get('http://localhost:4000/products/' + id)
            .then((resp) => {
                setProductsData(resp.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <>
            <section className="container sproduct my-5 pt-5">
                <div className="row mt-4">
                    <div className="col-lg-5 col-md-12 col-12">
                        <img className="img-fluid ms-5 product-img pb-1" src={thumbnail} alt="thumbnail" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 ">
                        <h6>Shop /<span className='cat'> {category}</span> </h6>
                        <h3 className="py-3">{title}</h3>
                        <h2>${price}</h2>
                        <h5 className='pt-4 fw-bold'><span className='fw-small'>Brand : </span>{brand}</h5>
                        <p className='mt-3 fw-bold text-success'>In stock : {quantity}</p>
                        {category === 'Clothing' ?
                            <select className="my-4">
                                <option>Select Size</option>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>Small</option>
                                <option>Large</option>
                            </select> :
                            <select className="my-4">
                                <option>Select Colors</option>
                                <option>Red</option>
                                <option>Yellow</option>
                            </select>
                        }
                        <input type="number" defaultValue='1' />
                        <button className="btn btn-warning p-2 mb-1">Add To Cart</button>
                        <h4 className="mt-5 mb-4">Product Details</h4>
                        <span className='pro-desc'>{description}</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
