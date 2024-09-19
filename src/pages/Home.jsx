// import { Link } from "react-router-dom";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import benner1 from "../assets/benner-1.png";
// import benner2 from "../assets/benner-2.png";
// import men from "../assets/men.png";
// import women from "../assets/women.png";
// import first from "../assets/first.png";

// import Productmap from "./Productmap";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <div className="bg-black text-black">
//       <div>
//         <div className="h-screen">
//           <div className="flex w-11/12 m-auto justify-between">
//             <div className="w-2/4 m-auto">
//               <h1 className="my-2">Sybille's current favorite gear</h1>
//               <p className="text-6xl mb-4">Believe in your dreams</p>
//               <p className="mb-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Exercitationem ut labore doloribus dolor in ratione aliquam hic
//                 unde sapiente alias?
//               </p>
//               <Link
//                 to="/men"
//                 className="bg-red-700 hover:bg-red-800 rounded-lg py-2 px-5 mb-4"
//               >
//                 Show more
//               </Link>
//             </div>
//             <div>
//               <img className="h-screen" src={first} alt="" />
//             </div>
//           </div>
//         </div>
//         <Productmap />
//         <div className="">
//           <div className="flex  bg-[#1C1C1C] rounded-xl w-11/12 m-auto justify-between">
//             <div className="">
//               <img className="h-[500px]" src={benner1} alt="" />
//             </div>
//             <div className="text-center m-auto items-center w-2/5">
//               <h1 className="my-2">Double down on cushioning</h1>
//               <p className="text-6xl mb-4">New for fall</p>
//               <p className="mb-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//                 eos quasi nobis. Dolor, quis numquam error recusandae
//                 necessitatibus pariatur unde.
//               </p>
//               <button className="bg-red-700 hover:bg-red-800 rounded-lg py-2 px-5 mb-4">
//                 Show more
//               </button>
//             </div>
//             <div>
//               <img className="h-[500px]" src={benner1} alt="" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <Productmap />
//         </div>
//         <div className="w-full ">
//           <div className="flex bg-[#1C1C1C] m-auto rounded-xl w-11/12 justify-between">
//             <div className=" w-1/2 m-auto">
//               <h1 className="my-2">SALE IS ON!</h1>
//               <p className="text-5xl mb-4">Bestseller</p>
//               <p className="text-lg mb-4">
//                 25% off sitewide useing zzddae at checkout
//               </p>
//               <button className="bg-red-700 hover:bg-red-800 rounded-lg py-2 px-5 mb-4">
//                 Show more
//               </button>
//             </div>
//             <div className="">
//               <img className="h-[500px] " src={benner2} alt="" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="m-auto py-3">
//             <div className="">
//               <div className="flex w-11/12 py-3 m-auto justify-between">
//                 <div>
//                   <h1 className="text-2xl">Best Sellers</h1>
//                 </div>
//                 <div className=" flex items-center w-36">
//                   <Link
//                     to="/men"
//                     className="flex items-center w-full justify-around"
//                   >
//                     Discover more <FaArrowAltCircleRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="flex py-3 w-11/12 m-auto justify-between">
//               <Link
//                 to="/men"
//                 className="w-2/5 flex bg-[#1C1C1C] shadow-lg shadow-red-700/40 rounded-xl cursor-pointer items-end"
//               >
//                 <img className="h-[400px]" src={men} alt="" />
//                 <h1 className="pb-7 text-xl">Men</h1>
//               </Link>
//               <Link
//                 to="/women"
//                 className="w-2/5 bg-[#1C1C1C] shadow-lg shadow-red-700/40 rounded-xl flex cursor-pointer items-end "
//               >
//                 <img className="h-[400px]" src={women} alt="" />
//                 <h1 className=" pb-7 text-xl">Women</h1>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { Link } from "react-router-dom";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import benner1 from "../assets/thumb.jpg";
// import benner2 from "../assets/sale.jpg";
// import men from "../assets/men2.png";
// import women from "../assets/women2.png";
// import first from "../assets/first.jpg";

