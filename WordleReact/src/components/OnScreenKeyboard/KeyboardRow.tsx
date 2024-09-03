import { nanoid } from "nanoid";
import { KeyboardRowProps } from "../interfaces";
import KeyTile from "./KeyTile";

export default function KeyboardRow({keys}: KeyboardRowProps){
    return (
        <div className="keyboard-row">
            {keys.map((key) => (
                <KeyTile key={nanoid()} keyValue={key.keyValue} />
            ))}
        </div>
    )
}