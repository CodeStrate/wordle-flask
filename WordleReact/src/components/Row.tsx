import { RowProps } from "./interfaces";
import Tile from "./Tile"
import { nanoid } from "nanoid";


const Row = ({rowIndex}: RowProps) => {

    const colCount: number = import.meta.env.VITE_WORD_LENGTH;


    return (
        <>
            {Array.from({length: colCount}).map((_, colIndex) => (
                <Tile key={nanoid()} rowIndex={rowIndex} colIndex={colIndex} letter="" />
            ))}
        </>
    )
}

export default Row
