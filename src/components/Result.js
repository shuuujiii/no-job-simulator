import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import LineGraph from './Line';
import * as parsejs from '../js/parse';
import * as commonjs from '../js/common';
import { connect } from 'react-redux';
class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            assets: [],
            result: {
                remainMonth: "",
                deadline: "",
            },
        }
    }
    componentDidMount() {
        let monthIndex = new Date().getMonth()
        let assets = this.getAssets(monthIndex)
        let labels = this.getLabels(monthIndex, assets.length)
        // delete firstdata and lastdata(minusdata)
        let result = this.getResult(assets.length - 2)
        this.setState({
            ...this.state,
            result: result,
            labels: labels,
            assets: assets,
        })
    }



    getAssets(monthIndex) {
        let asset = parsejs.parseIntZero(this.props.siminfo.total.asset.info);
        let payment = parsejs.parseIntZero(this.props.siminfo.total.payment.info);
        let income = parsejs.parseIntZero(this.props.siminfo.income.info.income);
        let arrExIncome = [...this.props.siminfo.exincome.info.exincome]
        let arrExPayment = [...this.props.siminfo.expayments.info.expayments]
        let restMoney = asset
        let assets = [restMoney]
        while (restMoney >= 0) {
            restMoney -= payment
            restMoney -= commonjs.isEmpty(arrExPayment[monthIndex]) ? 0 : arrExPayment[monthIndex]
            restMoney += income
            restMoney += commonjs.isEmpty(arrExIncome[monthIndex]) ? 0 : arrExIncome[monthIndex]
            monthIndex >= 11 ? monthIndex = 0 : monthIndex++
            assets.push(restMoney)
            //100年を最大値として終了する
            if (assets.length >= 1200) { break; }
        }
        return assets;
    }

    getLabels(monthIndex, assetsLength) {
        const arrMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        let arrfirstYear = [...arrMonth.slice(monthIndex, arrMonth.length), ...arrMonth.slice(0, monthIndex)]
        let arrReturn = []
        let year = Math.floor(Math.floor(assetsLength / 12));
        for (let i = 0; i < year; i++) {
            arrReturn = arrReturn.concat(arrfirstYear)
        }
        let month = assetsLength - year * 12
        for (let i = 0; i < month; i++) {
            arrReturn.push(arrfirstYear[i])
        }
        return arrReturn
    }

    getResult(allMonth) {
        if (allMonth <= 0) {
            return {
                remainMonth: "お金を貯めてから無職になってください！",
                deadline: "終了！",
            }
        }
        if (allMonth >= 100) {
            return {
                remainMonth: "100年以上無職でも大丈夫です。おめでとう！",
                deadline: "∞",
            }
        }
        let year = Math.floor(Math.floor(allMonth) / 12);
        let month = Math.floor(allMonth) - year * 12;
        let day = Math.floor((allMonth - (month + year * 12)) * 30);
        let result = this.getConvertLast(year, month, day);
        let today = new Date()
        today.setMonth(today.getMonth() + allMonth)
        let deadline = today.getFullYear() + '年' + (today.getMonth() + 1) + "月まで"
        return {
            remainMonth: result,
            deadline: deadline,
        };
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
                    <div>{this.state.result.remainMonth}</div>
                    <div>{this.state.result.deadline}</div>
                    <br />
                </div>
                <LineGraph
                    data={this.state.assets}
                    labels={this.state.labels} />
                <div className="App-body">
                    <br />
                    <Link to="/"><Button>戻る</Button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { siminfo: state.sim }
);

export default connect(mapStateToProps, null)(Result)