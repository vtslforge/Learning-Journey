import { useContext } from "react";
import UserContext from "./13ContextApi/ContextCore";

const Home = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <p>User data not available</p>;
  }

  const { user } = context; // destructure the objects
  const { num, setNum } = context; // using state from ContextCore

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.class}</p>
      <p>{user.rollno}</p>
      <p>{user.school}</p>
      {/* without desctructure */}
      <p>{context.user.name}</p>
      <p>{num}</p>
      <button onClick={()=>setNum(num + 1)}>increase</button>
    </div>
  );
};

export default Home;
