import { KeyboardProps } from "../interfaces";
import KeyboardRow from "./KeyboardRow";

const Keyboard = ({rows}: KeyboardProps) => {

    return (
        <>
        {rows.map((row, index) => (
            <KeyboardRow key={index} keys={row.keys} />
        ))}
        </>
    )
}

export default Keyboard;

