import { useState } from "react";
import ProfileShowcaseProject from "./ProfileShowcaseProject";

const Home = () => {
  const [sname, setSname] = useState("");
  const [sid, setSid] = useState("");
  return (
    <div>
      <p>welcome students</p>
      <ProfileShowcaseProject
      sid={sid}
      sname={sname}
      setSid={setSid}
      setSname={setSname}
      />
    </div>
  );
};

export default Home;

// task to lift up the state - undone