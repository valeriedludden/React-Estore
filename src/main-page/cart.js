import React from 'react';
import {connect} from "react-redux";

const Cart = () => {
    return (
        <div>
            Cart
        </div>)

};

function MapStatetoProps (state) {
    return {
        cart : state.cart
    }
}

export default connect(MapStatetoProps)(Cart);