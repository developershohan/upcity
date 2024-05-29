import Home from "../page/home/Home";
import About from "../page/about/About";

// create public route
export const publicRoute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
