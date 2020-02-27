import React, { Component } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

class PriceRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.id,
        }
    }

    onHandleChangeInput(e) {
        this.props.handleChange(e);
    }

    onHandleBlur() {
        this.props.handleOnBlur();
    }
    render() {
        const styles = {
            row: {
                marginBottom: 3,
            },
            h2: {
                color: "#FFFFFF",
                border: "solid 3px #364e96",
                padding: "0.2em",
                borderRadius: "0.5em",
                textAlign: "center",
            }
        };
        const handleFocus = (e) => e.target.select();

        return (
            <div>
                <Row style={styles.row}>
                    <Col sm={{ span: 4, offset: 2 }} style={{ textAlign: "center" }}> {this.state.title} </Col>
                    <Col sm={4} className="flexRowCenterParent">
                        <FormControl style={{ maxWidth: "160px", minWidth: "160px", alignSelf: "center" }}
                            id={this.props.id}
                            name={this.props.id}
                            onChange={this.onHandleChangeInput.bind(this)}
                            onBlur={this.onHandleBlur.bind(this)}
                            onFocus={handleFocus}
                            value={this.props.value}
                        />
                    </Col >
                </Row>
            </div>
        )
    }
}


export default PriceRow

