import Layout from "../components/layout/Layout";
import Cart from "../page/Cart";
import Checkout from "../page/Checkout";
import Home from "../page/home/Home";
import Products from "../page/Products/Products";

// create public route
export const publicRoute = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
];
