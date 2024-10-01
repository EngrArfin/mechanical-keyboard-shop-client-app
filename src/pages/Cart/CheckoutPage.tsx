import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Card, Button, Divider, Input } from "antd";
import { NavLink } from "react-router-dom";

const CheckoutPage = () => {
  const { totalPrice } = useSelector((state: RootState) => state.products);

  // Dynamic shipping calculation (e.g., free shipping for orders over 1000 TK)
  const shipping = totalPrice > 1000 ? 0 : 48;
  const payableTotal = totalPrice + shipping;

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <Divider style={{ borderColor: "#7cb305" }}>Checkout</Divider>
      <Card>
        <Divider />

        <h3>Payment Details</h3>
        <div style={{ marginBottom: "20px" }}>
          <Input placeholder="Enter your card number" />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Input placeholder="Expiration date" style={{ width: "50%" }} />
          <Input placeholder="CVC" style={{ width: "50%" }} />
        </div>

        <Divider />

        <h3>Order Summary</h3>
        <p>
          <strong>Subtotal:</strong> {totalPrice.toFixed(2)} TK
        </p>
        <p>
          <strong>Shipping:</strong>{" "}
          {shipping === 0 ? "Free" : `${shipping} TK`}
        </p>
        <Divider />
        <p>
          <strong>Payable Total:</strong> {payableTotal.toFixed(2)} TK
        </p>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" style={{ marginRight: "10px" }}>
            Pay Now
          </Button>
          <Button type="default">
            <NavLink to="/cart">Go Back to Cart</NavLink>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CheckoutPage;
