
import * as types from '../constaints/ActionTypes'

let initialState = [];

let findIndex = (products, id) => {
    let index = -1;
    products.forEach((product, i) => {
        if (product.id === id) {
            index = i;
        }
    });
    return index;
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        case types.DELETE_PRODUCT:
            let index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state]
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case types.UPDATE_PRODUCT:
            let i = findIndex(state, action.product.id);
            state[i] = action.product;
            return [...state]
        default:
            return [...state];
    }
}

export default reducer