import "./App.css";
import topIcon from'./img/icon.png'
import Results from "./components/Date";

function App() {
  return (
    <>
      <div className="top-container">
        <img src={topIcon} alt="Icon" />
      </div>
      <div className="clock-container">
        <Results />
      </div>
      <div className="bottom">
        <p>Horário de Brasília GMT -3</p>
      </div>
    </>
  );
}

export default App;
