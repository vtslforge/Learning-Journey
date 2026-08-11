import { Navigate, Route, Routes } from "react-router";
import Form from "./09useFormStatus/Form";
import Navbar from "./Navbar";
import Home from "./Home";
import MainNest from "./14NestedRoute/MainNest";
import NestOne from "./14NestedRoute/NestOne";
import NestTwo from "./14NestedRoute/NestTwo";
import Nestthree from "./14NestedRoute/Nestthree";
import Digit_counter from "./03StateManagement/Digit_counter";
import Live_name_input from "./03StateManagement/Live_name_input";
import Toggle_color_btn from "./03StateManagement/Toggle_color_btn";
import Name from "./01component/Name";
import Name2 from "./01component/Name2";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/*" element={<h1>Page not found</h1>} />   A normal page not found   */}
        {/* or you can also do something like this to redirect, now this will redirect to home */}
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/nest" element={<MainNest />}>
          <Route path="n1" element={<NestOne />}></Route>
          <Route path="n2" element={<NestTwo />}></Route>
          <Route path="n3" element={<Nestthree />}></Route>
        </Route>
        {/* Route prefix example */}
        <Route path="/user">
          {/* Here created group of route all of route will go through user/... */}
          <Route path="admin" element={<Digit_counter />} />
          <Route path="login" element={<Live_name_input />} />
          <Route path="signup" element={<Toggle_color_btn />} />
          <Route path="signin" element={<Name />} />
          <Route path="reset" element={<Name2 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
