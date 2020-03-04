import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import { connect } from 'react-redux';
import * as  inputjs from '../js/input';
import * as simActions from '../actions/regularPaymentActions'

class RegularPayment extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <div>
                <h2 className="h2-title">支出(月)</h2>
                <PriceRow
                    title={"家賃"}
                    id={"rent"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.rent)} />
                <PriceRow
                    title={"光熱費"}
                    id={"utility"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.utility)} />
                <PriceRow
                    title={"通信費"}
                    id={"communication"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.communication)} />
                <PriceRow
                    title={"服飾費"}
                    id={"clothes"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.clothes)} />
                <PriceRow
                    title={"日用品"}
                    id={"daily"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.daily)} />
                <PriceRow
                    title={"娯楽費"}
                    id={"hobby"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.hobby)} />
                <PriceRow
                    title={"教育費"}
                    id={"education"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.education)} />
                <PriceRow
                    title={"交通費"}
                    id={"transportation"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.transportation)} />
                <PriceRow
                    title={"食費"}
                    id={"food"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.food)} />
                <PriceRow
                    title={"その他"}
                    id={"otherPayment"}
                    handleChange={(key, value) => this.props.updatePayments(key, value)}
                    handleOnBlur={() => this.props.sumPayments()}
                    value={inputjs.InputComma(this.props.payments.info.otherPayment)} />
                <ColorLine color="gray" />

                <PriceRow
                    title={"支出合計"}
                    id={"payment"}
                    handleChange={(key, value) => this.props.updatePayment(key, value)}
                    handleOnBlur={() => { return; }}
                    value={inputjs.InputComma(this.props.payments.total)} />
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        payments: state.sim.payments,
    }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(simActions.fetchPaymentsData),
        updatePayments: (key, value) => dispatch(simActions.updatePayments(key, value)),
        sumPayments: () => dispatch(simActions.sumPayments()),
        updatePayment: (key, value) => dispatch(simActions.updatePayment(key, value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegularPayment)