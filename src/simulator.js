import React, { Component } from 'react';
import logo from './logo.svg';

export default class Simulator extends Component {
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
        if (this.validateNullorZero(this.state.asset)) {
            this.setState({
                output: "終了",
                error: "お金を貯めてから無職になってください！"
            })
            return;
        }

        if (this.validateNullorZero(this.state.payment)) {
            this.setState({
                output: "Infinity",
                error: "支出がなければ一生無職でも大丈夫です。おめでとう！"
            });
            return;
        }
        this.setState({
            output: this.state.asset / this.state.payment,
            error: "",
        })

    }

    numOnly(value) {
        return value.replace(/[^0-9]/g, '');
    }

    validateNullorZero(value) {
        return (value === "0" || value.length === 0)
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