// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCartProduct,
//   getCartProduct,
//   updateCartProduct,
// } from "../slice/CartSlice";
// import { FaMinus, FaPlus } from "react-icons/fa6";

// const Cart = () => {
//   let dispatch = useDispatch();
//   let data = useSelector((store) => store.carts);
//   console.log(data);

//   const handleDiscrese = (cartItem) => {
//     if (cartItem.quantity > 1) {
//       dispatch(
//         updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity - 1 })
//       );
//     }
//   };

//   const handleIncrement = (cartItem) => {
//     dispatch(
//       updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity + 1 })
//     );
//   };

//   const handleDelete = (ele) => {
//     dispatch(deleteCartProduct(ele));
//   };

//   useEffect(() => {
//     dispatch(getCartProduct());
//   }, [dispatch]);

//   return (
//     <div>
//       {data.carts.map((ele) => (
//         <div className="bg-red-700 my-3 " key={ele.id}>
//           <div className="flex w-11/12 m-auto bg-blue-700 justify-around">
//             <div className="bg-green-600">
//               <img className="h-[200px] p-3" src={ele.Image} alt={ele.Title} />
//             </div>
//             <div className="bg-yellow-600">
//               <div className="bg-slate-800">
//                 <h1 className="text-lg">{ele.Title}</h1>
//                 <h1>{ele.Desc}</h1>
//               </div>
//             </div>
//             <div>
//               <p>${ele.Price}</p>
//             </div>
//             <div className="bg-pink-500">
//               <div>
//                 <div className="border bg-red-700 items-center">
//                   <button className="p-2" onClick={() => handleDiscrese(ele)}>
//                     <FaMinus />
//                   </button>
//                   <span>{ele.quantity}</span>
//                   <button className="p-2" onClick={() => handleIncrement(ele)}>
//                     <FaPlus />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <button onClick={() => handleDelete(ele.id)}>Remove</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCartProduct,
//   getCartProduct,
//   updateCartProduct,
// } from "../slice/CartSlice";
// import { FaMinus, FaPlus } from "react-icons/fa6";

// const Cart = () => {
//   let dispatch = useDispatch();
//   let data = useSelector((store) => store.carts);
//   console.log(data);

//   const handleDiscrese = (cartItem) => {
//     if (cartItem.quantity > 1) {
//       dispatch(
//         updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity - 1  })
//       );
//     }
//   };

//   const handleIncrement = (cartItem) => {
//     dispatch(
//       updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity + 1  })
//     );
//   };

//   const handleDelete = (ele) => {
//     dispatch(deleteCartProduct(ele));
//   };

//   const totalCartPrice = data.carts.reduce((total,item)=>{
//     return total + item.quantity * item.Price
//   })

//   useEffect(() => {
//     dispatch(getCartProduct());
//   }, [dispatch]);

//   return (
//     <div className="p-4">
//       {data.carts.map(
//         (ele) =>
//           ele && (
//             <div className="bg-red-700 my-3 rounded-md" key={ele.id}>
//               <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:w-11/12 m-auto p-4 rounded-md">
//                 <div className="rounded-md mb-4 md:mb-0">
//                   <img
//                     className="h-40 w-40 md:h-[200px] md:w-[200px] p-3 object-cover rounded-md"
//                     src={ele.Image}
//                     alt={ele.Title}
//                   />
//                 </div>
//                 <div className=" flex-1 md:ml-4 w-full md:w-auto">
//                   <div className="p-4 rounded-md">
//                     <h1 className="text-lg font-semibold text-white">
//                       {ele.Title}
//                     </h1>
//                     <h1 className="text-sm text-gray-200">{ele.Desc}</h1>
//                   </div>
//                 </div>
//                 <div className="my-4 md:my-0">
//                   <p className="text-xl font-bold text-white">${ele.Price}</p>
//                 </div>
//                 <div className="flex items-center justify-center p-2 rounded-md">
//                   <button
//                     className="p-2 text-white"
//                     onClick={() => handleDiscrese(ele)}
//                   >
//                     <FaMinus />
//                   </button>
//                   <span className="px-4 text-lg font-semibold text-white">
//                     {ele.quantity}
//                   </span>
//                   <button
//                     className="p-2 text-white"
//                     onClick={() => handleIncrement(ele)}
//                   >
//                     <FaPlus />
//                   </button>
//                 </div>
//                 <div className="my-4 md:my-0">
//                   <button
//                     className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
//                     onClick={() => handleDelete(ele.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )
//       )}
//       <div>
//         <h1 className="text-2xl font-bold text-black">Total: ${totalCartPrice.toFixed(2)}</h1>
//         <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCartProduct,
//   getCartProduct,
//   updateCartProduct,
// } from "../slice/CartSlice";
// import { FaMinus, FaPlus } from "react-icons/fa6";

// const Cart = () => {
//   let dispatch = useDispatch();
//   let data = useSelector((store) => store.carts);
//   console.log(data);

//   const handleDiscrese = (cartItem) => {
//     if (cartItem.quantity > 1) {
//       dispatch(
//         updateCartProduct({ id: cartItem.id, quantity: cartItem?.quantity - 1 })
//       );
//     }
//   };

//   const handleIncrement = (cartItem) => {
//     dispatch(
//       updateCartProduct({ id: cartItem.id, quantity: cartItem?.quantity + 1 })
//     );
//   };

