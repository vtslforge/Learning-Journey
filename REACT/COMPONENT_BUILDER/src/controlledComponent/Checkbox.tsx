import { useState } from "react";

const Checkbox = () => {
    const [skill, setskill] = useState<string[]>([])
    const handleSkill = (e: any) => {
        console.log(e.target.value)
        if (e.target.checked) {
            setskill([...skill, e.target.value]) // spread operator to print multiple value jo pahle ke hai vo bhe aur jo new value hai vo bhe 
        }
        else {
            setskill(skill.filter((item) => item !== e.target.value))
        }
    }
    return (
        <div className="flex flex-col ">
            <p>Select the option</p>
            <div>
                <input onChange={handleSkill} type="checkbox" id="java" value="java" />
                <label htmlFor="java">Java</label>

                <input onChange={handleSkill} type="checkbox" id="python" value="python" />
                <label htmlFor="python">Python</label>

                <input onChange={handleSkill} type="checkbox" id="cpp" value="cpp" />
                <label htmlFor="cpp">C++</label>

                <input onChange={handleSkill} type="checkbox" id="lua" value="lua" />
                <label htmlFor="lua">Lua</label>

                <h1>{skill.toString()}</h1>
            </div>
        </div>
    );
};

export default Checkbox;