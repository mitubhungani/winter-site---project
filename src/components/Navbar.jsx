import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, logout } from "../slice/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  // const cartItem = useSelector((store)=> store.carts.carts)

  const data = useSelector((store) => store.users);
  const users = JSON.parse(localStorage.getItem("user"));

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={`${sticky}`}>
      <nav className={`bg-white text-black`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold">MyLogo</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                  to="/"
                >
                  New Arrivals
                </Link>
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                  to="/men"
                >
                  Men
                </Link>
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                  to="/women"
                >
                  Women
                </Link>
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                  to="/addproduct"
                >
                  Add Product
                </Link>
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                  to="/addcategory"
                >
                  Add Catogery
                </Link>
                {data.isLogin || users ? (
                  <button
                    className="hover:bg-red-100 text-red-600 px-3 py-2 rounded-md text-md font-medium"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className="hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium"
                    to="/signin"
                  >
                    Sign in
                  </Link>
                )}
              </div>

              {/* Cart Button */}
              <div>
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  to="/cart"
                >
                  <FaShoppingCart className="mr-2" /> Cart
                  {/* <p> {cartItem.length}</p> */}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                to="/"
              >
                New Arrivals
              </Link>
              <Link
                className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                to="/men"
              >
                Men
              </Link>
              <Link
                className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                to="/women"
              >
                Women
              </Link>
              <Link
                className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                to="/addproduct"
              >
                Add Product
              </Link>
              <Link
                className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                to="/addcatogery"
              >
                Add Catogery
              </Link>
              {data.isLogin || users ? (
                <button
                  className="hover:bg-gray-100 text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  to="/signin"
                >
                  Sign in
                </Link>
              )}

              {/* Cart Button in Mobile */}
              <Link
                className="hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center"
                to="/cart"
              >
                <FaShoppingCart className="mr-2" /> Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getUser, logout } from "../slice/UserSlice";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const data = useSelector((store) => store.users);
//   const users = JSON.parse(localStorage.getItem("user"));

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     dispatch(getUser());
//   }, []);

//   return (
//     <nav className="bg-black text-white shadow-lg fixed w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <div className="text-2xl font-bold tracking-wide">
//               <Link to="/">MyLogo</Link>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/">
//               New Arrivals
//             </Link>
//             <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/men">
//               Men
//             </Link>
//             <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/women">
//               Women
//             </Link>
//             <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/addproduct">
//               Add Product
//             </Link>
//             <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/addcategory">
//               Add Category
//             </Link>
//             {data.isLogin || users ? (
//               <button
//                 className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={() => dispatch(logout())}
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/signin">
//                 Sign In
//               </Link>
//             )}

//             {/* Search Bar */}
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search..."
//                 className="px-4 py-2 text-black rounded-md"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
//                 <FaSearch />
//               </button>
//             </div>

//             {/* Cart Icon */}
//             <div>
//               <Link to="/cart" className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//                 <FaShoppingCart className="mr-2" /> Cart
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-400 hover:text-white focus:outline-none"
//             >
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/">
//               New Arrivals
//             </Link>
//             <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/men">
//               Men
//             </Link>
//             <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/women">
//               Women
//             </Link>
//             <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/addproduct">
//               Add Product
//             </Link>
//             <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/addcategory">
//               Add Category
//             </Link>
//             {data.isLogin || users ? (
//               <button className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={() => dispatch(logout())}>
//                 Logout
//               </button>
//             ) : (
//               <Link className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" to="/signin">
//                 Sign In
//               </Link>
//             )}

//             {/* Search Bar */}
//             <div className="relative mt-4">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search..."
//                 className="px-4 py-2 w-full text-black rounded-md"
//               />
//               <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
//                 <FaSearch />
//               </button>
//             </div>

//             {/* Cart Button */}
//             <Link className="hover:bg-gray-700  px-3 py-2 rounded-md text-base font-medium flex items-center mt-4" to="/cart">
//               <FaShoppingCart className="mr-2" /> Cart
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
