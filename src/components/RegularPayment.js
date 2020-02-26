import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import * as inputjs from '../js/input';
import * as calcjs from '../js/calc';

class RegularPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                food: "",
                rent: "",
                utility: "",
                communication: "",
                clothes: "",
                daily: "",
                hobby: "",
                education: "",
                transportation: "",
                otherPayment: "",

            },
            display: {
                food: "",
                rent: "",
                utility: "",
                communication: "",
                clothes: "",
                daily: "",
                hobby: "",
                education: "",
                transportation: "",
                otherPayment: "",
            },
            payment: {
                info: "",
                display: "",
            },
        }
    }

    handleChangeInputInfo(e) {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                [e.target.name]: inputjs.InputNumOnly(e.target.value),
            },
            display: {
                ...this.state.display,
                [e.target.name]: inputjs.InputComma(e.target.value),
            }
        });
    }

    handleOnBlurInfo() {
        let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.info });
        this.updatePayment(sum)
    }

    handleChangeInputPayment(e) {
        this.updatePayment(inputjs.InputNumOnly(e.target.value))
    }

    // !!!updateParentProps!!!;
    updatePayment(payment) {
        this.setState({
            ...this.state,
            payment: {
                info: payment,
                display: inputjs.InputComma(payment.toString()),
            }
        })
        this.props.updateParentInfo("payment", payment)
    }

    render() {
        return (
            <div>
                <h2 className="h2-title">支出(月)</h2>
                <PriceRow
                    title={"家賃"}
                    id={"rent"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.rent} />
                <PriceRow
                    title={"光熱費"}
                    id={"utility"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.utility} />
                <PriceRow
                    title={"通信費"}
                    id={"communication"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.communication} />
                <PriceRow
                    title={"服飾費"}
                    id={"clothes"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.clothes} />
                <PriceRow
                    title={"日用品"}
                    id={"daily"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.daily} />
                <PriceRow
                    title={"娯楽費"}
                    id={"hobby"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.hobby} />
                <PriceRow
                    title={"教育費"}
                    id={"education"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.education} />
                <PriceRow
                    title={"交通費"}
                    id={"transportation"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.transportation} />
                <PriceRow
                    title={"食費"}
                    id={"food"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.food} />
                <PriceRow
                    title={"その他"}
                    id={"otherPayment"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.otherPayment} />
                <ColorLine color="gray" />

                <PriceRow
                    title={"支出合計"}
                    id={"payment"}
                    handleChange={this.handleChangeInputPayment.bind(this)}
                    handleOnBlur={() => { return; }}
                    value={this.state.payment.display}
                />
            </div>
        )
    }
}

export default RegularPayment