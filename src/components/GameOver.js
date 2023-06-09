import React, {useContext} from 'react'
import { AppContext } from "../App";

function GameOver() {
    const {gameOver, correctWord, currentAttempt} = useContext(AppContext);
  return (
    <div className="gameOver">
        <h3>{gameOver.guessedCorrect ? "You won!" : "Its over!"}</h3>
        <h1>The correct word is: {correctWord}</h1>
        {gameOver.guessedCorrect && (<h3>You figured it out in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver