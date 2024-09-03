import { KeyTileProps } from "../interfaces";

export default function KeyTile({keyValue}: KeyTileProps){

    const enter_class = keyValue === "ENTER" ? "enter-key" : "";

    return (
        <button className={`key-button ${enter_class}`}>
            {keyValue}
        </button>
    )
}