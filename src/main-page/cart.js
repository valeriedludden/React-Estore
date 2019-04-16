import React from 'react';
import {connect} from "react-redux";
import CartItem from "./cart-item";
import {NavLink} from "react-router-dom";
import {addToCart} from "../store/actions";

const Cart = (props) => {

    if (props.cart.length === 0) {
        return (<div className='emptyCart'>
                No Items in Cart
                <NavLink to='/products' className="nav-item nav-link shopping-link">Return to Shopping Page</NavLink>
            </div>
        )
    } else
        return (<div>
            <h1 className='cart-header'>Shopping Cart <i className="fas fa-shopping-cart"></i></h1>
            <div className="productContainer">
                {
                    props.cart &&
                    props.cart.map(item => <CartItem key={item.product.id} count={item.count} {...item.product}/>)
                }
            </div>
            {/*<button type="button" className="btn btn-info" onClick={(e)=> props.dispatch('CLEAR_CART')}>Confirm Purchase</button>*/}

        </div>)

};

function MapStatetoProps (state) {
    return {
        cart : state.cart
    }
}

export default connect(MapStatetoProps)(Cart);