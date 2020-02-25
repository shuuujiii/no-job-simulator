import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline'
import * as inputjs from '../js/input';
import * as calcjs from '../js/calc';
class PaymentsYear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            infoList: [{
                info: {
                    tax: "",
                    insurance: "",
                    other: "",
                },
                display: {
                    tax: "",
                    insurance: "",
                    other: "",
                },
                total: {
                    info: "",
                    display: "",
                }
            }],
        }
    }

    componentDidMount() {
        //selected変更時のために、state の infoList配列を作成する必要がある。
        let arr = []
        for (let i = 0; i < 12; i++) {
            arr.push({
                info: {
                    tax: "",
                    insurance: "",
                    other: "",
                },
                display: {
                    tax: "",
                    insurance: "",
                    other: "",
                },
                total: {
                    info: "",
                    display: "",
                }
            })
        }
        this.setState({
            ...this.state,
            infoList: arr,
        })
    }

    handleChangeSelect(e) {
        this.setState({
            selected: e.target.value,
        })
    }

    handleChangeInputInfo(e) {
        this.setState({
            ...this.state,
            infoList: this.state.infoList.map((value, index) => {
                if (this.state.selected == index) {
                    return {
                        ...value,
                        info: {
                            ...value.info,
                            [e.target.name]: inputjs.InputNumOnly(e.target.value),
                        },
                        display:
                        {
                            ...value.display,
                            [e.target.name]: inputjs.InputComma(e.target.value),
                        },
                    }
                } else {
                    return value;
                }
            })
        });
    }
    handleOnBlurInfo() {
        let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.infoList[this.state.selected].info });
        this.updatePayment(sum)
    }

    handleChangeInputPayment(e) {
        this.updatePayment(inputjs.InputNumOnly(e.target.value))
    }

    // !!!updateParentProps!!!;
    updatePayment(payment) {
        this.setState({
            ...this.state,
            infoList: this.state.infoList.map((value, index) => {
                if (this.state.selected == index) {
                    return {
                        ...value,
                        total: {
                            info: payment,
                            display: inputjs.InputComma(payment.toString()),
                        },
                    }
                } else {
                    return value;
                }
            })
        })
    }

    render() {
        var month = Array.from(Array(12).keys(), x => x + 1);
        var options = month.map(
            (value, index) => {
                return (
                    <option key={index} value={index}>
                        {value + "月"}
                    </option>
                )
            }
        );

        return (
            <div>
                <div className="App-body">
                    <Container>
                        <Form>
                            <Form.Group controlId="ControlSelectMonth">
                                <Row>
                                    <Col style={{ textAlign: "right" }}>
                                        <Form.Label>月</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control as="select"
                                            style={{ width: 100 }}
                                            onChange={this.handleChangeSelect.bind(this)}
                                            value={this.state.selected}>
                                            {options}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                        <PriceRow
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
                            value={this.state.infoList[this.state.selected].display.insurance} />
                        <PriceRow
                            title={"その他"}
                            id={"other"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={this.handleOnBlurInfo.bind(this)}
                            value={this.state.infoList[this.state.selected].display.other} />
                        <ColorLine color={"gray"} />
                        <PriceRow
                            title={"合計"}
                            id={"total"}
                            handleChange={this.handleChangeInputPayment.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.infoList[this.state.selected].total.display} />

                    </Container>
                </div>
            </div>
        )
    }
}

export default PaymentsYear