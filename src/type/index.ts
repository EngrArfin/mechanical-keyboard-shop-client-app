/* import { Key } from "react";
 */
export type TProductCardProps = {
  _id: string;
  productId: string;
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
  quantity: number;
  name: string; // Add this line if needed
  description: string; // Add this line if needed
};
export type TAllProductDataProps = {
  id: string; // Ensure this is a string
  _id: string;
  name: string; // Name of the product
  description: string; // Product description
  price: string; // Price as a string
  image: string; // URL of the product image
  ratings: number; // Ratings as a number
};

export interface Product {
  id: string; // Make sure the id is a string
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number; // Assuming the product has a rating property
}
