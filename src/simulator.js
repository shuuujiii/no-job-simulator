import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Header from './components/Header';
import Assets from './components/Assets';
import Payments from './components/Payments';

class Simulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                asset: "",
                payment: "",
            },
            error: "",
        };
    }

    updateAsset(asset) {
        console.log("asset", asset);
        this.setState({
            info: {
                ...this.state.info,
                asset: asset,
            }
        })
    }

    updatePayment(payment) {
        this.setState({
            info: {
                ...this.state.info,
                payment: payment,
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
                        <Assets
                            // info={this.state.info}
                            updateAsset={(value) => this.updateAsset(value)} />
                        <br />
                        <Payments
                            info={this.state.info}
                            updatePayment={(value) => this.updatePayment(value)} />
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