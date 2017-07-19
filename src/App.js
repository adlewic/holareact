import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Joshua',
      message: 'hola como estas ?'
    };
  }

  render() {
    const { name, message } = this.state;
    const sections = ['Joshua', 'section 2', 'section 3'];

    return (
      <div className="App">
        <div className="App-header">
          <NavBar sections={ sections }/>
        </div>
        <p className="App-intro">
          { `${ name }, ${ message }` }
        </p>
      </div>
    );
  }
}

export default App;
