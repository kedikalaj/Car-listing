import { useState } from "react";
import CarShow from './CarShow';
import "./App.css";


function getRandomCar(){
  const cars = ['supra', 'skyline', 'mazda', 'mustang', 'ferrari'];

  return cars[Math.floor(Math.random()*cars.length)];
}


function App() {

const [car, setCars] = useState([]);

  const handleClick=()=>{
     setCars([...car, getRandomCar()]);
  };
  
  const renderCars = car.map((car, index)=> {
    return <CarShow type={car} key={index}/>
  });

  return (
    <div className="app">
      <button  onClick={handleClick}>New Car</button>
      <div className="car-list">{renderCars}</div>
      
    </div>
  );
}

export default App;
