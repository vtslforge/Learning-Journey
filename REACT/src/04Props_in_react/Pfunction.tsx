type revprop = {
  fname: (uname: string, age: number) => void;
  clgUsername: (usename: string) => void;
  uname: string;
  age: number;
  usename: string;
};

const Pfunction = ({ fname, uname, age, clgUsername, usename }: revprop) => {
  return (
    <div>
      <button onClick={() =>{ fname(uname, age); clgUsername(usename)}} className="border bg-amber-500">click me</button>
    </div>
  );
};

export default Pfunction;
