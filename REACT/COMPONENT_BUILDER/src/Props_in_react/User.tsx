type props = {
  name: string;
  roll: string;
};

const User = (prop: props) => {
  return (
    <div>
      <p>user name: {prop.name}</p>
      <p>user roll: {prop.roll}</p>
    </div>
  );
};

export default User;
