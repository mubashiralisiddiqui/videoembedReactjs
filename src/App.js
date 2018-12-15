import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { SearchBar, Videos } from "./components";
import { FetchActions } from "./redux/actions";
import "./App.css";

class App extends Component {
  /**
   * initializing states
   */
  state = {
    url: null,
    imageUrl: null,
    loading: false,
    description: "",
    title: "",
    previewUrl: ""
  };
  // search url
  urlSearch = query => {
    this.setState({
      loading: true,
      url: null
    });
    let video_id = query.split("v=")[1];
    const ampersandPosition = video_id && video_id.indexOf("&");
    if (video_id && ampersandPosition !== -1) {
      video_id = video_id && video_id.substring(0, ampersandPosition);
    }
    let sourceUrl = "";
    if (query.includes("facebook.com") && query.includes("video")) {
      sourceUrl = `https://www.facebook.com/plugins/video.php?href=${query}/&width=600&height=400`;
      this.setState({ url: sourceUrl, loading: false });
    } else if (query.includes("youtube.com" && video_id)) {
      sourceUrl = `https://www.youtube.com/embed/${video_id}`;
      this.setState({ url: sourceUrl, loading: false });
    } else if (query.includes("vimeo.com")) {
      const vimeo_id = query.split("com/")[1];
      sourceUrl = `https://player.vimeo.com/video/${vimeo_id && vimeo_id}`;
      this.setState({ url: sourceUrl, loading: false });
    } else {
      this.setState({ loading: false });
      window.open(`${query}`, "_blank");
      return;
    }
  };
  // handle url preview
  urlPreview = url => {
    this.setState({
      loading: true,
      imageUrl: ""
    });
    axios
      .get(`https://api.microlink.io/?url=${url}`)
      .then(preview => {
        const imageUrl = preview && preview.data.data.image.url;
        const description = preview && preview.data.data.description;
        const title = preview && preview.data.data.title;
        const previewUrl = preview && preview.data.data.url;
        let obj = {
          imageUrl,
          description,
          title,
          previewUrl
        };
        this.props.getDetails(obj);
        this.setState({
          imageUrl,
          description,
          title,
          previewUrl,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };

  render() {
    const {
      url,
      imageUrl,
      valid,
      loading,
      title,
      previewUrl,
      description
    } = this.state;
    return (
      <div className="App viewport">
        <SearchBar
          urlPreview={url => this.urlPreview(url)}
          urlSearch={url => this.urlSearch(url)}
          imageUrl={imageUrl}
          loading={loading}
          title={title}
          description={description}
          previewUrl={previewUrl}
        />
        <Videos src={url} valid={valid} loading={loading} />
      </div>
    );
  }
}
// getting states from redux store
const mapStateToProps = state => {
  return {
    //  details:
  };
};
// dispatching actions from redux store
const mapDispatchToProps = dispatch => {
  return {
    getDetails: payload => dispatch(FetchActions.getLinkDetails(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
