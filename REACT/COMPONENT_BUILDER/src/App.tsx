import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Jsx_exercise from "./Exercise/Jsx_exercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/exe",
    element: <Jsx_exercise />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
