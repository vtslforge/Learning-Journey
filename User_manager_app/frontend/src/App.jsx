import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home  from "./Home";
import UserManager from './UserManager';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path :"/user-manager",
    element:<UserManager/>
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App 
