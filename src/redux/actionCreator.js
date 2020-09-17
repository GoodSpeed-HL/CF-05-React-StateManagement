import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART} from './actionTypes';

export const addProduct = productId => ({
    type: ADD_PRODUCT_TO_CART,
    payload: {
        productId
    }
})

export const removeProduct = productId => ({
    type: REMOVE_PRODUCT_TO_CART,
    payload: {
        productId
    }
})