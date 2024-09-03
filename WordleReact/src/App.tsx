import './App.css'
import WordleBoard from './components/WordleBoard'

function App() {

  return (
    <main className='container'>
      <h1 className="game-title">WORDLE</h1>
      <hr />
      <br />
    <WordleBoard />
    <h1 className="game-title" id="answer"></h1>
    </main>
  )
}

export default App
