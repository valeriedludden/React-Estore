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

    if (action.type === 'ADD_CART') {

            if(state.find( i => i.product.id === action.item.product.id))
                return state.map(
                    i => (
                        i.product.id === action.item.product.id
                            ? { count: i.count++, ...i }
                            : i
                    )
                )
            else
                return [...state, action.item]

    }
    else if (action.type === 'REMOVE_FROM_CART'){
        return state.filter( i => i.product.id !== action.id)
}
    else if (action.type === 'ADD_MORE'){
        return state.map(
            i => (
                i.product.id === action.id
                    ? { count: i.count++, ...i }
                    : i
            )
        )
    }
    else if (action.type === 'REMOVE_ONE'){
        return state.map(
            i => (
                i.product.id === action.id && i.count > 1
                    ? { count: i.count--, ...i }
                    : i
            )
        )
    }
    else if(action.type === 'CLEAR_CART'){
        return []
    }


    else {
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