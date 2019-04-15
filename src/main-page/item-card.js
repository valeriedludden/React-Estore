import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard  = (props) => {
 const product = props.product;

   return (<div className="card">
        <img src={product.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button type="button" className="btn btn-info" onClick={(e)=> props.addToCart(product)}>Add to Cart</button>
                <Link to={`/products/${product.id}`}>See Product Details</Link>

            </div>
    </div>)
}

export default ItemCard