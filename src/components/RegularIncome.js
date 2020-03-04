import React from 'react';
import PriceRow from '../components/PriceRow';
import * as simActions from '../actions/incomeActions'
import { connect } from 'react-redux';
import * as inputjs from '../js/input';

class RegularIncome extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <div>
                <h2 className="h2-title">定期収入</h2>
                <PriceRow
                    title={"定期収入"}
                    id={"income"}
                    handleChange={(key, value) => this.props.updateIncome(key, value)}
                    handleOnBlur={() => { return; }}
                    value={inputjs.InputComma(this.props.income.income)} />
            </div>
        )
    }
}

const mapStateToProps = state => (
    { income: state.sim.income }
)

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(simActions.fetchIncomeData()),
        updateIncome: (key, value) => dispatch(simActions.updateIncome(key, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegularIncome)