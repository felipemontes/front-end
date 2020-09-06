import React, { Component } from "react";
import "./css/Text.css";

export default class Text extends Component {
  render() {
    return (
      <div className="text_container">
        <h5 className="text">Digite el texto</h5>
        <textarea
          className="text_area"
          name="text"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
