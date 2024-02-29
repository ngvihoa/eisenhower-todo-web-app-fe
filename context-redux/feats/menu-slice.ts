import { InitialMenuState, MenuState } from "@/lib/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
  } as MenuState,
} as InitialMenuState;

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu: () => {
      return initialState;
    },
    toggleMenu: (state) => {
      return {
        value: {
          isOpen: !state.value.isOpen,
        },
      };
    },
  },
});

export const { toggleMenu, closeMenu } = menu.actions;
export default menu.reducer;
