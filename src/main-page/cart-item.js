import React from 'react'
import {Link} from 'react-router-dom'
import {removeFromCart, addQuanity, decreaseQuantity} from "../store/actions";
import {connect} from "react-redux";

const CartItem  = (props) => {

    return (<div className="card">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <div>Quantity {props.count}</div>
            <Link to={`/products/${props.id}`}>See Product Details</Link>
            <button type="button" className="btn btn-info" onClick={(e)=> props.dispatch(removeFromCart(props.id))}>Remove from Cart</button>
            <button type="button" className="btn btn-info" onClick={(e)=> props.dispatch(addQuanity(props.id))}>add one</button>
            <button type="button" className="btn btn-info" onClick={(e)=> props.dispatch(decreaseQuantity(props.id))}>delete one</button>
        </div>
    </div>)
}

export default connect()(CartItem)