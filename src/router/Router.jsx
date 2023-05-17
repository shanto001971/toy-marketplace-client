import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/HomePage/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },

      ]
    },
  ]);