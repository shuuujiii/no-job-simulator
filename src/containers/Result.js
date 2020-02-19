import React from 'react';
import { Button } from 'react-bootstrap';
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
            error: "",
        })
    }

    getResult() {
        let asset = parseInt(this.state.asset) || 0;
        let payment = parseInt(this.state.payment) || 0;
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
                <header className="App-header">
                    結果
                <br />
                    {this.state.result}
                    <br />
                    <Button onClick={this.handleClick.bind(this)}>戻る</Button>
                </header>
            </div>
        )
    }
}

export default Result