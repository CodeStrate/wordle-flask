import { KeyTileProps } from "../interfaces";

export default function KeyTile({keyValue}: KeyTileProps){

    const enter_class = keyValue === "ENTER" ? "enter-key" : "";
 
    const keyID = (keyValue:string): string => {
        if(keyValue == "ENTER"){
            return "Enter";
        }
        else if(keyValue == "⌫"){
            return "Backspace";
        }
        
        return "Key" + keyValue;
    }
    
    const handleClick = () => {
        console.log(keyID(keyValue));
    }

    return (
        <button className={`key-button ${enter_class}`} id={keyID(keyValue)} onClick={handleClick}>
            {keyValue}
        </button>
    )
}