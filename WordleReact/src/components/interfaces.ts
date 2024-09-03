export type Char = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' 
| 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' 
| 'Y' | 'Z' | ''


export interface WordleContextType {
    boardState: TileProps[][];
    currentRow: number;
    currentCol: number;
    gameOver: boolean;
    setBoardState: React.Dispatch<React.SetStateAction<TileProps[][]>>;
    setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
    setCurrentCol: React.Dispatch<React.SetStateAction<number>>;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TileProps {
    rowIndex: number;
    colIndex: number;
    letter: Char;
    status: "correct" | "present" | "absent" | ""
}

export interface RowProps {
    rowIndex: number;
}

export interface KeyTileProps {
    keyValue: string;
}

export interface KeyboardRowProps {
    keys: KeyTileProps[];
}

export interface KeyboardProps {
    rows: KeyboardRowProps[];
}
