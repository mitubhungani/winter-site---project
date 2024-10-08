import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, HTLProducts, LTHProducts } from "../slice/Addproduct";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Women = () => {
  const dispatch = useDispatch();

  const [searchItem, setSearchItem] = useState("");

  const productsData = useSelector((store) => store.products);
  // console.log(productsData);

  const womenProducts = productsData.products.filter(
    (product) => product.Category === "Women"
  );

  const HTLSort = () => {
    dispatch(HTLProducts());
  };

  const LTHSort = () => {
    dispatch(LTHProducts());
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="text-black">
      <div className="bg-white">
        <div className="w-11/12 mx-auto py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-0">
              Women Collection
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => HTLSort()}
                className="cursor-pointer text-sm md:text-base"
              >
                Low to High
              </button>
              <button
                onClick={() => LTHSort()}
                className="cursor-pointer text-sm md:text-base"
              >
                High to Low
              </button>
              <input
                onChange={(e) => setSearchItem(e.target.value)}
                className="border p-1 outline-none rounded-lg"
                type="text"
                placeholder="Find Products"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
            {womenProducts
              .filter((item) => {
                return searchItem.toLowerCase() === ""
                  ? item
                  : item.Title.toLowerCase().includes(searchItem);
              })
              .map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="cursor-pointer m-4" key={product.id}>
                    <img
                      className="h-60 md:h-72 rounded-lg w-full object-fill hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={product.Image}
                      alt={product.Title}
                    />
                    <h2 className="my-2 text-base md:text-lg">
                      {product.Title}
                    </h2>
                    <h3 className="mb-2 text-sm md:text-base">
                      $ {product.Price}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Women;
