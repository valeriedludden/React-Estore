import React from 'react'
import {Link} from 'react-router-dom'
import{addToCart} from '../store/actions'
import {connect} from "react-redux";

const ItemCard  = (props) => {
 const product = props.product;


   return (<div className="card">
        <img src={product.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h6>${product.price}</h6>
                <h6>Product Rating {product.rating}</h6>
                <div className='links'>
                    <div className='linksDiv'>
                        <button type="button" className="btn btn-info" onClick={(e)=> props.dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                    <div>
                        <Link to={`/products/${product.id}`}>See Product Details</Link>
                    </div>
                </div>

            </div>
    </div>)
}

export default connect()(ItemCard)