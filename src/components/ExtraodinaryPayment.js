import React from 'react';
import SelectMonth from '../components/selectMonth'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline'
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions'

class ExtraodinaryOutcome extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         selected: 0,
    //         infoList: [{
    //             info: {
    //                 tax: "",
    //                 insurance: "",
    //                 other: "",
    //             },
    //             display: {
    //                 tax: "",
    //                 insurance: "",
    //                 other: "",
    //             },
    //             total: {
    //                 info: "",
    //                 display: "",
    //             }
    //         }],
    //     }
    // }

    // componentDidMount() {
    //     //selected変更時のために、state の infoList配列を作成する必要がある。
    //     let arr = []
    //     for (let i = 0; i < 12; i++) {
    //         arr.push({
    //             info: {
    //                 tax: "",
    //                 insurance: "",
    //                 other: "",
    //             },
    //             display: {
    //                 tax: "",
    //                 insurance: "",
    //                 other: "",
    //             },
    //             total: {
    //                 info: "",
    //                 display: "",
    //             }
    //         })
    //     }
    //     this.setState({
    //         ...this.state,
    //         infoList: arr,
    //     })
    // }

    // handleChangeSelect(value) {
    //     this.setState({
    //         ...this.state,
    //         selected: value,
    //     })
    // }

    // handleChangeInputInfo(e) {
    //     this.setState({
    //         ...this.state,
    //         infoList: this.state.infoList.map((value, index) => {
    //             if (this.state.selected == index) {
    //                 return {
    //                     ...value,
    //                     info: {
    //                         ...value.info,
    //                         [e.target.name]: inputjs.InputNumOnly(e.target.value),
    //                     },
    //                     display:
    //                     {
    //                         ...value.display,
    //                         [e.target.name]: inputjs.InputComma(e.target.value),
    //                     },
    //                 }
    //             } else {
    //                 return value;
    //             }
    //         })
    //     });
    // }
    // handleOnBlurInfo() {
    //     let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.infoList[this.state.selected].info });
    //     this.updatePayment(sum)
    // }

    // handleChangeInputPayment(e) {
    //     this.updatePayment(inputjs.InputNumOnly(e.target.value))
    // }

    // !!!updateParentProps!!!;
    // updatePayment(payment) {
    //     this.setState({
    //         ...this.state,
    //         infoList: this.state.infoList.map((value, index) => {
    //             if (this.state.selected == index) {
    //                 return {
    //                     ...value,
    //                     total: {
    //                         info: payment,
    //                         display: inputjs.InputComma(payment.toString()),
    //                     },
    //                 }
    //             } else {
    //                 return value;
    //             }
    //         })
    //     })
    //     let arr = []
    //     this.state.infoList.forEach((value) => {
    //         arr.push(value.total.info)
    //     })
    //     arr[this.state.selected] = payment
    //     this.props.updateParentInfo("exPayment", arr)
    // }

    render() {
        return (
            <div>
                <h2 className="h2-title">特別支出</h2>
                <SelectMonth
                    id={"exPaymentMonth"}
                    selected={this.props.siminfo.expayments.selected}
                    onChange={(index) => this.props.updateExPaymentsSelected(index)}
                />
                {/* <PriceRow
                    title={"税金"}
                    id={"tax"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.infoList[this.state.selected].display.tax} />
                <PriceRow
                    title={"保険料"}
                    id={"insurance"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.infoList[this.state.selected].display.insurance} /> */}
                <PriceRow
                    title={"特別支出"}
                    id={"expayments"}
                    handleChange={(key, value) => this.props.updateExPayments(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.siminfo.expayments.display.expayments[this.props.siminfo.expayments.selected]} />
                {/* handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.infoList[this.state.selected].display.other} /> */}
                <ColorLine color={"gray"} />
                {/* <PriceRow
                    title={"合計"}
                    id={"total"}
                    handleChange={this.handleChangeInputPayment.bind(this)}
                    handleOnBlur={() => { return; }}
                    value={this.state.infoList[this.state.selected].total.display} /> */}
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