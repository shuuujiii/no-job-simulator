import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import PriceRow from './containers/PriceRow';
import logo from './logo.svg';

export default class Simulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                money: "",
                stock: "",
                asset: "",
                food: "",
                rent: "",
                payment: "",
            },

            output: "",
            error: "",
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleOnBlurAsset = this.handleOnBlurAsset.bind(this);
        this.handleOnBlurSpend = this.handleOnBlurSpend.bind(this);
        this.show = this.show.bind(this);
    }

    handleChangeInput(e) {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: this.InputNumOnly(e.target.value),
            }
        });
    }

    handleOnBlurAsset() {
        let money = parseInt(this.state.info.money) || 0;
        let stock = parseInt(this.state.info.stock) || 0;
        this.setState(state => ({
            info: {
                ...this.state.info,
                asset: money + stock,
            }
        }));
    }

    handleOnBlurSpend() {
        let food = parseInt(this.state.info.food) || 0;
        let rent = parseInt(this.state.info.rent) || 0;
        this.setState({
            info: {
                ...this.state.info,
                payment: food + rent,
            }
        })
    }

    show(e) {
        if (!this.validate()) { return; }
        this.setState({
            output: this.getOutput(),
            error: "",
        })
    }

    validate() {
        if (this.parseIntZero(this.state.info.asset) === 0) {
            this.setState({
                output: "終了!",
                error: "お金を貯めてから無職になってください！"
            })
            return false;
        }

        if (this.parseIntZero(this.state.info.payment) === 0) {
            this.setState({
                output: "Infinity",
                error: "支出がなければ一生無職でも大丈夫です。おめでとう！"
            });
            return false;
        }

        return true;
    }

    InputNumOnly(value) {
        return value.replace(/[^0-9]/g, '');
    }

    parseIntZero(value) {
        let result = (parseInt(value) || 0);
        return result;
    }

    getOutput() {
        let asset = parseInt(this.state.info.asset) || 0;
        let payment = parseInt(this.state.info.payment) || 0;
        let allMonth = asset / payment;
        let year = Math.floor(Math.floor(allMonth) / 12);
        let month = Math.floor(allMonth) - year * 12;
        let day = Math.floor((allMonth - (month + year * 12)) * 30);
        let output = "";
        if (year !== 0) {
            output += year + "年";
        }
        if (month !== 0) {
            output += month + "ヶ月";
        }
        if (day !== 0) {
            output += day + "日"
        }
        if (output !== "") {
            output = "あと" + output + "!";
        }
        return output;
    }

    render() {
        const styles = {
            h2: {
                color: "#FFFFFF",
                border: "solid 3px #364e96",
                padding: "0.2em",
                borderRadius: "0.5em",
                textAlign: "center",
            }
        };
        const ColorLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5,
                }}
            />
        );
        return (

            <div>
                <header className="App-header">
                    {this.state.error}
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>無職シミュレーター</h1>
                    <br />
                    <Container>
                        <h2 style={styles.h2}>資産</h2>
                        {this.state.info.money}
                        <PriceRow
                            title={"現金/預金"}
                            id={"money"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={this.handleOnBlurAsset}
                            value={this.state.info.money} />
                        <PriceRow
                            title={"有価証券"}
                            id={"stock"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={this.handleOnBlurAsset}
                            value={this.state.info.stock} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"資産合計"}
                            id={"asset"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.asset}
                        />
                        <br />
                        <h2 style={styles.h2}>支出(月)</h2>
                        <PriceRow
                            title={"食費"}
                            id={"food"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={this.handleOnBlurSpend}
                            value={this.state.info.food} />
                        <PriceRow
                            title={"家賃"}
                            id={"rent"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={this.handleOnBlurSpend}
                            value={this.state.info.rent} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"支出合計"}
                            id={"payment"}
                            handleChange={this.handleChangeInput}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.payment}
                        />
                    </Container>
                    <br />
                    <Button variant="primary" type="button" onClick={this.show}>計算</Button>

                    <br />
                    <label>残りの無職人生</label>
                    <label>{this.state.output}</label>
                </header>

            </div >
        );
    }
}