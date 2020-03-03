import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions';
import { Row, Col, FormControl } from 'react-bootstrap';

import Header from './Header';
import Assets from './Assets';
import RegularIncome from './RegularIncome';
import ExtraodinaryIncome from './ExtraodinaryIncome';
import RegularPayment from './RegularPayment';
import ExtraodinaryPayment from './ExtraodinaryPayment';

class Simulator extends Component {
    componentDidMount() {
        console.log("componentDidMount")
        this.props.fetchData()
    }

    show(e) {
        this.props.history.push({
            pathname: '/result',
            // state: {
            //     asset: this.props.siminfo.info.asset,
            //     payment: this.props.siminfo.info.payment,
            //     income: this.props.siminfo.info.income,
            //     exIncome: this.props.siminfo.info.exIncome,
            //     exPayment: this.props.siminfo.info.exPayment,
            // }
        })
    }

    render() {
        return (
            <div>
                <Header title={"無職シミュレーター"} />
                <div className="App-body">
                    <Container>
                        <Assets />
                        <br />
                        <RegularIncome />
                        <br />
                        <ExtraodinaryIncome />
                        <br />
                        <RegularPayment />
                        <br />
                        <ExtraodinaryPayment />
                    </Container>
                    <br />
                    <Link to="/result"><Button>計算</Button></Link>
                    {/* <Button variant="primary" type="button" onClick={this.show.bind(this)}></Button> */}
                    <br />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => (
    { siminfo: state.sim }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(simActions.fetchData()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Simulator)