import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  return (
    <div className=" w-full h-full  bg-gradient-to-r from-purple-900 via-teal-900 to-purple-900 p-4 space-y-4 ">
      {" "}
      {/* lg:w-1/2  */}
      <h1 className="text-3xl font-bold text-white">-Order Summary--</h1>
      <p className="text-sm text-white">Selected Items: {selectedItems}</p>
      <p className="text-sm text-white">
        Total Price: ${totalPrice.toFixed(2)}
      </p>
      <p className="text-sm text-white">
        Tax ({taxRate * 100}%): ${tax.toFixed(2)}
      </p>
      <h3 className="text-xl font-semibold text-white">
        Total Amount: {grandTotal.toFixed(2)} TK
      </h3>
      <button
        onClick={() => dispatch(clearCart())}
        className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center justify-between"
      >
        <span>Clear Cart</span>
        <Trash2 />
      </button>
      <Link
        to="/checkout"
        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center justify-between"
      >
        <span>Proceed to Checkout</span>
        <CreditCard />
      </Link>
    </div>
  );
};

export default OrderSummary;
