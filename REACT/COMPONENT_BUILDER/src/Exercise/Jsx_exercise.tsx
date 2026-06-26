import { useState } from "react";

const Jsx_exercise = () => {
  // return name
  function UserName(): { uname: string } {
    return {
      uname: "vatsalya",
    };
  }

  // function  for click alert event
  function ClickEvent() {
    alert("Hi this is me clicked");
  }

  // printing a variable
  const uname = "vatsalya singh";

  // argument passing
  const [myname, setMyName] = useState("The name");
  function MyNameArg(name: string) {
    return name;
  }

  return (
    <div className="flex justify-center items-center  flex-col  h-screen w-screen">
      <h1>My name is {UserName().uname} </h1>
      <h1>My name is 2 is {uname} </h1>
      <button className="border p-3 rounded-2xl h-20" onClick={ClickEvent}>
        Click me
      </button>
      <button onClick={() => setMyName("Vatsalya Singh")}>click</button>
      <p>{MyNameArg(myname)}</p>
    </div>
  );
};

export default Jsx_exercise;
