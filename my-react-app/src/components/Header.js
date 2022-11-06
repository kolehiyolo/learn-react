import React from 'react';
import ReactDOM from 'react-dom/client';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <nav className="header--nav">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/about">About</a>
        <button>Contact Me</button>
      </nav>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      color: "white"
    }
  }
  render() {
    return (
      <header
        className='header'
        style={{
        backgroundColor: this.state.backgroundColor,
        color: this.state.color
      }}>
        <div className='header--logo'>
          <i className="fa-brands fa-react"></i>
          <p>Learning React</p>
        </div>
        <Navbar/>
      </header>
    );
  }
}

export default Header;