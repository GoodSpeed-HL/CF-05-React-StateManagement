import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const loadProductList = createAsyncThunk(
    'cart/loadProductList',
    async (userId, thunkAPI) => {
        const rawResponse = await fetch("/data.json");
        const jsonResponse = await rawResponse.json();
        return jsonResponse;
    }
)

const productSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0,
        productList:  []
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
    },
    extraReducers: {
        [loadProductList.rejected]: (state , action) =>{
            state.productList = [ {"id": 5, "title": "Bad Product", "price": 99999999, "inventory": -1}]
        },
        [loadProductList.fulfilled]: (state , action) =>{
            state.productList = action.payload
        }
    }

})



export default productSlice;
export {loadProductList}