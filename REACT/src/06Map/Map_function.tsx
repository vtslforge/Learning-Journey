import Main from "./Main";
import NestedMap from "./NestedMap";

const Map_function = () => {
  const people = [
    {
      name: "Vatsalya",
      age: 22,
      city: "Lucknow",
    },

    {
      name: "Rahul",
      age: 25,
      city: "Bangalore",
    },

    {
      name: "Priya",
      age: 24,
      city: "Delhi",
    },
  ];
  return (
    <div>
      <p>Printing the values of aray with map</p>
      <table className="border">
        <thead>
          {people.map((User) => (
            <tr key={User.age}>
              <td>{User.name}</td>
              <td>{User.city}</td>
              <td>{User.age}</td>
            </tr>
          ))}
        </thead>
      </table>
      <div>
        {people.map((list) => (
          <div key={list.name}>
            <Main list={list} />
          </div>
        ))}
      </div>
      <NestedMap />
    </div>
  );
};

export default Map_function;
