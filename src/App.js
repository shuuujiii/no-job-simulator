import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <label>資産</label>
            <input />
          </div>
          <div>
            <label>支出/月</label>
            <input />
          </div>
          <button type="submit" onClick={() => { alert("aaa") }}>計算</button>
          <br />
          <label>残りの無職人生</label>
          <label>output</label>
        </header>
      </div>
    );
  }
}

// export default App;
