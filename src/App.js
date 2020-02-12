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
      error: "",
    };

    this.handleChangeAsset = this.handleChangeAsset.bind(this);
    this.handleChangePayment = this.handleChangePayment.bind(this);
    this.show = this.show.bind(this);
  }

  handleChangeAsset(e) {
    this.setState({
      asset: this.numOnly(e.target.value)
    })
  }

  handleChangePayment(e) {
    this.setState({
      payment: this.numOnly(e.target.value)
    })
  }
  show(e) {
    this.validation();
    console.log("error", this.state.error);
    if (this.state.error !== "") {
      return;
    } else {
      this.setState({
        output: this.calc()
      });
    }
  }

  numOnly(value) {
    return value.replace(/[^0-9]/g, '');
  }

  calc() {
    console.log("calc");
    return this.state.asset / this.state.payment;
  }

  validation() {
    if (this.state.payment === "0" || this.state.payment.length === 0) {
      this.setState({
        error: "支出がなければ一生無職でも大丈夫です。おめでとう！"
      });
    }
    console.log("validation", this.state.error);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.error}
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
