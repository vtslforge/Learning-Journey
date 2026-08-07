

type Person = {
  name: string;
  city: string;
  age: number;
};

type MainProps = {
  list: Person;
};

const Main = ({ list }: MainProps) => {
  return (
    <div>
      <div>
        <h3>hello : {list.name}</h3>
        <h3>hello : {list.age}</h3>
        <h3>hello : {list.city}</h3>
      </div>

    </div>
  );
};

export default Main;
