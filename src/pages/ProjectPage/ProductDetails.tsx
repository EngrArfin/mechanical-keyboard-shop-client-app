import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  promotion: string;
  minSpend: number;
  imageUrl: string;
}

const product: Product = {
  id: "1",
  title: "Goat Milk Saffron Soap, 100 gm",
  brand: "No Brand",
  price: 123,
  originalPrice: 500,
  discount: 75,
  rating: 263,
  promotion: "Min. spend ৳ 249",
  minSpend: 249,
  imageUrl: "/path-to-image/goat-milk-saffron-soap.jpg", // Replace with actual image URL
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  /* const handleAddToCart: React.FC = () => {
    dispatch(addToCart({ product, quantity }));
  }; */
  const handleAddToCart = (): void => {
    dispatch(addToCart({ product, quantity }));
  };

  const handleBuyNow = () => {
    // Navigate to checkout or any buy now logic
    console.log("Buying now", product.title);
  };

  return (
    <div className="product-details container">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.title} className="w-full" />
      </div>
      <div className="product-info">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-600">Brand: {product.brand}</p>
        <div className="rating">{product.rating} Ratings</div>
        <div className="price-info">
          <h2 className="text-xl text-red-500">৳ {product.price}</h2>
          <span className="line-through text-gray-400">
            ৳ {product.originalPrice}
          </span>
          <span className="text-green-600 ml-2">-{product.discount}%</span>
        </div>
        <div className="promotion">
          <p className="text-green-600">Promotions: {product.promotion}</p>
        </div>
        <div className="quantity mt-4">
          <label htmlFor="quantity" className="mr-2">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border p-1 w-12"
          />
        </div>
        <div className="actions mt-4">
          <button
            onClick={handleBuyNow}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
