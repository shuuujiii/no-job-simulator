import React from 'react';
import PriceRow from '../components/PriceRow';
import * as simActions from '../actions/simulatorActions'
import { connect } from 'react-redux';

class RegularIncome extends React.Component {

    render() {
        return (
            <div>
                <h2 className="h2-title">定期収入</h2>
                <PriceRow
                    title={"定期収入"}
                    id={"income"}
                    handleChange={(key, value) => this.props.updateIncome(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.income.display.income} />
            </div>
        )
    }
}

const mapStateToProps = state => (
    { income: state.sim.income }
)

const mapDispatchToProps = dispatch => {
    return {
        updateIncome: (key, value) => dispatch(simActions.updateIncome(key, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegularIncome)