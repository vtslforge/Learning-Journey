import { useState } from "react";

const Arraystate = () => {
  // Array of elements
  const [empdata, setempdata] = useState(["naman", "kamal", "khushi", "Karan"]);

  const handleLastnameUpdate = () => {
    // Change last array element
    setempdata([...empdata.slice(0, -1), "Rahul"]);
  };

  // Array of objects
  const [studata, setStudata] = useState([
    { name: "naman", age: "23", work: "student" },
    { name: "kamal", age: "28", work: "worker" },
    { name: "khushi", age: "32", work: "marketing" },
  ]);

  const handleStuAge = () => {
    // Change last object's age
    const newData = [...studata];

    newData[studata.length - 1] = {
      ...newData[studata.length - 1],
      age: "20",
    };

    setStudata(newData);
  };

  const handleStuAge2 = () => {
    // Change 2nd object's age
    const newData = [...studata];

    newData[1] = {
      ...newData[1],
      age: "20",
    };

    setStudata(newData);
  };

  const handleStuAge3 = () => {
    // Find object using known data and update it
    setStudata(
      studata.map(
        (student) =>
          student.name === "khushi" && student.age === "32"
            ? { ...student, age: "20" } // Set new age
            : student, // Keep other objects unchanged
      ),
    );
  };

  return (
    <div>
      <h1>Emp data showcase</h1>
      <button onClick={handleStuAge}>change</button>
      <button onClick={handleStuAge3}>change</button>
      <button onClick={handleStuAge2}>change</button>
      <button onClick={handleLastnameUpdate}>change</button>
      <p>
        {empdata.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </p>
      <p>list of student data ------------------------------</p>
      <p>
        {studata.map((sitems, index) => (
          <div key={index} className="bg-amber-200">
            <h1>{sitems.name}</h1>
            <h1>{sitems.age}</h1>
            <h1>{sitems.work}</h1>
          </div>
        ))}
      </p>
    </div>
  );
};

export default Arraystate;
