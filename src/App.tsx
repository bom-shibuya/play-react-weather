import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'

import { DisplayData, Nav } from './containers'

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Nav />
        <DisplayData />
      </div>
    )
  }
}

export default App
