export type TProductCardProps = {
  _id: string; // Add this line
  productId: string; // Ensure this is a string
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
};

export type TMovie = {
  _id: string;
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  director: string;
  cast: string;
  slug: string;
  viewCount: number;
  totalRating: number;
  isDeleted: boolean;
  image: string;
};

export interface CartItem {
  id: number; // Product ID
  name: string; // Product Name
  price: number; // Product Price
  img: string; // Product Image URL
  quantity: number; // Product Quantity
}
