import Card from "./Card";

type props = {
  sname: string;
  sid: string;
  setSname: React.Dispatch<React.SetStateAction<string>>;
  setSid: React.Dispatch<React.SetStateAction<string>>;
};
const ProfileShowcaseProject = ({ sname, sid, setSname, setSid }: props) => {
  const handle_sid = (e: any) => {
    if (e.target.value) {
      setSid(e.target.value);
    } else {
      setSid("");
    }
  };

  const handle_sname = (e: any) => {
    if (e.target.value) {
      setSname(e.target.value);
    } else {
      setSname("");
    }
  };
  return (
    <div>
      <h1>showcasing the profile cards of students</h1>
      <input
        value={sname}
        onChange={handle_sname}
        className="border"
        placeholder="enter student name"
        type="text"
        id="sinput"
      />
      <label htmlFor="sinput"></label>
      <input
        value={sid}
        onChange={handle_sid}
        className="border"
        type="text"
        placeholder="enter student id"
        id="sid"
      />
      <label htmlFor="sid"></label>
      <hr />
      <p>From Profile : {sname}</p>
      <p>From Profile : {sid}</p>
      {/* here recieving from Card component */}
      <Card sname={sname} sid={sid} />  
    </div>
  );
};

export default ProfileShowcaseProject;

