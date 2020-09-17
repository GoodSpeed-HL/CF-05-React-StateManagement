import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART} from "./actionTypes";

const initStates = {
    productList: [{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ],
    cartList: []
}

export default function (state = initStates, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART : {
            return state;
        }
        case REMOVE_PRODUCT_TO_CART: {
            return state;
        }
        default: {
            return state;
        }
    }
}