import React from 'react';
import connect from "react-redux/es/connect/connect";
import {addToCart} from "../store/actions";
import {Link} from "react-router-dom";

class ProductDetails extends React.Component {
    addToCart = (id) => {
        this.props.dispatch({
            type : 'ADD_CART',
            item : id
        })
    }

    render () {
        let productId = this.props.match.params.id;
        let item = this.props.products.filter(i => {
            return i.id === Number(productId);
        });


        if (item.length) {

            item = item[0];

            return (
                <div className='shopping-link'>
                    <div className="card">
                        <img src={item.img} className="card-img-top" alt="..."/>
                        <div className="card-body"/>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <h6>Price ${item.price}</h6>
                        <h6>Rating {item.rating}</h6>
                        <button type="button" className="btn btn-info" onClick={(e)=> this.props.dispatch(addToCart(item.id))}>Add to Cart</button>
                    </div>
                    <Link  to={`/products/`}>Back to All Products</Link>
                </div>
            )
        } else {
            return (<div>Product Details Not Available</div>)
        }

    }
}

function MapStatetoProps (state) {
    return {
        products : state.products
    }
}

export default connect(MapStatetoProps)(ProductDetails);