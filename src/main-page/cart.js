import React from 'react';
import {connect} from "react-redux";
import CartItem from "./cart-item";

const Cart = (props) => {
    return (<div>
        {
            props.cart &&
            props.cart.map(item => <CartItem key={item.product.id} count={item.count} {...item.product}/>)
        }
            </div>)

};

function MapStatetoProps (state) {
    return {
        cart : state.cart
    }
}

export default connect(MapStatetoProps)(Cart);