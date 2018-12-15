import React, { Component, Fragment } from "react";
import { debounce } from "lodash";

import "./style.css";
import ImagePreview from "../UrlPreview";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = debounce(this.handleChange.bind(this), 1000);
    this.state = {
      url: ""
    };
  }

  handleChange(url) {
    const { urlPreview } = this.props;
    if (url.length > 0) {
      // prettier-ignore
      // eslint-disable-next-line no-useless-escape
      const pattern = new RegExp(
								`(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$`,
								"i"
							);
      if (!pattern.test(url)) {
        alert("Please enter a valid URL.");
        return;
      } else {
        this.setState({ url });
        urlPreview(url);
      }
    }
  }

  handleSubmit = () => {
    const { urlSearch } = this.props;
    urlSearch(this.state.url);
  };

  render() {
    const { imageUrl, loading, title, previewUrl, description } = this.props;
    return (
      <Fragment>
        <div className="wrapper">
          <input
            type="text"
            className="form-control input"
            onChange={e => this.handleChange(e.target.value)}
            placeholder="Paste here!"
          />
          <button
            onClick={() => this.props.urlSearch(this.state.url)}
            className="btn btn-primary btn-md"
          >
            search
          </button>
        </div>
        <ImagePreview
          src={imageUrl}
          loading={loading}
          title={title}
          previewUrl={previewUrl}
          description={description}
        />
      </Fragment>
    );
  }
}
