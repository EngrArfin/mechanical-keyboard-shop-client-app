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
    <div className="flex items-center justify-between space-x-4 border border-gray-300 rounded-lg p-6 bg-gradient-to-r from-gray-100 via-white to-gray-50 shadow-lg hover:shadow-2xl transition-all w-full max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.productName}
        className="w-36 h-36 object-cover rounded-md"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
          {product.productName}
        </h3>
        <p className="text-xl font-bold text-blue-500">${product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantity("decrement", product._id)}
          className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors"
        >
          <Minus size={20} />
        </button>
        <span className="text-lg font-semibold">{product.quantity}</span>
        <button
          onClick={() => handleQuantity("increment", product._id)}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
      <button
        onClick={() => handleRemove(product._id)}
        className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartDetails;
