import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Header from './components/Header';
import Assets from './components/Assets';
import RegularIncome from './components/RegularIncome';
import ExtraodinaryIncome from './components/ExtraodinaryIncome';
import RegularPayment from './components/RegularPayment';
import ExtraodinaryPayment from './components/ExtraodinaryPayment';

class Simulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                asset: "",
                payment: "",
                income: "",
                exIncome: [],
                exPayment: [],
            },
            error: "",
        };
    }

    updateParentInfo(key, value) {
        this.setState({
            info: {
                ...this.state.info,
                [key]: value,
            }
        })
        console.log(key, value)
    }

    show(e) {
        this.props.history.push({
            pathname: '/result',
            state: {
                asset: this.state.info.asset,
                payment: this.state.info.payment,
                income: this.state.info.income,
                exIncome: this.state.info.exIncome,
                exPayment: this.state.info.exPayment,
            }
        })
    }


    render() {
        return (
            <div>
                <Header title={"無職シミュレーター"} />
                <div className="App-body">
                    <Container>
                        <Assets
                            updateParentInfo={(key, value) => this.updateParentInfo(key, value)} />
                        <br />
                        <RegularIncome
                            updateParentInfo={(key, value) => this.updateParentInfo(key, value)} />
                        <br />
                        <ExtraodinaryIncome
                            updateParentInfo={(key, value) => this.updateParentInfo(key, value)} />
                        <br />
                        <RegularPayment
                            info={this.state.info}
                            updateParentInfo={(key, value) => this.updateParentInfo(key, value)} />
                        <br />
                        <ExtraodinaryPayment
                            updateParentInfo={(key, value) => this.updateParentInfo(key, value)} />
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