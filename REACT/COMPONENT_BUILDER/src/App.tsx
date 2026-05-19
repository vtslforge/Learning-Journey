import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Builder from "./Builder";
import Apitesting from "./Apitesting";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Builder />,
  },
  {
    path:'/api',
    element:<Apitesting/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}