import React, { Component } from "react";
import Date from "./Date";
import Range from "./Range";
import Text from "./Text";
import Response from "./Response";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/Form.css";

export default class Send extends Component {
  state = {
    sent: false,
    text: "",
    date: "00/00/0000",
    range: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSend = (e) => {
    e.preventDefault();
    this.setState({
      sent: true,
    });
    const button = document.getElementById("send_button");
    button.style.display = "none";
    const content = document.getElementById("form");
    content.style.display = "none";
  };

  render() {
    let textField;
    let rangeField;
    let dateField;

    if (this.props.text) {
      textField = (
        <Col>
          <Text onChange={this.onChange} />
        </Col>
      );
    }
    if (this.props.range) {
      rangeField = (
        <Col>
          <Range onChange={this.onChange} />
        </Col>
      );
    }
    if (this.props.date) {
      dateField = (
        <Col>
          <Date onChange={this.onChange} />
        </Col>
      );
    }
    return (
      <div className="main_cont">
        <Container className="container" id="form">
          <form>
            <Row>
              {textField}
              {rangeField}
              {dateField}
            </Row>
          </form>
        </Container>
        <Button
          onClick={this.onSend}
          className="button_send"
          size="sm"
          variant="primary"
          type="submit"
          id="send_button"
        >
          Enviar
        </Button>
        {this.state.sent && <Response info={this.state} />}
      </div>
    );
  }
}
