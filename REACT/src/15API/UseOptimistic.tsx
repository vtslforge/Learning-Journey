import { useOptimistic, useState, useEffect } from "react";

type Skill = {
  id: number;
  name: string;
};

export default function UseOptimistic() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [name, setName] = useState("");
  const [optSkills, setOptSkills] = useOptimistic<Skill[]>(skills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const resp = await fetch("http://localhost:3000/skills");
    const data: Skill[] = await resp.json();
    setSkills(data);
  };

  function sleep(ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const addSkill = async () => {
    const id = Math.random() * 100000;
    setOptSkills((prev) => [...prev, { name, id }]);
    let resp = await fetch("http://localhost:3000/skills", {
      method: "post",
      body: JSON.stringify({ name, id }),
    });
    await sleep(3000);
    resp = await resp.json();

    console.log("apple", resp);

    if (resp) {
      getSkills();
    }
  };

  return (
    <div>
      <form action={addSkill}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="enter skill"
        />
        <button>Add </button>
      </form>
      {optSkills.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
