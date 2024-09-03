import { TileProps } from "./interfaces"

const Tile = ({rowIndex, colIndex, letter, status}: TileProps) => {
    return (
        <span className={`tile ${status}`} id={`${rowIndex}-${colIndex}`}>{letter}</span>
    )
}

export default Tile