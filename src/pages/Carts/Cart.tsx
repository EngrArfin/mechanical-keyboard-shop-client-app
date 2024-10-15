/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllproductsQuery } from "../../redux/api/api";
import CartDetails from "./CartDetails";
import OrderSummery from "./OrderSummery";

const Cart = () => {
  const { data, isLoading } = useGetAllproductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const { data: products } = data;

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500"> not product found</p>
          )}
        </div>
        <OrderSummery />
      </div>
    </div>
  );
};

export default Cart;