// import Productmap from "./Productmap";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <div className="bg-white text-black">
//       {/* Hero Section */}
//       <div className="w-full flex">
//         <div className="  m-auto">
//           <div className=" w-11/12 m-auto">
//             <h1 className="text-2xl">Sybille's current favorite gear</h1>
//             <p className="text-6xl mb-4">Believe in your dreams</p>
//             <p className="mb-4 text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Exercitationem ut labore doloribus dolor in ratione aliquam hic
//               unde sapiente alias?
//             </p>
//             <Link
//               to="/men"
//               className="bg-black text-white hover:scale-105 transition duration-300 ease-in-out rounded-lg py-2 px-5 mb-4"
//             >
//               Show more
//             </Link>
//           </div>
//         </div>
//         <div className=" w-1/2 bg-red-800">
//           <img className=" h-full" src={first} alt="First Banner" />
//         </div>
//       </div>

//       {/* Product Section */}
//       <Productmap />

//       {/* Banner Section */}
//       <div className="flex flex-col lg:flex-row rounded-xl w-11/12 mx-auto justify-between my-8">
//         <img
//           className="h-[400px]"
//           src={benner1}
//           alt="Banner 1"
//         />
//         <div className="text-center m-auto w-full lg:w-2/5 p-4">
//           <h1 className="my-2 text-lg md:text-xl lg:text-2xl">
//             Double down on cushioning
//           </h1>
//           <p className="text-3xl md:text-4xl lg:text-6xl mb-4">New for fall</p>
//           <p className="mb-4 text-sm md:text-base lg:text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos
//             quasi nobis. Dolor, quis numquam error recusandae necessitatibus
//             pariatur unde.
//           </p>
//           <button className="bg-red-700 hover:bg-red-800 rounded-lg py-2 px-5 mb-4 text-sm md:text-base lg:text-lg">
//             Show more
//           </button>
//         </div>
//       </div>

//       {/* Bestseller Section */}
//       <div className="flex flex-col text-black lg:flex-row  mx-auto rounded-xl w-11/12 justify-between my-8">
//         <div className="w-2/3  text-center m-auto">

//           <h1 className="my-2 text-2xl md:text-3xl lg:text-4xl">SALE IS ON!</h1>
//           <p className="text-3xl md:text-4xl lg:text-5xl mb-4">Bestseller</p>
//           <p className="text-sm md:text-lg lg:text-xl mb-4">
//             25% off sitewide using zzddae at checkout
//           </p>
//           <button className="bg-red-700 hover:bg-red-800 rounded-lg py-2 px-5 mb-4 text-sm md:text-base lg:text-lg">
//             Show more
//           </button>

//         </div>
//         <div className="lg:w-auto w-full flex justify-center" dir="rtl">
//           <img
//             className="lg:h-[500px] rounded-s-xl h-auto w-full lg:w-auto object-cover"
//             src={benner2}
//             alt="Banner 2"
//           />
//         </div>
//       </div>

//       {/* Best Sellers Section */}
//       <div className="py-3">
//         <div className="flex justify-between w-11/12 mx-auto py-3">
//           <h1 className="text-xl md:text-2xl">Best Sellers</h1>
//           <div className="flex items-center w-36">
//             <Link to="/men" className="flex items-center w-full justify-around">
//               Discover more <FaArrowAltCircleRight />
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-around w-11/12 mx-auto">

//           <Link
//             to="/men"
//             className="lg:w-2/5 w-full h-full justify-around border rounded-2xl cursor-pointer flex items-end mt-4 lg:mt-0"
//           >
//             <div className="w-3/4">
//             <img
//               className="hover:scale-105 transition duration-300 ease-in-out"
//               src={men}
//               alt="Men"
//             />
//             </div>
//             <h1 className=" md:pb-6 text-lg lg:text-xl">Men</h1>
//           </Link>

//           <Link
//             to="/men"
//             className="lg:w-2/5 w-full h-full justify-around border rounded-2xl cursor-pointer flex items-end mt-4 lg:mt-0"
//           >
//             <div className="w-3/4">
//             <img
//               className="hover:scale-105 transition duration-300 ease-in-out"
//               src={women}
//               alt="Men"
//             />
//             </div>
//             <h1 className=" md:pb-6 text-lg lg:text-xl">Women</h1>
//           </Link>

