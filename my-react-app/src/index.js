// * React Working
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';

// -* Simple one-line HTML to Render
const myFirstElement = <h1>Hello React!</h1>;

// * Final Renders -* Component Building Function
function App() {
  return <>
    <Header backgroundColor="red"/>
    <main className='main'>
      <h1 id="">Hello React! 2.0</h1>
      <button id="btn">Test</button>
    </main>
    <Footer />
  </>;
}

// -* Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App favcol="green"/>);