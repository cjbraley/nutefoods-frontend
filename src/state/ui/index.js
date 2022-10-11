import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMenu: false,
    showCart: false,
};

// Slice
const slice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setShowMenu: (state, action) => {
            const { payload } = action;
            const body = document.body;
            state.showMenu = payload;
            body.classList.toggle("preventScroll", payload);
        },
        setShowCart: (state, action) => {
            const { payload } = action;
            const body = document.body;
            state.showCart = payload;
            body.classList.toggle("preventScroll", payload);
        },
    },
});

// Reducers
export default slice.reducer;

// Selectors
// export const uiSelector = state => state.ui;

// Actions
export const { setShowMenu, setShowCart } = slice.actions;
