// C1.tsx

import type { Dispatch, SetStateAction } from "react";

type PropText = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const C1 = ({ text, setText }: PropText) => {
  return (
    <div>
        <p>this is c1</p>
      <button onClick={() => setText("text getting changed from parent state")}>Change</button>
      <p>{text}</p>
    </div>
  );
};

export default C1;