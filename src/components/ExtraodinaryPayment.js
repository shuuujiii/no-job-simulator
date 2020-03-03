import React from 'react';
import SelectMonth from '../components/selectMonth'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline'
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions'

class ExtraodinaryOutcome extends React.Component {
    render() {
        return (
            <div>
                <h2 className="h2-title">特別支出</h2>
                <SelectMonth
                    id={"exPaymentMonth"}
                    selected={this.props.siminfo.expayments.selected}
                    onChange={(index) => this.props.updateExPaymentsSelected(index)}
                />
                <PriceRow
                    title={"特別支出"}
                    id={"expayments"}
                    handleChange={(key, value) => this.props.updateExPayments(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.siminfo.expayments.display.expayments[this.props.siminfo.expayments.selected]} />
                <ColorLine color={"gray"} />
            </div>
        )
    }
}

const mapStateToProps = state => (
    { siminfo: state.sim }
);

const mapDispatchToProps = dispatch => {
    return {
        updateExPaymentsSelected: (index) => dispatch(simActions.updateExpaymentsSelected(index)),
        updateExPayments: (key, value) => dispatch(simActions.updateExPayments(key, value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraodinaryOutcome)