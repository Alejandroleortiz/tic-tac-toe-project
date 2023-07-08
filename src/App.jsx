import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }


  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)  //const board = Array(9).fill(null) // Creo un array con 9 espacios vacios y con el valor null
  ) // Defino el estado para la logica al hacer clic

  const [turn, setTurn] = useState(TURNS.X) // estado para saber de quien es el turno

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn // guardar el turno x u o
    setBoard(newBoard)
    

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className="game">
        {
          board.map((_, index) => {

            return (

              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>


    </main>
  )
}

export default App
