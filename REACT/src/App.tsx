import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Home";
import Jsx_exercise from "./00Exercise/jsxExercise/Jsx_exercise";
// import Digit_counter from "./StateManagement/Digit_counter";
// import Toggle_color_btn from "./StateManagement/Toggle_color_btn";
// import Live_name_input from "./StateManagement/Live_name_input";
import Toggle_components from "./03StateManagement/Toggle_components";
// import User from "./Props_in_react/User";
// import Main from "./Props_in_react/myCompany/Main";
// import Input from "./controlledComponent/InputOnchange";
import Checkbox from "./05controlledComponent/Checkbox";
import HandleRadio from "./05controlledComponent/HandleRadio";
// import Dropdown from "./05controlledComponent/Dropdown";
// import Map_function from "./06Map/Map_function";
// import Main from "./UseEffect.tsx/Main";
// import Cfunction from "./04Props_in_react/Cfunction";
// import SimpleRef from "./08Ref_forRef/SimpleRef";
// import Form from "./09useFormStatus/Form";
// import Transition from "./10useTransition/Transition";
// import Parent from "./03StateManagement/LiftUpState/Parent";
// import Object from "./11Updating_object&arrat_in_state/Object";
// import Arraystate from "./11Updating_object&arrat_in_state/Arraystate";
import ActionState from "./12useActionState/ActionState";
// import ProfileShowcaseProject from "./Exercise/ProfileShowcaseProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ActionState/>,
  },
  {
    path: "/exe",
    element: <Jsx_exercise />,
  },
  {
    path: "/state",
    element: <Toggle_components />,
  },
  // {
  //   path: "/prop",
  //   element: <User name="vats" roll="32" />,
  // },
  // {
  //   path: "/propapp",
  //   element: <Main />,
  // },
  {
    path: "/input",
    element: <Checkbox />,
  },
    {
    path: "/radio",
    element: <HandleRadio />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
