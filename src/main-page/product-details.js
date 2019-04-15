import React from 'react';
import connect from "react-redux/es/connect/connect";

class ProductDetails extends React.Component {

    render () {
        let productId = this.props.match.params.id;
        let item = this.props.products.filter(i => {
            return i.id === Number(productId);
        });


        if (item.length) {

            item = item[0];

            return (
                <div className="card">
                    <img src={item.img} className="card-img-top" alt="..."/>
                    <div className="card-body"/>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            )
        }
        else {
            return (<div>Product Details Not Available</div>)
        }

    }
}

function MapStatetoProps (state) {
    return{
        products : state.products
    }
}

export default connect(MapStatetoProps)(ProductDetails);