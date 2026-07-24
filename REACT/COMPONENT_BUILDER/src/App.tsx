import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Jsx_exercise from "./Exercise/Jsx_exercise";
// import Digit_counter from "./StateManagement/Digit_counter";
// import Toggle_color_btn from "./StateManagement/Toggle_color_btn";
// import Live_name_input from "./StateManagement/Live_name_input";
import Toggle_components from "./StateManagement/Toggle_components";
import User from "./Props_in_react/User";
import Main from "./Props_in_react/myCompany/Main";
// import Input from "./controlledComponent/InputOnchange";
import Checkbox from "./controlledComponent/Checkbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exe",
    element: <Jsx_exercise />,
  },
  {
    path: "/state",
    element: <Toggle_components />,
  },
  {
    path: "/prop",
    element: <User name="vats" roll="32" />,
  },
  {
    path: "/propapp",
    element: <Main />,
  },
  {
    path: "/input",
    element: <Checkbox/>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
