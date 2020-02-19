import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Header from './components/Header';
import PriceRow from './components/PriceRow';
import ColorLine from './styles/colorline';
import * as inputjs from './js/input';
import * as calcjs from './js/calc';

class Simulator extends Component {
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
            error: "",
        };
    }

    handleChangeInputAssets(e) {
        this.setState({
            info: {
                ...this.state.info,
                assets: {
                    ...this.state.info.assets,
                    [e.target.name]: inputjs.InputNumOnly(e.target.value),
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
                    [e.target.name]: inputjs.InputNumOnly(e.target.value),
                }
            }
        });
    }

    handleChangeInputInfo(e) {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: inputjs.InputNumOnly(e.target.value),
            }
        });
    }

    handleOnBlurAssets() {
        let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.info.assets });
        this.setState(state => ({
            info: {
                ...this.state.info,
                asset: sum,
            }
        }));
    }

    handleOnBlurPayments() {
        let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.info.payments });
        this.setState({
            info: {
                ...this.state.info,
                payment: sum,
            }
        })
    }

    show(e) {
        this.props.history.push({
            pathname: '/result',
            state: {
                asset: this.state.info.asset,
                payment: this.state.info.payment
            }
        })
    }

    render() {
        return (
            <div>
                <Header title={"無職シミュレーター"} />
                <div className="App-body">
                    <Container>
                        <h2 className="h2-title">資産</h2>
                        <PriceRow
                            title={"現金/預金"}
                            id={"money"}
                            handleChange={this.handleChangeInputAssets.bind(this)}
                            handleOnBlur={this.handleOnBlurAssets.bind(this)}
                            value={this.state.info.assets.money} />
                        <PriceRow
                            title={"有価証券"}
                            id={"stock"}
                            handleChange={this.handleChangeInputAssets.bind(this)}
                            handleOnBlur={this.handleOnBlurAssets.bind(this)}
                            value={this.state.info.assets.stock} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"資産合計"}
                            id={"asset"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.asset}
                        />
                        <br />
                        <h2 className="h2-title">支出(月)</h2>
                        <PriceRow
                            title={"食費"}
                            id={"food"}
                            handleChange={this.handleChangeInputPayments.bind(this)}
                            handleOnBlur={this.handleOnBlurPayments.bind(this)}
                            value={this.state.info.payments.food} />
                        <PriceRow
                            title={"家賃"}
                            id={"rent"}
                            handleChange={this.handleChangeInputPayments.bind(this)}
                            handleOnBlur={this.handleOnBlurPayments.bind(this)}
                            value={this.state.info.payments.rent} />
                        <ColorLine color="gray" />
                        <PriceRow
                            title={"支出合計"}
                            id={"payment"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.info.payment}
                        />
                    </Container>
                    <br />
                    <Button variant="primary" type="button" onClick={this.show.bind(this)}>計算</Button>
                    <br />
                </div>
            </div >
        );
    }
}
export default withRouter(Simulator)