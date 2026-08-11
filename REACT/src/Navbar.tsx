import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-200 h-[5vh] p-3 flex justify-start items-center gap-3">
        <Link to={"/"}>home</Link>
        <Link to={"/form"}>Form</Link>
        <Link to={"/nest"}>Nest</Link>
      </div>
    </>
  );
};

export default Navbar;
