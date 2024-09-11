import { Button } from "antd";
import photo4 from "../../assets/images/card1.jpg";

const ProductDetails = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1" }}>
          <img src={photo4} alt="" style={{ width: "100%", height: "50%" }} />
        </div>
        <div style={{ flex: "1", paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            Digital Mechanical Keyboard
          </h1>
          <p style={{ color: "#4A5568" }}>
            Brand: A4 Tech {/* product.brand */}
          </p>
          <div style={{ marginTop: "10px" }}>
            {/* product.rating */} 5*** Ratings
          </div>
          <div style={{ marginTop: "10px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "#EF4444" }}>
              ৳ 2500 {/* product.price */}
            </h2>
            <span style={{ textDecoration: "line-through", color: "#A0AEC0" }}>
              ৳ 3000 % {/* product.originalPrice */}
            </span>
            <span style={{ color: "#16A34A", marginLeft: "8px" }}>
              25% {/* -product.discount% */}
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "#16A34A" }}>Promotions: product.promotion</p>
          </div>
          <div style={{ marginTop: "16px" }}>
            <label htmlFor="quantity" style={{ marginRight: "8px" }}>
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value="quantity"
              min={1}
              /* onChange={(e) => setQuantity(parseInt(e.target.value))} */
              style={{
                border: "1px solid #CBD5E0",
                padding: "4px",
                width: "48px",
              }}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <Button
              /* onClick={handleBuyNow} */
              style={{
                backgroundColor: "#3B82F6",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                marginRight: "16px",
              }}
            >
              Buy Now
            </Button>
            <Button
              /* onClick={handleAddToCart} */
              style={{
                backgroundColor: "#F59E0B",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
