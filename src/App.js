import React from 'react';
import allCountryScores from "./scores.js";
import CreateTable from "./CreateTable.js"
// import logo from './logo.svg';
import './App.css';


function App() {
    console.log({ allCountryScores });
  return (
    <div className="App">
    <CreateTable data={allCountryScores}/>
    
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
