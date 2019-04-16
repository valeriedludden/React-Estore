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
            <h6> Price ${props.price}</h6>
            <div>Quantity {props.count}
                    <i className="fas fa-plus-square" onClick={(e)=> props.dispatch(addQuanity(props.id))}></i>
                    <i className="fas fa-minus-square" onClick={(e)=> props.dispatch(decreaseQuantity(props.id))}></i>
            </div>

            <div>
                <button type="button" className="btn btn-info" onClick={(e)=> props.dispatch(removeFromCart(props.id))}>Remove from Cart</button>
            </div>

            <Link to={`/products/${props.id}`}>See Product Details</Link>



        </div>
    </div>)
}

export default connect()(CartItem)