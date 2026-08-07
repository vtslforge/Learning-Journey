import type { RefObject } from "react";

type Props = {
  inputRef: RefObject<HTMLInputElement | null>;
};

const Ref_as_prop = ({inputRef}:Props) => {
  return (
    <div>
      <input type="text" className="border" ref={inputRef}  />
    </div>
  );
};

export default Ref_as_prop;
 