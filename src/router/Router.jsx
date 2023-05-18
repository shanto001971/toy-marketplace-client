import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/HomePage/Home";
import Login from "../Components/LoginPage/Login";
import Ragister from "../Components/ragister/Ragister";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Ragister></Ragister>
        },
       

      ]
    },
  ]);