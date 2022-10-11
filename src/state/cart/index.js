import { createSlice } from "@reduxjs/toolkit";

// const exampleItem = {
//     name: "Create Your Set",
//     includes: [
//         {
//             name: "Detox",
//             quantity: 3,
//             price: 35,
//         },
//         {
//             name: "Energy",
//             quantity: 3,
//             price: 35,
//         },
//         {
//             name: "Immunity",
//             quantity: 3,
//             price: 35,
//         },
//         {
//             name: "Recovery",
//             quantity: 3,
//             price: 35,
//         },
//     ],
//     price: 420,
//     quantity: 12,
// };

const initialState = {
    cart: {
        items: [],
        price: 0,
        discount: 0,
        shipping: 0,
        payable: 0,
    },
    shipping: {
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        district: "",
        deliveryTime: "",
    },
};

const createCart = items => {
    const price = items.reduce((a, b) => a + parseInt(b.price), 0);
    const discount = price > 600 ? price * 0.1 : 0;
    const shipping = price > 600 ? 0 : 40;
    const payable = price - discount + shipping;

    return {
        items,
        price,
        discount,
        shipping,
        payable,
    };
};

// Slice
const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        emptyCart: (state, action) => {
            state.cart = initialState.cart;
        },
        addToCart: (state, action) => {
            const { payload } = action;
            const newCart = createCart([...state.cart.items, payload]);
            state.cart = newCart;
        },
        removeFromCart: (state, action) => {
            const { payload } = action;
            const newItems = [...state.cart.items];
            newItems.splice(payload, 1);
            state.cart = createCart(newItems);
        },
    },
});

// Reducers
export default slice.reducer;

// // Selectors
// export const cartSelector = state => state.cart;

// Actions
export const { emptyCart, addToCart, removeFromCart } = slice.actions;
