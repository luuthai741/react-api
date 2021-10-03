import * as types from '../constaints/ActionTypes'
import fetchAPI from '../../utils/fetchAPI'

export const fetchProducts = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const dispatchProducts = () => {
    return dispatch => {
        fetchAPI("GET", "/products", null).then(res => {
            dispatch(fetchProducts(res.data));
        })
    }
}

export const deleteProduct = id => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const dispatchDeleteProduct = (id) => {
    return dispatch => {
        fetchAPI("DELETE", `/products/${id}`, null).then(res => {
            dispatch(deleteProduct(id));
        })
    }
}

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const dispatchAddProduct = product => {
    return dispatch => {
        fetchAPI("POST", `/products`, product).then(res => {
            console.log(res);
            dispatch(addProduct(res.data));
        })
    }
}

export const updateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const dispatchUpdateProduct = (product) => {
    return dispatch => {
        console.log(product.id);
        fetchAPI("PUT", `/products/${product.id}`, product).then(res => {
            dispatch(updateProduct(res.data))
        })
    }
}

export const fetchProduct = product => {
    return {
        type: types.FETCH_PRODUCT,
        product
    }
}

export const dispatchFetchProduct = id => {
    return dispatch => {
        fetchAPI("GET", `/products/${id}`, null).then(res => {
            // console.log(res.data);
            dispatch(fetchProduct(res.data))
        })
    }
}