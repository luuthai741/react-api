
import * as types from '../constaints/ActionTypes'

let initialState = {};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.product;
            return { ...state }
        default:
            return { ...state }
    }
}

export default reducer