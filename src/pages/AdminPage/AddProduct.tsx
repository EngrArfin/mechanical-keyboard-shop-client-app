// src/components/AddProduct.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
} from "../../redux/features/keyboardSlice";

// Define types for form data
interface ProductFormInputs {
  name: string;
  price: number;
  category: string;
  recipe: string;
  image: FileList;
}

const AddProduct: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset } = useForm<ProductFormInputs>();
  const { items, loading } = useSelector((state: RootState) => state.keyboards);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
    dispatch(addProduct(data)).then(() => {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id)).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="w-full ml-10">
      {/* Render Form for Adding Product */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form Fields */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Keyboard Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        {/* Other Form Fields (Category, Price, Recipe, Image) */}
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>

      {/* List of Products */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddProduct;
