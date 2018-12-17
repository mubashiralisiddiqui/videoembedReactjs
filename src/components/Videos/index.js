import React, { Component } from "react";

import "./style.css";

export default class SearchBar extends Component {
  render() {
    const { src, loading } = this.props;
    return (
      <div className="videoContainer">
        {loading ? <p style={{ color: "white" }}>loading...</p> : null}
        {src ? (
          <iframe
            width="600px"
            height="400px"
            title="play"
            src={src}
            data-autoplay="true"
          />
        ) : null}
      </div>
    );
  }
}
