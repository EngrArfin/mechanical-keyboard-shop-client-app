import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.tsx";
 */ import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/features/store.ts";
import "./index.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout style={{ minHeight: "100vh", backgroundColor: "#00bfae" }}>
      <Content
        style={{
          borderRadius: "8px",
          background:
            "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
          color: "#ffffff", // White text to contrast with dark background
          boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)", // Subtle shadow for depth
        }}
      >
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Content>
    </Layout>
  </React.StrictMode>
);
