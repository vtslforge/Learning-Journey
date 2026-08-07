import Pfunction from "./Pfunction";

const Cfunction = () => {
  const handleAlert = (uname: string, age: number): void => {
    alert(`the name is ${uname} and age is ${age}`);
  };

  const handleConsole = (usename: string): void => {
    console.log(usename);
  };

  return (
    <div>
      <p>To display user data</p>
      <Pfunction
        fname={handleAlert}
        uname="Aman"
        age={31}
        clgUsername={handleConsole}
        usename="software eng"
      />
      <Pfunction
        fname={handleAlert}
        uname="Naman"
        age={34}
        clgUsername={handleConsole}
        usename="doctor"
      />
      <Pfunction
        fname={handleAlert}
        uname="Kamal"
        age={43}
        clgUsername={handleConsole}
        usename="handler"
      />
      <Pfunction
        fname={handleAlert}
        uname="Oaam"
        age={12}
        clgUsername={handleConsole}
        usename="shopkeeper"
      />
    </div>
  );
};

export default Cfunction;
