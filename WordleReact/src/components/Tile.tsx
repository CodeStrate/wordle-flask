import { TileProps } from "./interfaces"

const Tile = ({rowIndex, colIndex, letter}: TileProps) => {
    return (
        <span className={`tile`} id={`${rowIndex}-${colIndex}`}>{letter}</span>
    )
}

export default Tile