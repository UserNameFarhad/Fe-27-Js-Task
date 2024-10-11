import { createSlice } from "@reduxjs/toolkit";

const products = [
    {
        id: 0,
        name: "iphone 15",
        price: 3500

    },
    {
        id: 1,
        name: "nokia 3310",
        price: 9000
    }
]

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products
    },
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload)
        }
    }
})