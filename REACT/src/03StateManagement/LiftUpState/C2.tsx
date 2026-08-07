// C2.tsx

import type { Dispatch, SetStateAction } from "react";

type PropText = {
  text: string;
  setText?: Dispatch<SetStateAction<string>>;
};

const C2 = ({ text }: PropText) => {
  return (
    <div>
        <p>this is c2</p>
      <p>{text}</p>
    </div>
  );
};

export default C2;