//   const handleDelete = (ele) => {
//     dispatch(deleteCartProduct(ele));
//   };

//   useEffect(() => {
//     dispatch(getCartProduct());
//   }, [dispatch]);

//   // Calculate the total price of all cart items
//   const totalCartPrice = data.carts.reduce((total, item) => {
//     return total + item?.Price * item?.quantity;
//   }, 0);

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//         Shopping Cart
//       </h1>
//       {data.carts.map(
//         (ele) =>
//           ele && (
//             <div
//               className="bg-white shadow-md rounded-lg overflow-hidden my-6 border border-gray-200"
//               key={ele?.id}
//             >
//               <div className="flex flex-col md:flex-row md:justify-between items-center p-6">
//                 <div className="mb-4 md:mb-0">
//                   <img
//                     className="h-40 w-40 md:h-48 md:w-48 object-cover rounded-md"
//                     src={ele?.Image}
//                     alt={ele?.Title}
//                   />
//                 </div>
//                 <div className="flex-1 md:ml-6">
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {ele?.Title}
//                   </h2>
//                   <p className="text-gray-500">{ele?.Desc}</p>
//                 </div>
//                 <div className="my-4 md:my-0">
//                   <p className="text-xl font-bold text-gray-800">
//                     ${ele?.Price}
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <button
//                     className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300"
//                     onClick={() => handleDiscrese(ele)}
//                   >
//                     <FaMinus />
//                   </button>
//                   <span className="text-lg font-semibold text-gray-800">
//                     {ele.quantity}
//                   </span>
//                   <button
//                     className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300"
//                     onClick={() => handleIncrement(ele)}
//                   >
//                     <FaPlus />
//                   </button>
//                 </div>
//                 <div className="my-4 md:my-0">
//                   <button
//                     className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
//                     onClick={() => handleDelete(ele.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )
//       )}
//       <div className="mt-8 text-center">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Total: ${totalCartPrice.toFixed(2)}
//         </h1>
//         <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-200 mt-4">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

//main
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCartProduct, deleteCartProduct, getCartProduct, updateCartProduct } from "../slice/CartSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";

const Cart = () => {
  const [offervalue, setOffervalue] = useState("");
  const [discount, setDiscount] = useState();
  const value = "OFF25";

  const cuppen = () => {
    if (value === offervalue) {
      let disPrice = (totalCartPrice * 25) / 100;
      let dis = totalCartPrice - disPrice;
      toast.success('Coupon Code Is Applied');
      setDiscount(dis);
    } else {
      toast.error('Wrong Coupon Code');
      return;
    }
  };

  const deleteAll = () => {
    dispatch(deleteAllCartProduct());
  };

  const dispatch = useDispatch();
  const data = useSelector((store) => store.carts);

  const handleDiscrese = (cartItem) => {
    if (cartItem.quantity > 1) {
      dispatch(updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity - 1 }));
    }
  };

  const handleIncrement = (cartItem) => {
    dispatch(updateCartProduct({ id: cartItem.id, quantity: cartItem.quantity + 1 }));
  };

  const handleDelete = (ele) => {
    dispatch(deleteCartProduct(ele));
  };

  useEffect(() => {
    dispatch(getCartProduct());
  }, [dispatch]);

  const totalCartPrice = data.carts.reduce((total, item) => {
    return total + item?.Price * item?.quantity;
  }, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Shopping Cart
      </h1>
      
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        
        {/* Cart Items */}
        <div className="lg:w-2/3 w-full space-y-6">
          {data.carts.map((ele) => ele && (
            <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-6" key={ele?.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="w-full md:w-auto">
                  <img
                    className="h-full w-full md:w-40 object-cover rounded-lg mb-4 md:mb-0"
                    src={ele?.Image}
                    alt={ele?.Title}
                  />
                </div>
                <div className="flex-1 md:ml-8 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {ele?.Title}
                  </h2>
                  <p className="text-sm text-gray-600">{ele?.Desc}</p>
                </div>
                <div className="flex items-center justify-center space-x-6 md:space-x-8">
                  <button
                    className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200"
                    onClick={() => handleDiscrese(ele)}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-bold text-gray-800">{ele?.quantity}</span>
                  <button
                    className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200"
                    onClick={() => handleIncrement(ele)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="text-lg font-bold text-center my-3 text-gray-800">
                  ${ele.Price}
                </div>
                <div className="text-center">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDelete(ele.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:w-1/3 w-full lg:fixed lg:right-10">
          <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="flex justify-between text-lg font-medium text-gray-700">
              <span>Total Price:</span>
              <span>${totalCartPrice.toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <label htmlFor="promo" className="text-gray-800 font-medium">
                Apply Promo Code
              </label>
              <div className="flex mt-2">
                <input
                  type="text"
                  id="promo"
                  className="border rounded-lg p-2 w-full"
                  placeholder="GET 25% off"
                  onChange={(e) => setOffervalue(e.target.value)}
                />
                <button
                  onClick={cuppen}
                  className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-between text-lg font-medium text-gray-700 mt-6">
              <span>Discount Price:</span>
              <span>${discount ? discount.toFixed(2) : '0.00'}</span>
            </div>

            <button
              onClick={deleteAll}
              className="w-full bg-green-500 text-white mt-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

