import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import * as parsejs from '../js/parse';
class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: this.props.location.state.asset,
            payment: this.props.location.state.payment,
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
        if (asset === 0) {
            return "お金を貯めてから無職になってください！";
        }

        if (payment === 0) {
            return "支出がなければ一生無職でも大丈夫です。おめでとう！";
        }

        let allMonth = asset / payment;
        let year = Math.floor(Math.floor(allMonth) / 12);
        let month = Math.floor(allMonth) - year * 12;
        let day = Math.floor((allMonth - (month + year * 12)) * 30);
        let result = "";
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