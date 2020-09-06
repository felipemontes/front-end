import React, { Component } from "react";
import FormIn from "./components/Form";
import { Button } from "react-bootstrap";
import { Form as Input } from "react-bootstrap";
import "./App.css";
export default class Form extends Component {
  state = {
    text: false,
    date: false,
    range: false,
    sent: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text || this.state.range || this.state.date) {
      this.setState({
        sent: true,
      });
      const content = document.getElementById("button");
      content.style.display = "none";
    } else {
      alert("Seleccione algun campo");
    }
  };

  render() {
    return (
      <div>
        <div className="main_cont">
          <h5 className="title">
            Seleccione los campos que tendrá el formulario
          </h5>
          <form className="form" onSubmit={this.onSubmit}>
            <Input.Check
              inline
              label="Texto"
              name="text"
              className="check"
              onChange={this.onChange}
              disabled={this.state.sent}
            ></Input.Check>
            <Input.Check
              inline
              label="Fecha"
              name="date"
              className="check"
              checked={this.state.date}
              onChange={this.onChange}
              disabled={this.state.sent}
            ></Input.Check>
            <Input.Check
              inline
              label="Número"
              name="range"
              className="check"
              checked={this.state.range}
              onChange={this.onChange}
              disabled={this.state.sent}
            ></Input.Check>
            <Button
              className="button"
              size="sm"
              variant="primary"
              type="submit"
              id="button"
            >
              Crear
            </Button>
          </form>
        </div>
        {this.state.sent && (
          <FormIn
            date={this.state.date}
            range={this.state.range}
            text={this.state.text}
          />
        )}
      </div>
    );
  }
}
