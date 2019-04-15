import React from 'react';
import {connect} from "react-redux";
import ItemCard from "./item-card";
import SearchBar from "./search-bar"
import * as _ from 'lodash'


class Products extends React.Component {
    state = {
        categories : ''
    };

    sort = (category) => {
        this.setState({
            categories: category
        })
    };
    addToCart = (id) => {
        this.props.dispatch({
            type: 'ADD_CART',
            item: id
        })
    }

    render () {
        let product;

        if(this.state.categories === '') {
            product = this.props.products.map(product => {
                return <ItemCard key={product.id} product={product} addToCart={this.addToCart}/>
            });
        }
        else {
            product = _.filter(this.props.products, {'category': this.state.categories}).map(product =>{
                return <ItemCard key={product.id} product={product}/>
            });
            console.log(this.state.categories)
        }

        if (this.props.products.length) {
            return (
                <div className="productContainer">
                    <SearchBar sort={this.sort}/>
                    {product}
                </div>
            )
        } else
            return <div> No products available </div>
    }
}

function MapStatetoProps (state) {
    return {
        products : state.products
    }
}

export default connect(MapStatetoProps)(Products);