import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getProduct = createAsyncThunk("/products", async () => {
  try {
    let res = await axios.get(`http://localhost:3000/products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createProduct = createAsyncThunk(
  "/createProduct",
  async (products) => {
    try {
      let res = await axios.post("http://localhost:3000/products", products);
      toast.success("Product Add Successfully");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk("/delete", async (id) => {
  try {
    let res = await axios.delete(`http://localhost:3000/products/${id}`);
    toast.success("Product Delete Successfully");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateProduct = createAsyncThunk(
  "/updateProduct",
  async (product) => {
    try {
      let res = await axios.patch(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      toast.success("Product Update Successfully");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "/getSingleProduct",
  async (id) => {
    console.log(id);
    try {
      let res = await axios.get(`http://localhost:3000/products/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const HTLProducts = createAsyncThunk('/HTLProducts', async ()=>{
  try {
    let res =await axios.get('http://localhost:3000/products')
    let item = res.data;
    let sortitem = item.sort((a,b)=>a.Price - b.Price);
    return sortitem;
  } catch (error) {
    console.log(error);
  }
})

export const LTHProducts = createAsyncThunk('/LTHProducts', async ()=>{
  try {
    let res =await axios.get('http://localhost:3000/products')
    let item =await res.data;
    let sortitem = item.sort((a,b)=>b.Price - a.Price);
    return sortitem;
  } catch (error) {
    console.log(error);
  }
})

// export const SearchProduct = createAsyncThunk('/SearchProduct', async (val)=>{
//   try {
//     let res = await axios.get('http://localhost:3000/products')
//     let products = await res.data;
//     let items = products.filter((ele)=>ele.Title.includes(val))
//     return items;
//   } catch (error) {
//     console.log(error);
//   }
// })


// export const limitedProducts =createAsyncThunk('/limitedProducts',async () => {
//   try {
//     let res = await axios.get(`http://localhost:3000/products`)
//     return res.data;
//   } catch (error) {

//   }
// })

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    isLoading: false,
  },
  extraReducers: (builder) => {
    //get all products
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //create product
    builder.addCase(createProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //delete product
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.isLoading = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //update product
    builder.addCase(updateProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      state.isLoading = false;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //single product
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });

    //HTLProducts
    builder.addCase(HTLProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    })

    //LTHProducts
    builder.addCase(LTHProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    })

    //SearchProduct
    // builder.addCase(SearchProduct.fulfilled, (state, action) => {
    //   state.products = action.payload;
    //   state.isLoading = false;
    // })
  },
});

export const productReducer = productSlice.reducer;
