import React from 'react';
import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='nav'>
            <NavLink to='/' className="navbar-brand" >E Store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to='/products' className="nav-item nav-link" >Shop</NavLink>
                    <NavLink to='/productDetails' className="nav-item nav-link" >Product Details</NavLink>
                    <NavLink to='/cart' className="nav-item nav-link" >Cart</NavLink>

                </div>
            </div>
        </nav>
    )
}

export default Nav