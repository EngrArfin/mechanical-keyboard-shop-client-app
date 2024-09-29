// src/pages/CartPage.tsx
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

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.products
  );

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
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Divider style={{ borderColor: "#7cb305" }}>Shoping Cart</Divider>
      <div style={{ display: "flex" }}>
        <div>
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
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      <img
                        alt={product.productName}
                        src={product.image}
                        style={{
                          objectFit: "cover",
                          height: "100px",
                          width: "100px",
                          borderRadius: "8px",
                          marginRight: "60px",
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: 0 }}>{product.productName}</h4>
                        <p style={{ margin: "4px 0" }}>
                          Price: ${product.price.toFixed(2)}
                        </p>

                        <div style={{ display: "flex" }}>
                          <div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Button
                                onClick={() => handleDecrease(product._id)}
                                disabled={product.availableQuantity === 1}
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
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <div style={{ marginLeft: "30%" }}>
                            <Button
                              type="primary"
                              danger
                              onClick={() => handleRemove(product._id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
        <hr />

        {/* part-2 */}
        <div style={{ marginLeft: 50 }}>
          {cartItems.length > 0 && (
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <div>
                <h3>Total Quantity: {totalQuantity}</h3>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
              </div>
              <div>
                <Button onClick={handleClearCart} danger>
                  Clear Cart
                </Button>
                <Button style={{ marginLeft: 10 }}>
                  <NavLink to="/checkout">Proceed to Checkout</NavLink>
                </Button>
              </div>
            </div>
          )}
          {cartItems.length === 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "18px",
                color: "#888",
              }}
            >
              <p>Your cart is empty!</p>
              <NavLink to="/product">
                <Button type="primary">Shop Now</Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
