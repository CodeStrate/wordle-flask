import { nanoid } from "nanoid";
import Row from "./Row";

const WordleBoard = () => {

    const rowCount: number = import.meta.env.VITE_ATTEMPTS;

    return (
        <section className="board">
         {Array.from({length: rowCount}).map((_, rowIndex) => (
                <Row key={nanoid()} rowIndex={rowIndex} />
            ))}
        </section>
    )
}

export default WordleBoard