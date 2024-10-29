import './App.css';
import { useState } from 'react';
import { getHighlightedText, getRandomSentence } from './utility';

const GameState = {
  NotStarted: 'NOT_STARTED',
  Typing: 'TYPING',
  Finished: 'FINISHED',
};

const sentences = [
  "beavers build dams to create safe, stable habitats.",
  "strong teeth allow beavers to cut down trees.",
  "dam-building skills make beavers natural ecosystem engineers.",
  "beaver dams help prevent flooding in river areas.",
  "tail slaps on water serve as beaver communication.",
  "beaver activity peaks during early morning and evening.",
  "lodges built by beavers provide shelter and warmth.",
  "wetland biodiversity thrives around beaver-made habitats."
];

const Header = ({ time }) => {
  return (
    <div>
      <img src="./nugget_types.svg" alt="Cute Beaver" className="beaver-image" />
      <h1>TypeRacer</h1>
      <p className="time">Time: {time.toFixed(2)} seconds</p>
    </div>
  );
}

const TypingInput = ({ gameState, input, sentence, handleInputChange }) => {
  const { correctText, incorrectText } = getHighlightedText(sentence, input);
  const remainingText = sentence ? sentence.slice(input.length) : '';

  return (
    <div className="typing-input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="visible-input"
        disabled={gameState === GameState.Finished}
        autoFocus
      />
      <div className="input-feedback">
        <span className="correct-text">{correctText}</span>
        <span className="incorrect-text">{incorrectText}</span>
        <span className="remaining-text">{remainingText}</span>
      </div>
    </div>
  );
};

const ResetButton = ({ onClick, gameState }) => {
  return (
    <button onClick={onClick} className="reset-button">
      {gameState === GameState.Finished ? 'Play Again' : 'Reset'}
    </button>
  );
}

const App = () => {
  const [gameState, setGameState] = useState(GameState.NotStarted);
  const [sentence, setSentence] = useState(getRandomSentence(sentences));
  const [input, setInput] = useState('');
  
  var time = 0;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const resetGame = () => {
    setGameState(GameState.NotStarted);
  };

  return (
    <div className="app">
      <Header time={time} />
      <TypingInput 
        gameState={gameState}
        input={input} 
        handleInputChange={handleInputChange} 
        sentence={sentence} 
      />
      <ResetButton onClick={resetGame} gameState={gameState} />
    </div>
  )
}

export default App;