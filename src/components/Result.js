import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import * as parsejs from '../js/parse';
class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: this.props.location.state.asset,
            payment: this.props.location.state.payment,
            income: this.props.location.state.income,
            exIncome: this.props.location.state.exIncome,
            exPayment: this.props.location.state.exPayment,
            result: "",
        }
    }

    handleClick() {
        this.props.history.push("/");
    }

    componentDidMount() {
        this.setState({
            result: this.getResult(),
        })
    }

    getResult() {
        let asset = parsejs.parseIntZero(this.state.asset);
        let payment = parsejs.parseIntZero(this.state.payment);
        let income = parsejs.parseIntZero(this.state.income)
        if (asset === 0) {
            return "お金を貯めてから無職になってください！";
        }

        if (payment === 0) {
            return "支出がなければ一生無職でも大丈夫です。おめでとう！";
        }

        // per month
        let monthIndex = new Date().getMonth()
        let nowMonth = monthIndex + 1

        //convert arrays
        var arrExIncome = [...this.state.exIncome.slice(monthIndex, this.state.exIncome.length), ...this.state.exIncome.slice(0, monthIndex)]
        var arrExPayment = [...this.state.exPayment.slice(monthIndex, this.state.exPayment.length), ...this.state.exIncome.slice(0, monthIndex)]
        //asset - payment
        let restMoney = asset
        let index = 0
        let allMonth = 0
        console.clear();
        while (restMoney > 0) {
            console.log('restMoney', restMoney)
            restMoney -= payment
            console.log('payment', payment)
            console.log('-payment', restMoney)
            restMoney -= arrExPayment[index]
            console.log('expayment', arrExPayment[index])
            console.log('-expayment', restMoney)
            restMoney += income
            console.log('income', income)
            console.log('+income', restMoney)
            restMoney += arrExIncome[index]
            console.log('exIncome', arrExIncome[index])
            console.log('+exIncome', restMoney)
            index >= 11 ? index = 0 : index++
            if (restMoney > 0) { allMonth++ }
            console.log(allMonth)
        }
        let year = Math.floor(Math.floor(allMonth) / 12);
        let month = Math.floor(allMonth) - year * 12;
        let day = Math.floor((allMonth - (month + year * 12)) * 30);
        let result = this.getConvertLast(year, month, day);

        return result;
    }

    getConvertLast(year, month, day) {
        let result = ""
        if (year !== 0) {
            result += year + "年";
        }
        if (month !== 0) {
            result += month + "ヶ月";
        }
        if (day !== 0) {
            result += day + "日"
        }
        if (result !== "") {
            result = "あと" + result + "!";
        }
        return result;
    }

    render() {
        return (
            <div>
                <Header title={"結果"} />
                <div className="App-body">
                    <div>{this.state.result}</div>
                    <br />
                    <Button onClick={this.handleClick.bind(this)}>戻る</Button>
                </div>
            </div>
        )
    }
}

export default Result