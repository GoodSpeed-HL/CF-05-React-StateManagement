import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART} from "./actionTypes";

const initStates = {
    productList: [{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ],
    cart: {
        items: [{"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, 'quantity': 1}],
        total: 0
    }
}

export default function (state = initStates, action) {
    console.log(action)
    switch (action.type) {
        case ADD_PRODUCT_TO_CART : {
            let targetProduct = state.productList.find(item => {
                if(action.payload.id === item.id){
                    return true;
                }
                return false;
            })

            if(targetProduct && targetProduct.inventory >= 1){
                //state.cart.items.push(action.payload)
                //state.cart.total = 5;
                return {
                    ...state,
                    productList: state.productList.map(item => {
                        if(action.payload.id === item.id){
                            return {
                                ...item,
                                inventory: item.inventory - 1
                            }
                        }
                        return {...item}
                    }),
                    cart: increaseCartItem(state.cart.items, action.payload)

                }
            }
            else{
                return state;
            }
        }
        case REMOVE_PRODUCT_TO_CART: {
            const filteredItems = state.cart.items.filter(item => {
                if(action.payload.id === item.id){
                    return false;
                }
                return true;
            })

            return {
                productList: state.productList.map(item => {
                    if(action.payload.id === item.id){
                        return {
                            ...item,
                            inventory: item.inventory + 1
                        }
                    }
                    return {...item}
                }),
                cart: decreaseCartItem(state.cart.items, action.payload)
            }

        }
        default: {
            return state;
        }
    }
}


const increaseCartItem = (items = [], newItem) => {
    let total = 0;
    let newCartItem = [];

    let productInCart = items.find(item => item.id === newItem.id);
    console.log(productInCart);

    if(productInCart){
        productInCart.quantity += 1
    }
    else{
        items.push({
            ...newItem,
            quantity: 1
        })
    }

   /* for(let item of items){
        total += item.quantity * item.price
        newCartItem.push({...item});
    }*/

    return {
        items: items,
        total: total.toFixed(2)
    }
}

const decreaseCartItem = (items, newItem) => {
    let total = 0;
    let newCartItem = [];

    let productInCart = items.find(item => item.id === newItem.id);
    console.log(productInCart);

    if(productInCart){
        productInCart.quantity -= 1
    }

    for(let item of items){
        if(item.quantity > 0){
            total += item.quantity * item.price
            newCartItem.push({...item});
        }
    }

    return {
        items: newCartItem,
        total: total.toFixed(2)
    }
}