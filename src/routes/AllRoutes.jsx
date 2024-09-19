import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Cart from "../pages/Cart";
import Addproduct from "../pages/Addproduct";
import Addcategory from "../pages/Addcategory";
import ProductPage from "../pages/ProductPage";
import PrivetRoutes from "../components/PrivetRoutes";
import { Toaster } from "react-hot-toast";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivetRoutes>
              <Home />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/men"
          element={
            <PrivetRoutes>
              <Men />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/women"
          element={
            <PrivetRoutes>
              <Women />
            </PrivetRoutes>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/cart"
          element={
            <PrivetRoutes>
              <Cart />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <PrivetRoutes>
              <Addproduct />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/addcategory"
          element={
            <PrivetRoutes>
              <Addcategory />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <PrivetRoutes>
              <ProductPage />
            </PrivetRoutes>
          }
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default AllRoutes;
