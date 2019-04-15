export function getProducts () {
    return function (dispatch) {
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
            .then(res => res.json())
            .then(data => {
                    dispatch({
                        type : 'FETCH_PRODUCTS',
                        payload : data
                    })
                }
            )
    }
}

export function getCategories () {
    return function (dispatch) {
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/categories')
            .then(res => res.json())
            .then(data => {
                    dispatch({
                        type : 'FETCH_CATEGORIES',
                        payload : data
                    })
                }
            )
    }
}
export function addToCart(product){
    return{
        type: 'ADD_CART',
        item: { product, count: 1}
    }
}
export function removeFromCart(id){
    return {
        type: 'REMOVE_FROM_CART',
        id: id
    }
}
export function addQuanity(id){
    return {
        type: 'ADD_MORE',
        id: id
    }
}
export function decreaseQuantity(id){
    return {
        type: 'REMOVE_ONE',
        id: id
    }
}
