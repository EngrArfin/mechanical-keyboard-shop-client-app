export type TProductCardProps = {
  _id: string; // Add this line
  productId: string; // Ensure this is a string
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
  quantity: number;
};
export type TAllProductDataProps = {
  _id: string;
  productId: string;
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
  quantity: number;
};
