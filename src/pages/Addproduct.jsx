import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../slice/CategorySlice";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../slice/Addproduct";

const Addproduct = () => {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Desc, setDesc] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [id, setId] = useState();
  const [edit, setEdit] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); // Modal visibility state

  const data = useSelector((store) => store.category);
  const prodata = useSelector((store) => store.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    let products = {
      Title,
      Image,
      Desc,
      Price,
      Category,
      id: id,
    };
    if (edit) {
      setEdit(false);
      dispatch(updateProduct(products));
      setId();
      setShowUpdateModal(false); // Hide modal after update
    } else {
      dispatch(createProduct(products));
    }
    setTitle("");
    setImage("");
    setDesc("");
    setPrice("");
    setCategory("");
  };

  const handleEdit = (ele) => {
    setEdit(true);
    setTitle(ele.Title);
    setImage(ele.Image);
    setDesc(ele.Desc);
    setPrice(ele.Price);
    setCategory(ele.Category);
    setId(ele.id);
    setShowUpdateModal(true); // Show modal for updating the product
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-lg mx-auto mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {edit ? "Edit Product" : "Add Product"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="url"
          placeholder="Image URL"
          value={Image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Description"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <select
          value={Category}
          required
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="" disabled>
            Select a category
          </option>
          {data.categories.map((ele) => (
            <option key={ele.id} value={ele.category}>
              {ele.category}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          {edit ? "Update Product" : "Submit Product"}
        </button>
      </form>

      {/* Product List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prodata.products.map((ele) => (
          <div id="no" key={ele.id} className="bg-white p-6 rounded shadow-md">
            <img
              className="rounded h-80 w-full object-fill mb-4"
              src={ele.Image}
              alt={ele.Title}
            />
            <h3 className="text-xl font-semibold mb-2">{ele.Title}</h3>
            <p className="text-gray-700 mb-2">{ele.Desc}</p>
            <p className="text-gray-500 mb-2">Category: {ele.Category}</p>
            <p className="text-green-500 mb-4 font-bold">Price: ${ele.Price}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(ele)}
                className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ele.id)}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="url"
                placeholder="Image URL"
                value={Image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={Desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <select
                value={Category}
                required
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {data.categories.map((ele) => (
                  <option key={ele.id} value={ele.category}>
                    {ele.category}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Price"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addproduct;
