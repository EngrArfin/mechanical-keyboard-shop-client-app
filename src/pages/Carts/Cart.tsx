import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import CartDetails from "./CartDetails";
import ShipingAddress from "../UserPage/Payment/ShipingAddress";
import OrderSummary from "./OrderSummery";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);

  return (
    <div className="w-full mt-10 px-4 lg:px-16 mx-auto space-y-1">
      <div className="flex flex-col lg:flex-row lg:space-x-2 ">
        {/* Products List */}
        <div className="flex-1 space-y-4">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <div className="text-center">
              <p className="text-2xl text-red-500">No products found</p>
              <Link className="btn text-sky-500" to="/">
                See Products
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar for Shipping Address and Order Summary */}
        <div className="lg:w-1/2 flex flex-col ">
          <ShipingAddress />
          <hr />
          <OrderSummary />
        </div>
      </div>

      {/* Additional Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Add More Products</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Render more products or placeholders here */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
