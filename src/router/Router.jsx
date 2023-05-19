import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/HomePage/Home";
import Login from "../Components/LoginPage/Login";
import Ragister from "../Components/ragister/Ragister";
import AddToy from "../Components/AddToy/AddToy";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllToy from "../Components/AllToy/AllToy";
import MyToy from "../Components/MyToy/MyToy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Ragister></Ragister>
      },
      {
        path: "/addtoy",
        element: <PrivetRoute>
          <AddToy />
        </PrivetRoute>
      },
      {
        path: "/allToy",
        element: <AllToy/>
      },
      {
        path: "/mytoy",
        element: <MyToy/>
      },


    ]
  },
]);