//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

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

// import { Link } from "react-router-dom";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import benner1 from "../assets/benner-1.png";
// import benner2 from "../assets/benner-2.png";
// import men from "../assets/men.png";
// import women from "../assets/women.png";
// import first from "../assets/first.png";
// import Productmap from "./Productmap";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <div className="bg-gray-900 text-black">
//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row items-center w-11/12 mx-auto py-12 lg:py-24">
//         <div className="lg:w-1/2 w-full text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
//           <h1 className="text-3xl lg:text-4xl font-semibold">
//             Discover the Latest Gear
//           </h1>
//           <p className="text-lg lg:text-xl mt-4 mb-8">
//             Gear up for your next adventure with our top picks for men and
//             women.
//           </p>
//           <Link
//             to="/shop"
//             className="bg-red-600 hover:bg-red-700 py-3 px-8 rounded-full text-black"
//           >
//             Shop Now
//           </Link>
//         </div>
//         <div className="lg:w-1/2 w-full">
//           <img
//             src={first}
//             alt="Hero Banner"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>
//       </div>

//       {/* Product Section */}
//       <Productmap />

//       {/* Promotional Banner */}
//       <div className="flex flex-col lg:flex-row items-center bg-red-700 rounded-xl w-11/12 mx-auto mt-12 overflow-hidden">
//         <img
//           className="w-full lg:w-1/2 h-80 object-cover"
//           src={benner1}
//           alt="Banner"
//         />
//         <div className="p-8 text-center lg:text-left lg:w-1/2">
//           <h2 className="text-3xl lg:text-4xl font-semibold">
//             Double Down on Comfort
//           </h2>
//           <p className="mt-4 text-lg">
//             Explore our latest fall collection with unbeatable comfort and
//             style.
//           </p>
//           <Link
//             to="/shop"
//             className="inline-block mt-6 bg-white text-red-700 py-2 px-6 rounded-full"
//           >
//             Discover Now
//           </Link>
//         </div>
//       </div>

//       {/* Bestseller Section */}
//       <div className="bg-[#1C1C1C] py-12 mt-12 rounded-xl w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
//         <div className="text-center lg:text-left lg:w-1/2">
//           <h2 className="text-4xl font-semibold">Best Sellers</h2>
//           <p className="mt-4 text-lg">25% off sitewide with code FALL25</p>
//           <Link
//             to="/shop"
//             className="mt-6 bg-red-600 hover:bg-red-700 py-2 px-6 rounded-full"
//           >
//             Shop Best Sellers
//           </Link>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0">
//           <img
//             className="w-full h-80 object-cover rounded-xl"
//             src={benner2}
//             alt="Bestseller Banner"
//           />
//         </div>
//       </div>

//       {/* Category Section */}
//       <div className="py-12 w-11/12 mx-auto">
//         <h2 className="text-3xl text-center lg:text-left font-semibold mb-8">
//           Shop by Category
//         </h2>
//         <div className="flex flex-col lg:flex-row gap-6">
//           <Link to="/men" className="w-full lg:w-1/2 relative group">
//             <img
//               className="w-full h-64 lg:h-80 object-cover rounded-xl"
//               src={men}
//               alt="Men"
//             />
//             <div className="absolute inset-0 flex items-end justify-center lg:justify-start bg-black bg-opacity-50 rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-opacity">
//               <h3 className="text-xl font-semibold">Men's Collection</h3>
//             </div>
//           </Link>
//           <Link to="/women" className="w-full lg:w-1/2 relative group">
//             <img
//               className="w-full h-64 lg:h-80 object-cover rounded-xl"
//               src={women}
//               alt="Women"
//             />
//             <div className="absolute inset-0 flex items-end justify-center lg:justify-start bg-black bg-opacity-50 rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-opacity">
//               <h3 className="text-xl font-semibold">Women's Collection</h3>
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;
