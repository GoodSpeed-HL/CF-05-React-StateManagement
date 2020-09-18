import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART} from './actionTypes';

export const addProduct = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product
})

export const removeProduct = product => ({
    type: REMOVE_PRODUCT_TO_CART,
    payload: product
})