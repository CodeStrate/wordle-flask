type Char = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' 
| 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' 
| 'y' | 'z' | ''

export interface TileProps {
    rowIndex: number;
    colIndex: number;
    letter: Char;
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
