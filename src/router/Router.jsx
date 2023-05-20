import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/HomePage/Home";
import Login from "../Components/LoginPage/Login";
import Ragister from "../Components/ragister/Ragister";
import AddToy from "../Components/AddToy/AddToy";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllToy from "../Components/AllToy/AllToy";
import MyToy from "../Components/MyToy/MyToy";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import ViewDetlis from "../Components/ViewDetlis/ViewDetlis";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Components/BlogSection/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
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
        element: <AllToy />
      },
      {
        path: "/mytoy",
        element: <PrivetRoute>
          <MyToy />
        </PrivetRoute>
      },
      {
        path: "/update/:id",
        element: <UpdateProduct />
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/alltoys/:id",
        element: <PrivetRoute>
          <ViewDetlis />
        </PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },


    ]
  },
]);