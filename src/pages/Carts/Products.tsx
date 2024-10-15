// Products.tsx
import { useGetAllproductsQuery } from "../../redux/api/api";
import { TAllProductDataProps } from "../../type"; // Import TAllProductDataProps
import ProductCart from "./ProductCard";

const Products = () => {
  const { data, isLoading } = useGetAllproductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const { data: allproducts } = data || { data: [] }; // Handle possible undefined data

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {allproducts.map((allproduct: TAllProductDataProps) => (
          <ProductCart
            key={allproduct.id} // Ensure id is a string
            product={{
              id: allproduct.id, // Use the id
              name: allproduct.productName,
              description: allproduct.description,
              price: allproduct.price,
              image: allproduct.image,
              rating: allproduct.rating,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
