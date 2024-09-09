import { nanoid } from "nanoid";
import Row from "./Row";
import { Char } from "./interfaces";
import { useEffect } from "react";
import { useWordle } from "../context/WordleContext";
import { useWords } from "../api/WordsAPI";
import { checkWordList } from "../api/checkWordList";

const WordleBoard = () => {
    const rowCount: number = import.meta.env.VITE_ATTEMPTS;
    const colCount: number = import.meta.env.VITE_WORD_LENGTH;

    const {boardState, setBoardState, gameOver, currentCol, currentRow, setCurrentCol, setCurrentRow, setGameOver } = useWordle();
    const word: string = useWords();


    const handleKeyPress = (key: string) => {
        if(gameOver) return;

        setBoardState(prevBoard => {
            const newBoardState = prevBoard.map(row => row.map(tile => ({ ...tile })));

            if(key === "ENTER"){
                //handle enter
                if(currentCol == colCount){
                    checkWord().then((check: boolean | undefined) => { // scuffed code
                        //reason : just check is a Promise which is always defined not a boolean. and undefined
                        // is TS Bullshit. 
                        //basically check would never be a falsy value since its a Promise from checkWord.
                        if(check){
                            updateWord();
                            setCurrentCol(0);
                            setCurrentRow(prev => (prev + 1));
                        }else{
                            alert("Not in word list");
                        }
                    }).catch((error: any) => {
                        console.error("Error checking word:", error);
                    });
                }else{
                    alert("Please Enter 5 letters");
                }
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
        
        if(!gameOver && currentRow === rowCount){
            setGameOver(true);

        }
    }

    const checkWord = () => {
        let wordArray: string[] = [];
        for (let c = 0; c < colCount; c++) {
            let currentLetter = boardState[currentRow][c].letter;
            wordArray.push(currentLetter);
        }

        let data = {"word": wordArray.join('')};

        let response = checkWordList(data);

        return response;
    }

    const updateWord = () => {
        let correct: number = 0;
        let frequencyTable: { [key: string]: number } = {};
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if(frequencyTable[letter]){
                frequencyTable[letter] += 1;
            }else{
                frequencyTable[letter] = 1;
            }  
        }
        setBoardState((prevBoardState) => {
            const newBoardState = prevBoardState.map(row => row.map(tile => ({ ...tile })));
            for (let c = 0; c < colCount; c++){
                const letter = newBoardState[currentRow][c].letter;
                if(letter === word[c]){
                    newBoardState[currentRow][c] = {
                        ...newBoardState[currentRow][c],
                        status: "correct"
                    };
                    
                    frequencyTable[letter] -= 1;
                }
                
                if(correct == colCount){
                    setGameOver(true)
                }
            }
            
            for (let c = 0; c < colCount; c++){ // 2nd loop for present
                const letter = newBoardState[currentRow][c].letter;
                if(newBoardState[currentRow][c].status !== "correct"){
                    if(word.includes(letter) && frequencyTable[letter] > 0){
                        newBoardState[currentRow][c] = {
                            ...newBoardState[currentRow][c],
                            status: "present"
                          };

                        frequencyTable[letter] -= 1;
                    }else{
                        newBoardState[currentRow][c] = {
                            ...newBoardState[currentRow][c],
                            status: "absent"
                          };
                    }

                }
            }

            return newBoardState;
        })


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

    useEffect(() => console.log(word), [word])


    return (
        <section className="board">
         {Array.from({length: rowCount}).map((_, rowIndex) => (
                <Row key={nanoid()} rowIndex={rowIndex} />
            ))}
        </section>
    )
}

export default WordleBoard