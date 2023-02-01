import "./App.css";
import HeaderText from "./components/HeaderText";
import InputCity from "./components/InputCity";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="container">
      <div className="header">
        <HeaderText />
        <InputCity />
      </div>
      <div className="App">
        <div>
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
