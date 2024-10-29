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

const App = () => {
  var time = 0;

  return (
    <div className="app">
      <Header time={time} />
    </div>
  )
}

export default App;