import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getCartProduct = createAsyncThunk("/cartProduct", async () => {
  try {
    let res = await axios.get("https://json-server-deployment-y10f.onrender.com/cart");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const isExists = async (id) => {
  try {
    let res = await axios.get(`https://json-server-deployment-y10f.onrender.com/cart/${id}`);
    if (res.data) {
      console.log("Product already exists", res.data);
      return true;
    }
  } catch (error) {
    console.log("Product is not exist", error);
    return false;
  }
};

export const createCartProduct = createAsyncThunk(
  "/createcartProduct",
  async (product, { rejectWithValue }) => {
    try {
      const exist = await isExists(product.id);
      if (!exist) {
        let res = await axios.post("https://json-server-deployment-y10f.onrender.com/cart", product);
        toast.success('Product Add Successfully');
        return res.data;
      } else {
        toast.error('Product already exists in the cart');
        return null;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteCartProduct = createAsyncThunk(
  "/deletecartProduct",
  async (id) => {
    try {
      let res = await axios.delete(`https://json-server-deployment-y10f.onrender.com/cart/${id}`);
      toast.success('Product Remove Successfully');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCartProduct = createAsyncThunk(
  "/updateCartProduct",
  async (product) => {
    try {
      let res = await axios.patch(
        `https://json-server-deployment-y10f.onrender.com/cart/${product.id}`,
        product
      );
      
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAllCartProduct = createAsyncThunk('/deleteAllCartProduct', async (product) => {
  try {
    let res= await axios.delete('https://json-server-deployment-y10f.onrender.com/cart')
    return res.data;
  } catch (error) {
    console.log(error);
    
  }
})

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    cart: {},
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCartProduct.fulfilled, (state, action) => {
      state.carts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCartProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //create PRoduct
    builder.addCase(createCartProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCartProduct.fulfilled, (state, action) => {
      state.carts.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createCartProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //delete Product
    builder.addCase(deleteCartProduct.fulfilled, (state, action) => {
      state.carts = state.carts.filter((ele) => ele.id !== action.payload.id);
    });

    //update product
    builder.addCase(updateCartProduct.fulfilled, (state, action) => {
      state.carts = state.carts.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      state.isLoading = false;
    });

    //Delete cart
    builder.addCase(deleteAllCartProduct.fulfilled, (state, action) => {
      state.carts = [];
      state.isLoading = false;
    })
  },
});

export const cartReducer = CartSlice.reducer;
