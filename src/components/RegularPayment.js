import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions'

class RegularPayment extends React.Component {
    render() {
        return (
            <div>
                <h2 className="h2-title">支出(月)</h2>
                <PriceRow
                    title={"家賃"}
                    id={"rent"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.rent} />
                <PriceRow
                    title={"光熱費"}
                    id={"utility"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.utility} />
                <PriceRow
                    title={"通信費"}
                    id={"communication"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.communication} />
                <PriceRow
                    title={"服飾費"}
                    id={"clothes"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.clothes} />
                <PriceRow
                    title={"日用品"}
                    id={"daily"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.daily} />
                <PriceRow
                    title={"娯楽費"}
                    id={"hobby"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.hobby} />
                <PriceRow
                    title={"教育費"}
                    id={"education"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.education} />
                <PriceRow
                    title={"交通費"}
                    id={"transportation"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.transportation} />
                <PriceRow
                    title={"食費"}
                    id={"food"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.food} />
                <PriceRow
                    title={"その他"}
                    id={"otherPayment"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={this.props.siminfo.payments.display.otherPayment} />
                <ColorLine color="gray" />

                <PriceRow
                    title={"支出合計"}
                    id={"payment"}
                    handleChange={(key, value) => this.props.updateTotal(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.siminfo.total.payment.display}
                />
            </div>
        )
    }
}
const mapStateToProps = state => (
    { siminfo: state.sim }
);

const mapDispatchToProps = dispatch => {
    return {
        updatePayments: (key, value) => dispatch(simActions.updatePayments(key, value)),
        sumPayments: () => dispatch(simActions.sumPayments()),
        updateTotal: (key, value) => dispatch(simActions.updateTotal(key, value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegularPayment)