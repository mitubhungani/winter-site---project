import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getCategory = createAsyncThunk("/category", async () => {
  try {
    let res = await axios.get(
      "https://json-server-deployment-y10f.onrender.com/category"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createCategory = createAsyncThunk(
  "/createCategory",
  async (categories) => {
    try {
      let res = await axios.post(
        "https://json-server-deployment-y10f.onrender.com/category",
        categories
      );
      toast.success("Category Add Successfully");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "/deleteCategory",
  async (id) => {
    try {
      let res = await axios.delete(
        `https://json-server-deployment-y10f.onrender.com/category/${id}`
      );
      toast.success("Category Delete Successfully");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "/updateCategory",
  async (categories) => {
    console.log("category", categories);

    try {
      let res = await axios.patch(
        `https://json-server-deployment-y10f.onrender.com/category/${categories.id}`,
        categories
      );
      toast.success("Category Update Successfully");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    //create cats
    builder.addCase(createCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.isLoading = false;
    });
    //get cats
    builder.addCase(getCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = false;
    });
    //delete cat
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (cat) => cat.id !== action.payload.id
      );
    });
    //update cat
    builder.addCase(updateCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.categories = state.categories.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      state.isLoading = false;
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const categoryReducer = categorySlice.reducer;
