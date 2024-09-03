import './App.css'
import WordleBoard from './components/WordleBoard'
import Keyboard from './components/OnScreenKeyboard/Keyboard'
import { keyboardArray } from './components/OnScreenKeyboard/KeyboardKeys'

function App() {

  return (
    <main className='container'>
      <h1 className="game-title">WORDLE</h1>
      <hr />
      <br />
    <WordleBoard />
    <Keyboard rows={keyboardArray}/>
    <h1 className="game-title" id="answer"></h1>
    </main>
  )
}

export default App
