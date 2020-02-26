import React from 'react';
import { Form, Row, Col } from 'react-bootstrap'
import PriceRow from '../components/PriceRow';
import * as inputjs from '../js/input';
class ExtraodinaryIncome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            infoList: [
                {
                    info: {
                        exincome: "",
                    },
                    display: {
                        exincome: "",
                    },
                }
            ]
        };
    }

    componentDidMount() {
        //selected変更時のために、state の infoList配列を作成する必要がある。
        let arr = []
        for (let i = 0; i < 12; i++) {
            arr.push({
                info: {
                    exincome: "",
                },
                display: {
                    exincome: "",
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

    handleOnBlur() {
        let arrExIncome = []
        this.state.infoList.forEach((value) => {
            arrExIncome.push(value.info.exincome);
        })
        this.props.updateParentInfo('exIncome', arrExIncome)
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
                <h2 className="h2-title">臨時収入</h2>
                <Form>
                    <Form.Group controlId="exIncomeMonth">
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
                    title={"臨時収入"}
                    id={"exincome"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlur.bind(this)}
                    value={this.state.infoList[this.state.selected].display.exincome} />
            </div>
        )
    }
}

export default ExtraodinaryIncome