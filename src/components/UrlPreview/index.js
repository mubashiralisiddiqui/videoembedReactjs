import React, { Component, Fragment } from "react";

import "./style.css";

export default class PreviewUrl extends Component {
  render() {
    const { src, loading, title, previewUrl, description } = this.props;
    return (
      <div className="preview">
        {loading ? (
          <p style={{ color: "white" }}>loading...</p>
        ) : src ? (
          <Fragment>
            <div className="imageContainer">
              <img
                src={src}
                alt="Smiley face"
                style={{ height: "200px", width: "100%" }}
              />
            </div>
            <div className="descContainer">
              <p className="url">{previewUrl && previewUrl}</p>
              <p className="title">{title && title}</p>
              <p className="description">
                {description && description.length > 0
                  ? description
                  : "no description available"}
              </p>
            </div>
          </Fragment>
        ) : null}
      </div>
    );
  }
}
