import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AllProperites from "./Home/ProperitesPage/AllProperites";
import AllProperitesDetails from "./Home/ProperitesDetails/AllProperitesDetails";
import AllContact from "./Home/ContactPage/AllContact";
import AllProductPage from "./Home/ProductPage/AllProductPage";
import AllShopingPage from "./Home/ShopingPage/AllShopingPage";
import AllCart from "./cart/AllCart";
import { CartProvider } from "react-use-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "properites",
    element: <AllProperites />,
  },
  {
    path: "Property Details",
    element: <AllProperitesDetails />,
  },
  {
    path: "Contact Us",
    element: <AllContact />,
  },
  {
    path: "Product",
    element: <AllProductPage />,
  },
  {
    path: "shoping",
    element: <AllShopingPage />,
  },
  {
    path: "cart",
    element: <AllCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
