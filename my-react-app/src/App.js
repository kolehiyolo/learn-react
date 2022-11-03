import logo from './logo.svg';
import './App.css';

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2><mycar.brand/></h2>
    </div>
  );
}

export default App;
