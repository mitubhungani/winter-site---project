import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../slice/Addproduct";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Home.css'
import axios from "axios";

const Productmap = () => {
  let dispatch = useDispatch();

  let [product,setproduct]=useState([])
  let [limitedProduct,setLimitedProduct]=useState([])

  // let data = useSelector((store) => store.products);
  // console.log(data);

  useEffect( ()=>{
    let data=async()=>{
    let res = await axios.get('http://localhost:3000/products') 
    setproduct(res.data)
    setLimitedProduct(res.data.slice(0, 4))
    return res.json
  }
  data()
  },[])

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      <div>
        <div id='no' className="flex w-11/12  py-3 m-auto justify-between">
          <div>
            <h1 className="text-2xl">Best Sellers</h1>
          </div>
          <div className=" flex items-center w-36">
            <Link to="/men" className="flex items-center w-full justify-around">
              Discover more <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-3">
        <div className="grid grid-cols-1 md:grid-cols-4 w-11/12 m-auto justify-between">
          {limitedProduct.map((ele) => (
            <Link id='no' to={`/product/${ele.id}`} key={ele.id}>
              <div className="cursor-pointer  m-4 ">
                <img
                  className="h-72 rounded-lg w-full object-fill hover:scale-105 transition duration-300 ease-in-out"
                  src={ele.Image}
                  alt={ele.title}
                />
                <h2 className="text-black my-2 text-lg">{ele.Title}</h2>
                <h3 className="text-black mb-2">$ {ele.Price}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productmap;
