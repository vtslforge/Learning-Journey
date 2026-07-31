import { useState } from "react"

const Input = () => {
    const [input, setinput] = useState("")
    const [txtdisplay, settxtdisplay] = useState("Enter Input")
    return (
        <div className="flex flex-col w-60 gap-5">
            <p>Enter the values</p>
            <input value={input} onChange={(e) => setinput(e.target.value)} className="border" type="text" placeholder="enter username" />
            <button onClick={() => settxtdisplay(input)}>sumbit</button>
            <button onClick={() => { setinput(""); settxtdisplay("no input"); }}>clear value</button>
            <p>{txtdisplay}</p>
        </div>
    )
}

export default Input