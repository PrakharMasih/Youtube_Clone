import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        isClosedMenu: true
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isClosedMenu = !state.isClosedMenu;
        }
    },
})

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;