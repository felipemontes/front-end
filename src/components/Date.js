import React, { Component } from "react";
import "./css/Date.css";

export default class Date extends Component {
  render() {
    return (
      <div className="date_container">
        <h5 className="date_title">Seleccione una fecha</h5>
        <input
          className="date_input"
          type="date"
          name="date"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
