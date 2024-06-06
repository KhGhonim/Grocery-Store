import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedProducts: JSON.parse(localStorage.getItem("SelectedProducts"))
    ? JSON.parse(localStorage.getItem("SelectedProducts"))
    : [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const ProductWithQuantity = { ...action.payload, quantity: 1 };

      const ProductIndex = state.SelectedProducts.findIndex(
        (item) => item.name === action.payload.name
      );

      if (ProductIndex !== -1) {
        state.SelectedProducts[ProductIndex].quantity += 1;
      } else {
        state.SelectedProducts.push(ProductWithQuantity);
      }

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },
    increment: (state, action) => {
      const increastedProduct = state.SelectedProducts.find(
        (item) => item.name === action.payload.name
      );

      increastedProduct.quantity += 1;

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },
    decrement: (state, action) => {
      const decreasedProduct = state.SelectedProducts.find((item) => {
        return item.name === action.payload.name;
      });
      decreasedProduct.quantity -= 1;

      if (decreasedProduct.quantity === 0) {
        const NewArray = state.SelectedProducts.filter(
          (item) => item.name !== action.payload.name
        );
        state.SelectedProducts = NewArray;
      }
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },

    Remover: (state, action) => {
      const NewProductArryForFavori = state.SelectedProducts.filter((item) => {
        return item.name !== action.payload.name;
      });

      console.log(NewProductArryForFavori);

      state.SelectedProducts = NewProductArryForFavori;
    
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );

    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, increment, decrement, Remover } = cartSlice.actions;

export default cartSlice.reducer;
