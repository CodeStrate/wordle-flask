import { useWordle } from "../context/WordleContext";
import { RowProps } from "./interfaces";
import Tile from "./Tile"
import { nanoid } from "nanoid";


const Row = ({rowIndex}: RowProps) => {

    const colCount: number = import.meta.env.VITE_WORD_LENGTH;

    const {boardState} = useWordle();


    return (
        <>
            {Array.from({length: colCount}).map((_, colIndex) => (
                <Tile key={nanoid()} rowIndex={rowIndex} colIndex={colIndex} letter={boardState[rowIndex][colIndex].letter} status={boardState[rowIndex][colIndex].status}/>
            ))}
        </>
    )
}

export default Row
