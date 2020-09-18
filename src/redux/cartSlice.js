import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0,
        productList:  [{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}]
    },
    reducers: {
        addToCart : (state, action) => {
            //product inventory
            let allowAdd = false;
            for(let item of state.productList){
                if(item.id == action.payload.id && item.inventory >= 1){
                    item.inventory -= 1;
                    allowAdd = true;
                }
            }
            if(allowAdd){
                let total = 0;
                let productInCart = state.items.find(item => item.id === action.payload.id);
                console.log(productInCart);

                if(productInCart){
                    productInCart.quantity += 1
                }
                else{
                    state.items.push({
                        ...action.payload,
                        quantity: 1
                    })
                }

                for(let item of state.items){
                    total += item.quantity * item.price
                }

                state.total = total.toFixed(2);
            }
            return state;
        },
        removeFromCart: (state, action) => {
            let total = 0;
            let newCartItem = [];

            for(let item of state.productList){
                if(item.id == action.payload.id ){
                    item.inventory += 1;
                }
            }

            let productInCart = state.items.find(item => item.id === action.payload.id);
            console.log(productInCart);

            if(productInCart){
                productInCart.quantity -= 1
            }

            for(let item of state.items){
                if(item.quantity > 0){
                    total += item.quantity * item.price
                    newCartItem.push({...item});
                }
            }

            state.total = total.toFixed(2);
            state.items = newCartItem
            return state;
        }
    }
})

export default productSlice;