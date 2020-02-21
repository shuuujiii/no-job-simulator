import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import PriceRow from './PriceRow';
import * as inputjs from '../js/input';
class PaymentsYear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            infoList: [{
                info: {
                    resident_tax: "",
                    car_tax: "",
                    insurance_fee: "",
                },
                display: {
                    resident_tax: "",
                    car_tax: "",
                    insurance_fee: "",
                },
            }],
        }
    }

    componentDidMount() {
        //selected変更時のために、state の infoList配列を作成する必要がある。
        let arr = []
        for (let i = 0; i < 12; i++) {
            arr.push({
                info: {
                    resident_tax: "",
                    car_tax: "",
                    insurance_fee: "",
                },
                display: {
                    resident_tax: "",
                    car_tax: "",
                    insurance_fee: "",
                },
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
                        info: {
                            [e.target.name]: e.target.value,
                        },
                        display: {
                            [e.target.name]: inputjs.InputComma(e.target.value),
                        }
                    }
                } else {
                    return value;
                }
            })
        });
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
                                    <Col>
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
                            title={"住民税"}
                            id={"resident_tax"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.infoList[this.state.selected].display.resident_tax} />
                        <PriceRow
                            title={"自動車税"}
                            id={"car_tax"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.infoList[this.state.selected].display.car_tax} />
                        <PriceRow
                            title={"保険料(ex.自動車保険)"}
                            id={"insurance_fee"}
                            handleChange={this.handleChangeInputInfo.bind(this)}
                            handleOnBlur={() => { return; }}
                            value={this.state.infoList[this.state.selected].display.insurance_fee} />
                    </Container>
                </div>
            </div>
        )
    }
}

export default PaymentsYear