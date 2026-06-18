import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Builder from "./Builder";
import Apitesting from "./Apitesting";
import TestOne from "./TestOne";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Builder />,
  },
  {
    path:'/api',
    element:<Apitesting/>
  },
    {
    path:'/testOne',
    element:<TestOne/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}