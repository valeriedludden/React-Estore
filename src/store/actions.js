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
