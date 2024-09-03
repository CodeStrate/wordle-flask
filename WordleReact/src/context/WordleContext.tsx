import { createContext, ReactNode, useContext, useState } from "react";
import { Char, TileProps, WordleContextType } from "../components/interfaces";

const WordleContext = createContext<WordleContextType | undefined>(undefined);

export const WordleProvider: React.FC<{ children : ReactNode}> = ({children}) => {
    const rowCount: number = import.meta.env.VITE_ATTEMPTS;
    const colCount: number = import.meta.env.VITE_WORD_LENGTH;


    const initialBoard: TileProps[][] = Array.from({length : rowCount}, (_, rowIndex) => 
    Array.from({length: colCount}, (_, colIndex) => ({
        rowIndex,
        colIndex,
        letter: "" as Char,
        status: ""
    }))
);

    const [boardState, setBoardState] = useState<TileProps[][]>(initialBoard)
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    return (
        <WordleContext.Provider value={{boardState, currentRow, currentCol, gameOver, setBoardState, setCurrentRow,
            setCurrentCol, setGameOver
        }}>
            {children}
        </WordleContext.Provider>
    )
};

export const useWordle = () => {
    const context = useContext(WordleContext);
    if(context === undefined) throw new Error(`useWordle hook must be used inside the WordleProvider.`);

    return context;
}
