import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions';

import Header from './Header';
import Assets from './Assets';
import RegularIncome from './RegularIncome';
import ExtraodinaryIncome from './ExtraodinaryIncome';
import RegularPayment from './RegularPayment';
import ExtraodinaryPayment from './ExtraodinaryPayment';

class Simulator extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <div>
                <Header title={"無職シミュレーター"} />
                <div className="App-body">
                    <Container>
                        <Assets />
                        <br />
                        {/* <RegularIncome /> */}
                        <br />
                        {/* <ExtraodinaryIncome /> */}
                        <br />
                        <RegularPayment />
                        <br />
                        {/* <ExtraodinaryPayment />  */}
                    </Container>
                    <br />
                    <Link to="/result"><Button>計算</Button></Link>
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