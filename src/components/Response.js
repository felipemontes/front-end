import React, { Component } from "react";
import "./css/Response.css";
import { Container, Row, Col } from "react-bootstrap";

export default class Response extends Component {
  render() {
    return (
      <div>
        <Container className="res_container">
          <Row>
            <Col>
              <h5 className="res_title">Datos del formulario</h5>
              <pre className="res_result">
                {JSON.stringify(this.props.info, ["text", "date", "range"], 6)}
              </pre>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
