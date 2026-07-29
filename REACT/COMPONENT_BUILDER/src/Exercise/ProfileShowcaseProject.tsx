import { useState } from "react"


const ProfileShowcaseProject = () => {
    const [sname, setSname] = useState("")
    const [sid, setSid] = useState("")

    const handle_sid = (e: any) => {
        if (e.target.value) {
            setSid(e.target.value)
        } else {
            setSid("")
        }
    }

    const handle_sname = (e: any) => {
        if (e.target.value) {
            setSname(e.target.value)
        } else {
            setSname("")
        }
    }
    return (
        <div>
            <h1>showcasing the profile cards of students</h1>
            <input value={sname} onChange={handle_sname} className="border" placeholder="enter student name" type="text" id="sinput" />
            <label htmlFor="sinput"></label>
            <input value={sid} onChange={handle_sid} className="border" type="text" placeholder="enter student id" id="sid" />
            <label htmlFor="sid"></label>
            <hr />
            <p>{sname}</p>
            <p>{sid}</p>
        </div>
    )
}

export default ProfileShowcaseProject

// get value from user
// send value as a prop to /studentdata