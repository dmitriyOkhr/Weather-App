import { useDispatch } from "react-redux";
import changerCities from "../actions/changerCities";

function InputCity() {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <button className="dropbtn">Choose city</button>
      <div className="dropdown-content">
        <p onClick={() => dispatch(changerCities("Lviv"))}>Lviv</p>
        <p onClick={() => dispatch(changerCities("London"))}>London</p>
        <p onClick={() => dispatch(changerCities("Kuznetsovsk"))}>
          Kuznetsovsk
        </p>
        <p onClick={() => dispatch(changerCities("Dubai"))}>Dubai</p>
        <p onClick={() => dispatch(changerCities("Barselona"))}>Barselona</p>
        <p onClick={() => dispatch(changerCities("New York"))}>New York</p>
        <p onClick={() => dispatch(changerCities("Paris"))}>Paris</p>
        <p onClick={() => dispatch(changerCities("Rovigo"))}>Rovigo</p>
      </div>
    </div>
  );
}

export default InputCity;
