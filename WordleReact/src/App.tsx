import './App.css'
import WordleBoard from './components/WordleBoard'
import Keyboard from './components/OnScreenKeyboard/Keyboard'
import { keyboardArray } from './utils/KeyboardKeys'

function App() {

  return (
    <main className='container'>
      <h1 className="game-title">WORDLE</h1>
      <hr />
      <br />
    <WordleBoard />
    <Keyboard rows={keyboardArray}/>
    </main>
  )
}

export default App
