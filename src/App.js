import React, { lazy, Suspense, Component } from 'react';

import logo from './logo.svg';
import './App.css';

// ????
// the code below cause build process to hangout for 30 secs, sometimes resulting in the error
// (FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory)
const MaterialIcon = ({ icon }) => {
    const Icon = lazy(() => import(`@material-ui/icons/${icon}`))
    return <Suspense fallback={<div />}><Icon /></Suspense>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MaterialIcon icon="Dashboard" />
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
      </div>
    );
  }
}

export default App;
