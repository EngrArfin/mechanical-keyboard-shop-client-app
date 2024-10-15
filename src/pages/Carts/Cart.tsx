/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
/* import getAllProducts from "../../type/products"; */
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummery";
/* import CardProject from "../ProjectPage/CardProject";
import { TProductCardProps } from "../../type"; */

const Cart = () => {
  /* const products = getAllProducts(); */

  const products = useAppSelector((store) => store.cart.products);
  /* const allProducts = useAppSelector((store) => store.products.allProducts); */
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <div>
              <p className="text-2xl text-red-500"> not product found</p>
              <Link className="btn text-sky-500" to="/">
                See Product
              </Link>
            </div>
          )}
        </div>
        <OrderSummary />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Add More Products</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5">
          {/* {allProducts.length ? (
            allProducts.map((product: TProductCardProps) => (
              <CardProject key={product._id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
