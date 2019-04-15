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

    if(action.type === 'ADD_CART'){
        let oldCart = state;
        console.log(oldCart)
        console.log(action.item.id)
        oldCart.forEach( p => {
            console.log(p)
            if(p.item.id === action.item.id){
                p.item.count++
                console.log('add one more')
            }
            else
            {
                let item = {
                    count: 1,
                    item: action.item
                }
            oldCart.push(item)
                console.log('add to cart')
            }
        })

     return oldCart
    }
    else
    {
        return state;
    }
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