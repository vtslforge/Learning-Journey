// Child component
// Receives props and displays the UI

type EmpData = {
  name: string;
  salary: number;
  hobbies?:string
};

const Emp = ({ name, salary, hobbies="not specified" }: EmpData) => {
  return (
    <div>
      <p>{name}</p>
      <p>{salary}</p>
      <p>{hobbies}</p>
    </div>
  );
};

export default Emp;
