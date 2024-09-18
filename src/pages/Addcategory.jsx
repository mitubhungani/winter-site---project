// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createCategory,
//   deleteCategory,
//   getCategory,
//   updateCategory,
// } from "../slice/CategorySlice";

// const Addcategory = () => {
//   const dispatch = useDispatch();
//   const [category, setCategory] = useState("");
//   const [edit, setEdit] = useState(false);
//   const [id, setId] = useState();

//   const data = useSelector((store) => store.category);
//   console.log(data);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let cats = {
//       category,
//       id: id,
//     };
//     if (edit) {
//       setEdit(false);
//       dispatch(updateCategory(cats));
//       setId();
//     } else {
//       dispatch(createCategory(cats));
//     }
//     setCategory("");
//   };
//   const handleEdit = (ele) => {
//     setEdit(true);
//     setCategory(ele.category);
//     setId(ele.id);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteCategory(id));
//   };

//   useEffect(() => {
//     dispatch(getCategory());
//   }, []);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//       <div>
//         {data.categories.map((ele) => (
//           <div key={ele.id}>
//             <h3>{ele.category}</h3>
//             <button onClick={() => handleDelete(ele.id)}>Delete</button>
//             <button onClick={() => handleEdit(ele)}>Update</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Addcategory;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../slice/CategorySlice";

const Addcategory = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  const data = useSelector((store) => store.category);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let cats = {
      category,
      id: id,
    };
    if (edit) {
      setEdit(false);
      dispatch(updateCategory(cats));
      setId();
    } else {
      dispatch(createCategory(cats));
    }
    setCategory("");
  };
  const handleEdit = (ele) => {
    setEdit(true);
    setCategory(ele.category);
    setId(ele.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {edit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <div className="bg-white shadow-md rounded p-4">
        {data.categories.map((ele) => (
          <div
            key={ele.id}
            className="border-b-2 border-gray-300 py-2 flex justify-between items-center"
          >
            <h3 className="text-lg font-bold text-gray-800">{ele.category}</h3>
            <div>
              <button
                onClick={() => handleEdit(ele)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(ele.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addcategory;
