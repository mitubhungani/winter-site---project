import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../slice/Addproduct";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { createCartProduct } from "../slice/CartSlice";
import Productmap from "./Productmap";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const { product } = useSelector((store) => store.products);

  const handleCartProduct = (ele) => {
    dispatch(createCartProduct({ ...ele, quantity: 1 }));
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div className="bg-white text-black">
      <div className="w-11/12  flex flex-col lg:flex-row m-auto my-6 gap-6">
        <div className="w-full lg:w-1/2">
          <img
            className="h-84 sm:h-80 md:h-[400px] lg:h-[500px] m-auto w-full object-contain rounded-lg"
            src={product.Image}
            alt={product.Title}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-auto flex flex-col justify-between mb-6">
            <h1 className="text-2xl my-3 md:text-3xl lg:text-4xl">
              {product.Title}
            </h1>
            <p className="text-gray-500 my-3 text-sm md:text-lg">
              {product.Desc}
            </p>
            <p className="text-gray-500 text-sm my-3 md:text-lg">Category: {product.Category}</p>
            <p className="text-base my-3 md:text-lg">Price: ${product.Price}</p>
          </div>
          <div className="flex  h-full items-center">
            <button
              onClick={() => handleCartProduct(product)}
              className="w-full lg:w-3/4 py-3 m-auto border rounded-lg  text-black hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    
      {/* Product Section
      <div>
        <Productmap />
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
