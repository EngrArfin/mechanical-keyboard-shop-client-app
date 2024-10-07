import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/features/productSlice";
import { Button, List, Card, Divider } from "antd";
import { NavLink } from "react-router-dom";
import ReviewRelatedProduct from "../Share/ReviewRelatedProduct";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.products
  );

  const shipping = totalPrice > 1000 ? 0 : 48;
  const payableTotal = totalPrice + shipping;

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <Divider style={{ borderColor: "#7cb305" }}>Shopping Cart</Divider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Cart Items Section */}
          <div style={{ flex: 2, width: "100%" }}>
            {cartItems.length > 0 ? (
              <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={cartItems}
                renderItem={(product) => (
                  <List.Item>
                    <Card
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <img
                            alt={product.productName}
                            src={product.image}
                            style={{
                              objectFit: "cover",
                              height: "100px",
                              width: "100px",
                              borderRadius: "8px",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <div>
                          <h4 style={{ margin: 0 }}>{product.productName}</h4>
                          <p style={{ margin: "4px 0" }}>
                            Price: {product.price.toFixed(2)} TK
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "10px",
                            }}
                          >
                            <Button
                              onClick={() => handleDecrease(product._id)}
                              disabled={product.quantity === 1}
                              style={{ margin: "0 5px" }}
                            >
                              -
                            </Button>
                            <span style={{ margin: "0 10px" }}>
                              {product.quantity}
                            </span>
                            <Button
                              onClick={() => handleIncrease(product._id)}
                              disabled={
                                product.quantity >= product.availableQuantity
                              }
                              style={{ margin: "0 5px" }}
                            >
                              +
                            </Button>
                            <Button
                              type="primary"
                              danger
                              style={{ marginLeft: "10px" }}
                              onClick={() => handleRemove(product._id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "18px",
                  color: "#888",
                }}
              >
                <p>Your cart is empty!</p>
                <NavLink to="/products">
                  <Button type="primary">Shop Now</Button>
                </NavLink>
              </div>
            )}
          </div>

          {/* Shipping and Checkout Section */}
          <div style={{ flex: 1, width: "100%", marginTop: "20px" }}>
            {cartItems.length > 0 && (
              <>
                <Card style={{ marginBottom: "20px", width: "100%" }}>
                  <h3>Shipping Address (Home)</h3>
                  <p>
                    <strong>Name:</strong> Arfin
                  </p>
                  <p>
                    <strong>Phone:</strong> 8801952487468
                  </p>
                  <p>
                    Sherali Bazar, Gazirchat, Shikdarbag Misdjid,
                    <br />
                    Ashulia Union, Savar, Dhaka
                  </p>
                </Card>

                <Card style={{ width: "100%" }}>
                  <h3>Checkout Summary</h3>
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
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button onClick={handleClearCart} danger>
                      Clear Cart
                    </Button>
                    <Button type="primary">
                      <NavLink to="/checkout">Proceed to Checkout</NavLink>
                    </Button>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>

      <ReviewRelatedProduct />
    </div>
  );
};

export default CartPage;
