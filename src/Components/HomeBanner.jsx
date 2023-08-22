import React from 'react'
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
    return (
        <section id="banner" className="mt-0 py-5">
            <div className='container'>
                <h4 className='title'>MID SEASON'S SALE</h4>
                <h1 className='title'>Autumn Collection <br /> UP TO 20% OFF</h1>
                <NavLink to='/shop' className="btn btn-primary p-2 mt-3 title">Shop Now</NavLink>
            </div>
        </section>
    )
}

export default HomeBanner