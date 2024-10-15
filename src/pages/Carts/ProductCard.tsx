/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import Modal from "./CartsDemo.tsx/Modal";
import { Flex, Rate } from "antd";

const ProductCart = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}
      <div>
        <div
          onClick={() => handleShowModal(product)}
          className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
        >
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {product.productName}
            </h3>
            <p className="text-gray-700 mb-4 flex-grow">
              {product?.description}
            </p>
            <div className="flex  text-gray-700 mb-4 flex-grow">
              <p className="text-lg font-bold text-black">Rating:</p>
              <Flex className="pl-2" gap="small">
                <Rate defaultValue={product?.rating} />
              </Flex>
            </div>
            <p className="text-lg font-bold text-red-600 mb-4">
              Price : {product.price}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="bg-purple-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-800 transition duration-300 shadow-md hover:shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
