import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const FeatureCard = (props) => {

    const { isAuthenticated } = useAuth0();
    const { id, title, price, thumbnail, viewCount } = props.data

    const handleClick = () => {
        if (isAuthenticated) {
            axios.patch(`http://localhost:4000/products/${id}`, { viewCount: viewCount + 1 })
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="product text-center col-lg-3 col-md-6 col-12">
            <img className="img-fluid" src={thumbnail} alt="thumbnail" key={id} />
            <h5 className="p-name mt-4">{title}</h5>
            <h4 className="p-price">${price}</h4>
            <NavLink onClick={handleClick} to={`/shop/details/${id}`}>  <button className="buy-btn btn btn-warning">Buy Now</button> </NavLink>
        </div>
    )
}

export default FeatureCard