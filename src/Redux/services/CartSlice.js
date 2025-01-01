import { createSlice } from "@reduxjs/toolkit";

const getInitialProducts = (key) => {
  if (typeof window !== "undefined") {
    const savedProducts = localStorage.getItem(key);
    return savedProducts ? JSON.parse(savedProducts) : [];
  }
  return [];
};

const initialState = {
  SelectedProducts: getInitialProducts("SelectedProducts"),
  WishListProducts: getInitialProducts("WishListProducts"),
  CompareProducts: getInitialProducts("CompareProducts"),
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
      state.SelectedProducts = NewProductArryForFavori;

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },

    AddToWhitList: (state, action) => {
      const FindIfTheProductExtits = state.WishListProducts.findIndex((item) => {
        return item.name === action.payload.name
      })

      if (FindIfTheProductExtits !== -1) {
        return
      }


      const AddNewWishList = [...state.WishListProducts, action.payload]
      state.WishListProducts = AddNewWishList
      localStorage.setItem("WishListProducts", JSON.stringify(state.WishListProducts))
    },

    WhisListRemover: (state, action) => {
      const NewProductArryForFavori = state.WishListProducts.filter((item) => {
        return item.name !== action.payload.name;
      });

      state.WishListProducts = NewProductArryForFavori;

      localStorage.setItem(
        "WishListProducts",
        JSON.stringify(state.WishListProducts)
      );
    },

    AddToCompare: (state, action) => {
      const existingProductIndex = state.CompareProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.CompareProducts[existingProductIndex].quantity += 1;
      } else if (state.CompareProducts.length < 3) {
        const newProduct = { ...action.payload, quantity: 1 };
        state.CompareProducts.push(newProduct);
      } else {

      }

      localStorage.setItem("CompareProducts", JSON.stringify(state.CompareProducts));
    },


    RemoveFromCompare: (state, action) => {
      const NewProductAfterRemove = state.CompareProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.CompareProducts = NewProductAfterRemove;

      localStorage.setItem(
        "CompareProducts",
        JSON.stringify(state.CompareProducts)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, increment, decrement, Remover, AddToWhitList, WhisListRemover, RemoveFromCompare, AddToCompare } = cartSlice.actions;

export default cartSlice.reducer;



