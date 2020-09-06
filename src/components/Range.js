import React, { Component } from "react";
import "./css/Range.css";

export default class Range extends Component {
  render() {
    return (
      <div className="range_container">
        <h5 className="range_title">Seleccione un valor:</h5>
        0
        <input
          className="range_input"
          type="range"
          min="0"
          max="10"
          name="range"
          onChange={this.props.onChange}
        />
        10
      </div>
    );
  }
}
