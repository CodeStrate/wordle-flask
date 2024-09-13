
import { useWordle } from "../context/WordleContext";

const {boardState, currentCol, currentRow, colCount, setCurrentCol} = useWordle();

export default function handleBackspace(){
    newBoardState[currentRow][currentCol] = {
        ...newBoardState[currentRow][currentCol],
        letter: ""
      };
      
    if(0 < currentCol && currentCol <= colCount){
        setCurrentCol(prev => (prev - 1))
    }
}