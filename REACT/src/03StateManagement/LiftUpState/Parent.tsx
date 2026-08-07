// Parent.tsx

import { useState } from "react";
import C1 from "./C1";
import C2 from "./C2";

const Parent = () => {
  const [text, setText] = useState("hello world");

  return (
    <>
      <C1 text={text} setText={setText} />
      <C2 text={text} setText={setText} />
    </>
  );
};

export default Parent;