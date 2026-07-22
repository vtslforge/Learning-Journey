// Parent of Emp
// Passes props (name, salary) to Emp

import PropJSX from "../PropJSX";
import Emp from "./Emp";

const Users = () => {
  return (
    <div>
      <div>
        <Emp name="Vatsalya singh" salary={4242452} hobbies="Gaming" />
        <Emp name="Utkarsh singh" salary={23452345} />
        <Emp name="Ravindra singh" salary={262345} />
      </div>
      <hr></hr>
      <div>
        <PropJSX>
            <p>Hello employies</p>
            <p>Welcome to the list</p>
        </PropJSX>
      </div>
    </div>
  );
};

export default Users;
