import { NavLink, Outlet } from "react-router";

const MainNest = () => {
  return (
    <div className="space-x-6">
      <p>This is nested route example</p>
      <NavLink to={"n1"}>N1</NavLink>
      <NavLink to={"n2"}>N2</NavLink>
      <NavLink to={"n3"}>N3</NavLink>
      <Outlet />  
      {/* outlet here is used to display the content of nested route like n1 n2 n3 without it you won't get the content */}
    </div>
  );
};

export default MainNest;
