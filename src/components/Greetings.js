import { useState } from "react";
import Output from "./Output";

export default function Greetings() {
    const [changedText, setChangedText] = useState(false);

    function handleChangeText() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText ? <Output>It's good to see you!</Output> : <p>Changed!</p>}
            <button onClick={handleChangeText}>Change Text!</button>
        </div>
    )
}