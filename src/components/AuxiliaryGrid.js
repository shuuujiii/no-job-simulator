import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

// 
export default class AuxiliaryGrid extends Component {
    render() {
        const styles = {
            col: {
                border: "solid 1px red",
            }
        }
        return (
            <div>
                <Row>
                    <Col xs={4} style={styles.col}>xs=4</Col>
                    <Col xs={4} style={styles.col}>xs=4</Col>
                    <Col xs={4} style={styles.col}>xs=4</Col>
                </Row>
                <Row>
                    <Col sm={4} style={styles.col}>sm=4</Col>
                    <Col sm={4} style={styles.col}>sm=4</Col>
                    <Col sm={4} style={styles.col}>sm=4</Col>
                </Row>
                <Row>
                    <Col xl={4} style={styles.col}>xl=4</Col>
                    <Col xl={4} style={styles.col}>xl=4</Col>
                    <Col xl={4} style={styles.col}>xl=4</Col>
                </Row>

            </div>
        )
    }
}
