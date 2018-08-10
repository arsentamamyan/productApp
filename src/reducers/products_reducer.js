export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, allProducts: action.payload}
        case 'GET_PRODUCT_DETAILS':
            return {...state, selected: action.payload}
        case 'CLEAR_SELECTED_PRODUCT':
            return {...state, selected: action.payload}
        case 'UPDATE_PRODUCT':
            return {state, success:action.payload}
        case 'DELETE_PRODUCT':
            return state;
        default:
            return state;
    }
}