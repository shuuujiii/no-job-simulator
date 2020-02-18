import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import PriceRow from './containers/PriceRow';

export default class Simulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                assets: {
                    money: "",
                    stock: "",
                    otherasset: "",
                },
                asset: "",
                payments: {
                    food: "",
                    rent: "",
                    otherpayment: "",
                },
                payment: "",
            },

            output: "",
            error: "",
        };

        this.handleChangeInputAssets = this.handleChangeInputAssets.bind(this);
        this.handleChangeInputPayments = this.handleChangeInputPayments.bind(this);
        this.handleChangeInputInfo = this.handleChangeInputInfo.bind(this);
        this.handleOnBlurAssets = this.handleOnBlurAssets.bind(this);
        this.handleOnBlurPayments = this.handleOnBlurPayments.bind(this);
        this.show = this.show.bind(this);
    }

    handleChangeInputAssets(e) {
        this.setState({
            info: {
                ...this.state.info,
                assets: {
                    ...this.state.info.assets,
                    [e.target.name]: this.InputNumOnly(e.target.value),
                }
            }
        });
    }

    handleChangeInputPayments(e) {
        this.setState({
            info: {
                ...this.state.info,
                payments: {
                    ...this.state.info.payments,
                    [e.target.name]: this.InputNumOnly(e.target.value),
                }
            }
        });
    }

    handleChangeInputInfo(e) {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: this.InputNumOnly(e.target.value),
            }
        });
    }

    handleOnBlurAssets() {
        let sum = 0;
        Object.keys(this.state.info.assets).map((key) => {
            sum += this.parseIntZero(this.state.info.assets[key])
        });
        this.setState(state => ({
            info: {
                ...this.state.info,
                asset: sum,
            }
        }));
    }

    handleOnBlurPayments() {
        let sum = 0;
        Object.keys(this.state.info.payments).map((key) => {
            sum += this.parseIntZero(this.state.info.payments[key])
        });
        this.setState({
            info: {
                ...this.state.info,
                payment: sum,
            }
        })
    }

    show(e) {
        if (!this.validate()) { return; }
        this.setState({
            output: this.getOutput(),
            error: "",
        })
        this.props.history.push('/result')
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
                    <h1 className="h1-title">無職シミュレーター</h1>
                    <br />
                </header>
                <body className="App-body">
                    <Container>
                        <h2 className="h2-title">資産</h2>
                        <PriceRow
                            title={"現金/預金"}
                            id={"money"}
                            handleChange={this.handleChangeInputAssets}
                            handleOnBlur={this.handleOnBlurAssets}
                            value={this.state.info.assets.money} />
                        <PriceRow
                            title={"有価証券"}
                            id={"stock"}
                            handleChange={this.handleChangeInputAssets}
                            handleOnBlur={this.handleOnBlurAssets}
                            value={this.state.info.assets.stock} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"資産合計"}
                            id={"asset"}
                            handleChange={this.handleChangeInputInfo}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.asset}
                        />
                        <br />
                        <h2 className="h2-title">支出(月)</h2>
                        <PriceRow
                            title={"食費"}
                            id={"food"}
                            handleChange={this.handleChangeInputPayments}
                            handleOnBlur={this.handleOnBlurPayments}
                            value={this.state.info.payments.food} />
                        <PriceRow
                            title={"家賃"}
                            id={"rent"}
                            handleChange={this.handleChangeInputPayments}
                            handleOnBlur={this.handleOnBlurPayments}
                            value={this.state.info.payments.rent} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"支出合計"}
                            id={"payment"}
                            handleChange={this.handleChangeInputInfo}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.payment}
                        />
                    </Container>
                    <br />
                    <Button variant="primary" type="button" onClick={this.show}>計算</Button>
                    <br />
                    <label>残りの無職人生</label>
                    <label>{this.state.output}</label>
                </body>
            </div >
        );
    }
}