import { useState } from "react"

export default function Greetings() {
    const [changedText, setChangedText] = useState(false);

    function handleChangeText() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText ? <p>It's good to see you!</p> : <p>Changed!</p>}
            <button onClick={handleChangeText}>Change Text!</button>
        </div>
    )
}