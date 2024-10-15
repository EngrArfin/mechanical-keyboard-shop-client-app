import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart } from "../../redux/features/cartSlice";

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
        padding: "10px",
        borderRadius: "8px",
      }}
      className="lg:w-80 w-full h-full rounded"
    >
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-white">Order Summary</h1>
        <p className="text-sm text-white mt-2">
          Selected Items: {selectedItems}
        </p>
        <p className="text-sm text-white mt-2">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
        <p className="text-sm text-white mt-2">
          Tax ({taxRate * 100}%): ${tax.toFixed(3)}
        </p>
        <h3 className="text-xl font-semibold text-white mt-4">
          Total Amount : {grandTotal.toFixed(3)} TK
        </h3>
      </div>
      <div className="px-4 pb-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #f44336, #e57373)", // Professional red color
            color: "#ffffff",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "background 0.3s ease",
          }}
          className="w-full text-xs flex justify-between items-center mb-4 hover:opacity-80"
        >
          <span className="font-semibold">Clear Cart</span>
          <Trash2 className="inline" width={20} height={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #4caf50, #81c784)", // Professional green color
            color: "#ffffff",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "background 0.3s ease",
          }}
          className="w-full text-xs flex justify-between items-center hover:opacity-80"
        >
          <span className="font-semibold">Proceed to Checkout</span>
          <CreditCard className="inline" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
