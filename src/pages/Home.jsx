import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import benner1 from "../assets/thumb.jpg";
import benner2 from "../assets/sale.jpg";
import men from "../assets/men2.png";
import women from "../assets/women2.png";
import first from "../assets/top.jpg";
import "./Home.css";

import Productmap from "./Productmap";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 m-auto px-9 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-3xl my-4">
            Sybille's current favorite gear
          </h1>
          <p className="text-3xl md:text-5xl lg:text-5xl mb-4">
            Believe in your dreams
          </p>
          <p className="mb-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ut labore doloribus dolor in ratione aliquam hic unde
            sapiente alias?
          </p>
          <Link
            to="/men"
            className="bg-black text-white hover:scale-105 transition duration-300 ease-in-out rounded-lg py-2 px-5 mb-4 inline-block"
          >
            Show more
          </Link>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            className=" m-auto h-auto object-fill rounded-full"
            src={first}
            alt="First Banner"
          />
        </div>
      </div>

      {/* Product Section */}
      <div>
        <Productmap />
      </div>

      {/* Banner Section */}
      <div
        id="no"
        className="flex flex-col lg:flex-row rounded-xl w-11/12 mx-auto justify-between my-8"
      >
        <img
          className="h-[300px] lg:h-[400px] w-full lg:w-auto object-cover rounded-lg"
          src={benner1}
          alt="Banner 1"
        />
        <div className="text-center m-auto w-full p-4">
          <h1 className="my-2 text-lg md:text-xl lg:text-2xl">
            Double down on cushioning
          </h1>
          <p className="text-3xl md:text-4xl lg:text-6xl mb-4">New for fall</p>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos
            quasi nobis. Dolor, quis numquam error recusandae necessitatibus
            pariatur unde.
          </p>
          <Link
            to="/men"
            className="bg-black text-white hover:scale-105 transition duration-300 ease-in-out rounded-lg py-2 px-5 mb-4 inline-block"
          >
            Show more
          </Link>
        </div>
      </div>

      

      {/* Bestseller Section */}
      <div
        id="no"
        className="flex flex-col lg:flex-row border text-black mx-auto rounded-xl w-11/12 justify-between my-8"
      >
        <div className="w-full lg:w-2/3  text-center m-auto p-4">
          <h1 className="my-2 text-2xl md:text-3xl lg:text-4xl">SALE IS ON!</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl mb-4">Bestseller</p>
          <p className="text-sm md:text-lg lg:text-xl mb-4">
            25% off sitewide using code OFF25 at checkout
          </p>
          <Link
            to="/men"
            className="bg-black text-white hover:scale-105 transition duration-300 ease-in-out rounded-lg py-2 px-5 mb-4 inline-block"
          >
            Show more
          </Link>
        </div>
        <div className="lg:w-auto w-full flex justify-center">
          <img
            className="lg:h-[500px] rounded-b-xl lg:rounded-r-xl h-auto w-full lg:w-auto object-cover"
            src={benner2}
            alt="Banner 2"
          />
        </div>
      </div>

      {/* Product Section */}
      <div>
        <Productmap />
      </div>

      {/* Best Sellers Section */}
      <div id="no" className="py-3">
        <div className="flex justify-between w-11/12 mx-auto py-3">
          <h1 className="text-xl md:text-2xl">Best Sellers</h1>
          <div className="flex items-center w-36">
            <Link to="/men" className="flex items-center w-full justify-around">
              Discover more <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around w-11/12 mx-auto">
          <Link
            to="/men"
            className="lg:w-2/5 w-full h-full justify-around border rounded-2xl cursor-pointer flex items-end mt-4 lg:mt-0"
          >
            <div className="w-3/4">
              <img
                className="hover:scale-105 transition duration-300 ease-in-out"
                src={men}
                alt="Men"
              />
            </div>
            <h1 className="md:pb-6 text-lg lg:text-xl">Men</h1>
          </Link>

          <Link
            to="/women"
            className="lg:w-2/5 w-full h-full justify-around border rounded-2xl cursor-pointer flex items-end mt-4 lg:mt-0"
          >
            <div className="w-3/4">
              <img
                className="hover:scale-105 transition duration-300 ease-in-out"
                src={women}
                alt="Women"
              />
            </div>
            <h1 className="md:pb-6 text-lg lg:text-xl">Women</h1>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;