import './App.css';

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

const TypingInput = ({ input, sentence, handleInputChange }) => {
  return (
    <div className="typing-input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="visible-input"
        autoFocus
      />
      <div className="input-feedback">
        <span className="correct-text">correct text</span>
        <span className="incorrect-text">incorrect text</span>
        <span className="remaining-text">remaining text</span>
      </div>
    </div>
  );
};

const App = () => {
  var time = 0;
  var input = "";
  var sentence = sentences[0];

  const handleInputChange = (e) => {
    const value = e.target.value;
  }

  return (
    <div className="app">
      <Header time={time} />
      <TypingInput 
        input={input} 
        handleInputChange={handleInputChange} 
        sentence={sentence} 
      />
    </div>
  )
}

export default App;