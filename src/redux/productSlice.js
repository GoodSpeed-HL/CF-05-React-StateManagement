import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: [{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}],
    reducers: {
        reduceInventory : (state, action) => {
            console.log(state);
            for(let item of state){
                if(item.id == action.payload.id && item.inventory >= 1){
                    item.inventory -= 1;
                }
            }
            return void state.map(item => ({...item}));
        },
        restoreInventory:  (state, action)  => {
            for(let item of state){
                if(item.id == action.payload.id && item.inventory >= 1){
                    item.inventory += 1;
                }
            }
            return state;
        }
    }
})

export default productSlice;