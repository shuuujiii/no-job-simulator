import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: "",
      payment: "",
      output: "",
    };

    this.handleChangeAsset = this.handleChangeAsset.bind(this);
    this.handleChangePayment = this.handleChangePayment.bind(this);
    this.show = this.show.bind(this);
  }

  handleChangeAsset(e) {
    this.setState({
      asset: e.target.value
    })
  }

  handleChangePayment(e) {
    this.setState({
      payment: e.target.value
    })
  }
  show(e) {
    console.log(`${this.state.asset}`);
    console.log(`${this.state.payment}`);
    var result = this.calc();
    this.setState({
      output: result
    })
  }

  calc() {
    return this.state.asset / this.state.payment;
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <label>資産</label>
            <input id="asset" name="asset" type="text" onChange={this.handleChangeAsset} value={this.state.asset} />
          </div>
          <div>
            <label>支出/月</label>
            <input id="payment" name="payment" type="text" onChange={this.handleChangePayment} value={this.state.payment} />
          </div>
          <button type="button" onClick={this.show}>計算</button>
          <br />
          <label>残りの無職人生</label>
          <label>{this.state.output}</label>
        </header>
      </div>
    );
  }
}

// export default App;
