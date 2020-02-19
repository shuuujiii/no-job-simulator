import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import * as inputjs from '../js/input';
import * as calcjs from '../js/calc';

class Payments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                food: "",
                rent: "",
            },
            display: {
                food: "",
                rent: "",
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
        this.props.updatePayment(payment)
    }

    render() {
        return (
            <div>
                <h2 className="h2-title">支出(月)</h2>
                <PriceRow
                    title={"食費"}
                    id={"food"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.food} />
                <PriceRow
                    title={"家賃"}
                    id={"rent"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.rent} />
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

export default Payments