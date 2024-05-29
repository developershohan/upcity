import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Layout from "../components/layout/Layout";

// create router
const router = createBrowserRouter([

    {
        element:<Layout/>,
        children:[

            {
                path: "/",
                element: <Home />,
              },
              {
                path: "/about",
                element: <About />,
              },
        ]
    }




]);

export default router;
