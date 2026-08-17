import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import Navbar from "./Navbar";
// import UseActionState_validation from "./05controlledComponent/UseActionState_validation";
import UseAPi from "./15API/UseAPi";

// Lazy loaded components
const Form = lazy(() => import("./09useFormStatus/Form"));
const Get_m2 = lazy(() => import("./15API/Get/Get_m2"));

const MainNest = lazy(() => import("./14NestedRoute/MainNest"));
const NestOne = lazy(() => import("./14NestedRoute/NestOne"));
const NestTwo = lazy(() => import("./14NestedRoute/NestTwo"));
const Nestthree = lazy(() => import("./14NestedRoute/Nestthree"));

const Digit_counter = lazy(() =>
  import("./03StateManagement/Digit_counter")
);

const Live_name_input = lazy(() =>
  import("./03StateManagement/Live_name_input")
);

const Toggle_color_btn = lazy(() =>
  import("./03StateManagement/Toggle_color_btn")
);

const Name = lazy(() => import("./01component/Name"));
const Name2 = lazy(() => import("./01component/Name2"));

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<p>Loading.....</p>}>
        <Routes>
          {/* Normal loading */}
          <Route
            path="/"
            element={<UseAPi />}
          />

          {/* Lazy loaded routes */}
          <Route path="/form" element={<Form />} />

          <Route path="/api" element={<Get_m2 />} />

          {/* Redirect */}
          <Route path="/*" element={<Navigate to="/" />} />

          {/* Nested routes */}
          <Route path="/nest" element={<MainNest />}>
            <Route path="n1" element={<NestOne />} />
            <Route path="n2" element={<NestTwo />} />
            <Route path="n3" element={<Nestthree />} />
          </Route>

          {/* Route prefix */}
          <Route path="/user">
            <Route path="admin" element={<Digit_counter />} />
            <Route path="login" element={<Live_name_input />} />
            <Route path="signup" element={<Toggle_color_btn />} />
            <Route path="signin" element={<Name />} />
            <Route path="reset" element={<Name2 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;