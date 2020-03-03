import React from 'react';
import PriceRow from '../components/PriceRow';
import SelectMonth from '../components/selectMonth';
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions'
class ExtraodinaryIncome extends React.Component {

    render() {
        return (
            <div>
                <h2 className="h2-title">臨時収入</h2>
                <SelectMonth
                    id={"exIncomeMonth"}
                    selected={this.props.siminfo.exincome.selected}
                    onChange={(index) => this.props.updateExIncomeSelected(index)}
                />
                <PriceRow
                    title={"臨時収入"}
                    id={"exincome"}
                    handleChange={(key, value) => this.props.updateExIncome(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.siminfo.exincome.display.exincome[this.props.siminfo.exincome.selected]} />
            </div>
        )
    }
}

const mapStateToProps = state => (
    { siminfo: state.sim }
);

const mapDispatchToProps = dispatch => {
    return {
        updateExIncomeSelected: (index) => dispatch(simActions.updateExIncomeSelected(index)),
        updateExIncome: (key, value) => dispatch(simActions.updateExIncome(key, value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraodinaryIncome)