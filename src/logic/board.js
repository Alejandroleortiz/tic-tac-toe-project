import { WINNER_COMBOS } from "../components/constants"
export const checkWinnerFrom = (boardToCheck) => {
    // Con esto revisamos todas las combinaciones ganadoras
    // para ver si x u o ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // ver si en el cero hay una x u o
        boardToCheck[a] === boardToCheck[b] && // ver si en el 0 y 3 esta la x -> x u o -> o
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // x u o
      }
    }
    // si no hay ganador
    return null
  }

  export   const checkEndGame = (newBoard) =>{
    // revisamos si hay empate
    // si no hay espacios vaccios
    // en el tablero
    return newBoard.every((square) => square !== null )
  }