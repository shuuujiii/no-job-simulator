import React from 'react';
import PriceRow from '../components/PriceRow';
import SelectMonth from '../components/selectMonth';
import { connect } from 'react-redux';
import * as simActions from '../actions/extraodinaryIncomeActions';
import * as inputjs from '../js/input';
class ExtraodinaryIncome extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                <h2 className="h2-title">臨時収入</h2>
                <SelectMonth
                    id={"exIncomeMonth"}
                    selected={this.props.exincome.selected}
                    onChange={(index) => this.props.updateExIncomeSelected(index)}
                />
                <PriceRow
                    title={"臨時収入"}
                    id={"exincome"}
                    handleChange={(key, value) => this.props.updateExIncome(key, value)}
                    handleOnBlur={() => { return; }}
                    value={inputjs.InputComma(this.props.exincome.info.exincome[this.props.exincome.selected])} />
            </div>
        )
    }
}

const mapStateToProps = state => (
    { exincome: state.sim.exincome }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(simActions.fetchExIncomeData()),
        updateExIncomeSelected: (index) => dispatch(simActions.updateExIncomeSelected(index)),
        updateExIncome: (key, value) => dispatch(simActions.updateExIncome(key, value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraodinaryIncome)