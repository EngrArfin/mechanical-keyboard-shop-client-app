/* eslint-disable @typescript-eslint/no-explicit-any */
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart, updateQuantity } from "../../redux/features/cartSlice";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart({ _id }));
  };

  return (
    <div className="flex items-center justify-between space-x-4 border border-gray-300 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-all w-full max-w-lg mx-auto">
      <img
        src={product.image}
        alt={product.productName}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-semibold text-sky-700 truncate mb-2">
          {product.productName}
        </h3>
        <p className="text-lg font-bold text-red-400">${product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantity("decrement", product._id)}
          className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
        >
          <Minus size={18} />
        </button>
        <span className="text-lg font-semibold">{product.quantity}</span>
        <button
          onClick={() => handleQuantity("increment", product._id)}
          className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
        >
          <Plus size={18} />
        </button>
      </div>
      <button
        onClick={() => handleRemove(product._id)}
        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartDetails;

/* import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart, updateQuantity } from "../../redux/features/cartSlice";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: string, _id: string) => {
    dispatch(updateQuantity({ type, _id }));
  };

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart({ _id }));
  };

  return (
    <div className="flex items-center justify-between space-x-4 border border-gray-300 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-all w-full max-w-lg mx-auto">
      <img
        src={product.image}
        alt={product.productName}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-semibold text-sky-700 truncate mb-2">
          {product.productName}
        </h3>
        <p className="text-lg font-bold text-red-400">${product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantity("decrement", product._id)}
          className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
        >
          <Minus size={18} />
        </button>
        <span className="text-lg font-semibold">{product.quantity}</span>
        <button
          onClick={() => handleQuantity("increment", product._id)}
          className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
        >
          <Plus size={18} />
        </button>
      </div>
      <button
        onClick={() => handleRemove(product._id)}
        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartDetails; */
