import { nanoid } from "nanoid";
import Row from "./Row";
import { Char } from "./interfaces";
import { useEffect } from "react";
import { useWordle } from "../context/WordleContext";

const WordleBoard = () => {
    const rowCount: number = import.meta.env.VITE_ATTEMPTS;
    const colCount: number = import.meta.env.VITE_WORD_LENGTH;

    const {boardState, setBoardState, gameOver, currentCol, currentRow, setCurrentCol } = useWordle();


    const handleKeyPress = (key: string) => {
        if(gameOver) return;

        setBoardState(prevBoard => {
            const newBoardState = prevBoard.map(row => row.map(tile => ({ ...tile })));

            if(key === "ENTER"){
                //handle enter
                return newBoardState;
            }

            if(key === "BACKSPACE"){
                //handle bs
                if(0 < currentCol && currentCol <= colCount){
                    setCurrentCol(prev => (prev - 1))
                }
                newBoardState[currentRow][currentCol] = {
                    ...newBoardState[currentRow][currentCol],
                    letter: ""
                  };

                  return newBoardState;
            }

            if ( /^[A-Z]$/.test(key)){ // this regex checks if key is upper case A-Z
                if (currentCol < colCount) {
                    if(newBoardState[currentRow][currentCol].letter === ""){
                        newBoardState[currentRow][currentCol] = {
                          ...newBoardState[currentRow][currentCol],
                          letter: key as Char
                        };
                        //move col + 1
                        setCurrentCol(prev => (prev + 1))
                    }
    
                }
            }

            return newBoardState;
        });
        
    }


    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            handleKeyPress(event.key.toUpperCase());
        }

        window.addEventListener("keyup", handleKeyUp);

        //clean up function
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [currentRow, currentCol, boardState, gameOver])


    return (
        <section className="board">
         {Array.from({length: rowCount}).map((_, rowIndex) => (
                <Row key={nanoid()} rowIndex={rowIndex} />
            ))}
        </section>
    )
}

export default WordleBoard