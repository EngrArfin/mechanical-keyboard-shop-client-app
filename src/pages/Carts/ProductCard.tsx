// ProductCart.tsx
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import { Modal, Rate } from "antd";
import { Product } from "../../type"; // Import the Product type

const ProductCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleShowModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative">
      {showModal && selectedProduct && (
        <Modal visible={showModal} onCancel={handleCloseModal}>
          <div>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <Rate value={selectedProduct.rating} disabled />
          </div>
        </Modal>
      )}

      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
          <Rate value={product.rating} disabled className="mb-4" />
          <p className="text-lg font-bold text-red-600 mb-4">
            ${product.price}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
