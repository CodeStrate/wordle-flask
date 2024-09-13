import { checkWordList } from "../api/WordsAPI";
import { useWordle } from "../context/WordleContext";

const {boardState, currentCol, currentRow, colCount, setCurrentCol, setCurrentRow} = useWordle();

export function handleEnter() {

    if(currentCol == colCount){
        checkWord().then((check: boolean | undefined) => { // scuffed code
            //reason : just check is a Promise which is always defined not a boolean. and undefined
            // is TS Bullshit. 
            //basically check would never be a falsy value since its a Promise from checkWord.
            if(check){
                // updateWord();
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

export function checkWord(){
    let wordArray: string[] = [];
    for (let c = 0; c < colCount; c++) {
        let currentLetter = boardState[currentRow][c].letter;
        wordArray.push(currentLetter);
    }

    let data = {"word": wordArray.join('')};

    let response = checkWordList(data);

    return response;
}

