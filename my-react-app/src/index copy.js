// * React Working
import React from 'react';
import ReactDOM from 'react-dom/client';

// -* Simple one-line HTML to Render
const myFirstElement = <h1>Hello React!</h1>;

// * Class and Constructor Samples -* Car Constructor class Car {
// constructor(brand) {     this.brand = brand;   }   present() {     return `I
// have a ${this.brand} STUFF(${this.stuff})`;   } } -* Model Constructor class
// Model extends Car {   constructor(brand,model,year) {     super(brand);
// this.model = model;     this.year = year;   }   show () {     return
// `${this.present()}, it is a ${this.model} from ${this.year}`;   } } -*
// Testing Constructors const mycar = new Model("Ford","Mustang","1997");
// console.log(mycar.show());

// * Header Constructor Samples class Header {   constructor() {     this.color
// = "Red";   }   // Regular Function:   // changeColor = function() {   //
// document.getElementById("demo").innerHTML += this;   // }   // Arrow
// Function:   changeColor = () => { document.getElementById("demo").innerHTML
// += this;   } }

// * Component Tutorial class Header extends React.Component {   render() {
// return <header>Hello</header>;   } }

function Header(props) {
  return <header>Header {props.color}</header>;
}

function Footer(props) {
  return <footer>Footer Content</footer>;
}

// * Final Renders -* Component Building Function
function App() {
  return <div className="App">
    <Header color="red"/>
    <h1 id="demo">Hello React! 2.0</h1>
    <button id="btn">Test</button>
    <Footer/>
  </div>;
}

class Car extends React.Component {
  constructor(props) {
    console.log("MOUNTING:");
    console.log("--constructor()");
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    console.log(`STATE CHANGE: changeColor()`);
    this.setState({
      color: (this.state.color === "red")
        ? "blue"
        : "red"
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("--getDerivedStateFromProps()");
    return {favoritecolor: props.favcol };
  }
  componentDidMount() {
    console.log("--componentDidMount()");
    console.log("\n");
    document.getElementById("target").addEventListener('click', () => {
      alert(`BRAND ${this.state.color}`);
    });
  }
  shouldComponentUpdate() {
    console.log(`--shouldComponentUpdate()`); 
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`--getSnapshotBeforeUpdate() = ${prevState.favoritecolor}`); 
    return null;
  }
  componentDidUpdate() {
    console.log(`--componentDidUpdate()`); 
  }
  render() {
    console.log("--render()");
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor} style={{color: this.state.color}}>Change color</button>
        <button id="target" type="button">Test Me</button>
      </div>
    );
  }
}

// -* Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car favcol="green"/>);

// * Set Event Listeners const myheader = new Header(); The window object calls
// the function: window.addEventListener("load", myheader.changeColor); A
// button object calls the function:
// document.getElementById("btn").addEventListener("click",myheader.changeColor);

// * Original import './index.css'; import App from './App'; import
// reportWebVitals from './reportWebVitals'; const root =
// ReactDOM.createRoot(document.getElementById('root')); root.render(
// <React.StrictMode>     <App />   </React.StrictMode> ); If you want to start
// measuring performance in your app, pass a function to log results (for
// example: reportWebVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals reportWebVitals();