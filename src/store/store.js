import React from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {getProducts} from './actions'


const reducer = combineReducers({
    products : productsReducer,
    categories : categoriesReducer,
    cart : cartReducer,
    user : userReducer
});

function productsReducer (state = [], action) {
    if (action.type === 'FETCH_PRODUCTS') {

        return action.payload;
    }
    return state;
}

function categoriesReducer (state = [], action) {
    if (action.type === 'FETCH_CATEGORIES') {
        return action.payload;
    }
    return state;
}


function cartReducer (state = [], action) {
    return state;
}

function userReducer (state = [], action) {
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(function () {
    console.log(store.getState())
});
// store.dispatch(getProducts());

export default store