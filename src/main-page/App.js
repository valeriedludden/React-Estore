import React, { Component } from 'react';
import '../App.css';
import Nav from "./nav"
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Products from './products';
import ProductDetails from './product-details';
import Cart from './cart'
import { connect } from 'react-redux';
import {getCategories, getProducts} from "../store/actions";
import Footer from './footer'

class App extends Component {
    componentDidMount () {
        this.props.dispatch(getProducts());
        this.props.dispatch(getCategories());
    }


    render() {
    return (
        <Router>
            <Nav />
            <div>
                <Route exact path='/' component={Products} />
                <Route exact path='/products' component={Products} />
                <Route path='/products/:id' component={ProductDetails} />
                <Route path='/cart' component={Cart} />
            </div>
            <Footer/>
        </Router>
    );
  }
}



export default connect()(App);
