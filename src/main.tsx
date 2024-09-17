import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.tsx";
 */ import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./index.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout style={{ minHeight: "100vh", backgroundColor: "#00bfae" }}>
      <Content>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Content>
    </Layout>
  </React.StrictMode>
);
