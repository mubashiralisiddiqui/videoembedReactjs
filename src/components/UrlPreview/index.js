import React, { Component } from "react";

import "./style.css";

export default class PreviewUrl extends Component {
  render() {
    const { src, loading, title, previewUrl, description, url } = this.props;
    return (
      <div className="preview">
        {loading ? (
          <p style={{ color: "white" }}>loading...</p>
        ) : src ? (
          <a href={url} target="_blank" className="previewContainer">
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
          </a>
        ) : null}
      </div>
    );
  }
}
