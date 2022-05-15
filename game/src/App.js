import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('Let see who wins');
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice 
    if (userPoints <=4 && computerPoints <=4) {
      if (comboMoves ===  'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper' || comboMoves === 'rocklizard' || comboMoves === 'lizardspock' || comboMoves === 'spockscissors' || comboMoves === 'scissorslizard' || comboMoves === 'lizardpaper' || comboMoves === 'paperspock' || comboMoves === 'spockrock') {
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User got the point')
        if (updatedUserPoints === 5) {
          setResult('User wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      if (comboMoves ===  'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper' || comboMoves === 'spocklizard' || comboMoves === 'scissorspock' || comboMoves === 'lizardscissors' || comboMoves === 'paperlizard' || comboMoves === 'spockpaper' || comboMoves === 'rockspock' || comboMoves === 'lizardrock') {
        const updatedComputerPoints = computerPoints + 1  
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer got the point')
        if (updatedComputerPoints === 5) {
          setResult('Computer wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      if (comboMoves ===  'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorscissors' || comboMoves === 'lizardlizard' || comboMoves === 'spockspock' ) {
        setTurnResult('No one got a point')
      }
    }
  },[computerChoice, userChoice])
  
  
  return (
    <div className="App">
      <h1 className='heading'>Rock Paper Scissors Lizard Spoke</h1>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>

      </div>
      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' alt='user-hand' src={`./images/${userChoice}.png`} />
        </div>
        
        <img className='instruction' alt='' src={'./images/q.png'} />
      
        <div className='choice-computer'>
          <img className='computer-hand' alt='computer-hand' src={`./images/${computerChoice}.png`} />
        </div>
      </div>

      

      <div children='button-div'>
        {choices.map((choice, index) => 
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className='button-div'>
        {gameOver && 
         <button className='button' onClick={() => reset()}>Restart</button>
        }
      </div>
    </div>
  );
}

export default App;
