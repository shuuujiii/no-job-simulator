import React from 'react';
import { Form, Row, Col } from 'react-bootstrap'


class SelectMonth extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         selected: 0,
    //         id: this.props.id,
    //     }
    // }

    handleChangeSelect(e) {
        // this.setState({
        //     ...this.state,
        //     selected: e.target.value,
        // })
        this.props.onChange(e.target.value);
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
                <Form>
                    <Form.Group controlId={this.props.id}>
                        <Row>
                            <Col sm={{ offset: 6, span: 4 }} className="flexRowCenterParent" >
                                <Form.Control as="select" style={{ width: 100, alignSelf: "center" }}
                                    onChange={this.handleChangeSelect.bind(this)}
                                    value={this.props.selected}>
                                    {options}
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default SelectMonth