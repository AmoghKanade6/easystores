import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout')) {
            logout({ logoutParams: { returnTo: window.location.origin } })
        }
    }

    return (
        <>
            <div className="container-fluid nav_bg fixed-top">
                <div className="row nav-row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    <img src="https://img.icons8.com/3d-fluency/94/null/shop.png" className="sitelogo" alt="logo" />
                                    <span className='site-title'>Easy Stores</span>
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse justify-content-end"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav  mb-2 mb-lg-0 ">
                                        <li className="nav-item spacing">
                                            <NavLink
                                                activeclassname="menu_active"
                                                className="nav-link "
                                                to="/"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item spacing">
                                            <NavLink
                                                activeclassname="menu_active"
                                                className="nav-link"
                                                to="/about"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item spacing">
                                            <NavLink
                                                activeclassname="menu_active"
                                                className="nav-link"
                                                to="/shop"
                                            >
                                                Shop
                                            </NavLink>
                                        </li>
                                        <li className="nav-item spacing">
                                            <NavLink
                                                activeclassname="menu_active"
                                                className="nav-link"
                                                to="/mostviewedproducts"
                                            >
                                                Most Viewed Products
                                            </NavLink>
                                        </li>
                                        {
                                            isAuthenticated &&
                                            <li className="nav-item spacing">
                                                <NavLink
                                                    activeclassname="menu_active"
                                                    className="nav-link"
                                                    to="/profile"
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>
                                        }
                                        {
                                            isAuthenticated ?
                                                <li>
                                                    <button className='btn btn-primary mt-2 res btn-sm' onClick={() => handleLogout()}>
                                                        Log Out
                                                    </button>
                                                </li>
                                                :
                                                <li className="nav-item spacing">
                                                    <button className='btn btn-primary mt-2 res btn-sm' onClick={() => loginWithRedirect()}>Log In</button>
                                                </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar