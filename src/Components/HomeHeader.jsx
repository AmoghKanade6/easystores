import React from 'react'
import banner from '../images/banner.png'
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-10 mx-auto ">
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h5 className='desc mt-3'>NEW ARRIVALS</h5><br />
                                    <h1 className="desc">
                                        Best Price This Year
                                        <br />
                                        Buy Your<strong className="brand-name">  Favourite </strong>
                                        One
                                    </h1>
                                    <h4 className="my-3 desc">
                                        Best affordable price and comfy products
                                    </h4>
                                    <div className="mt-3">
                                        <NavLink to="/shop" className="btn-get-started">
                                            Shop Now
                                        </NavLink>
                                    </div>
                                </div>
                                <div className=" col-lg-4 col-md-4 order-2 order-lg-2 header-img">
                                    <img src={banner} className="img-fluid animated" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHeader