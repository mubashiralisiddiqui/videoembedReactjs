/**
 *  import modules
 */
import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

import { SearchBar, Videos } from './components'
import { AuthAction } from './redux/actions'
import './App.css';

/**
 * Start of App container
 */
class App extends Component {
  /**
   * initailizing states
   */
  state = {
    url: '',
    valid: false,
    imageurl: '',
    loading: false,
    description: '',
    title: '',
    previewUrl: '',
    querry: ''
  }
  // change handler input 
  handleChange = (querry, type) => {
    console.log(type)

    let video_id = querry.split('v=')[1];
    const ampersandPosition = video_id && video_id.indexOf('&');
    if (video_id && ampersandPosition !== -1) {
      video_id = video_id && video_id.substring(0, ampersandPosition);
    }
    let sourceUrl = '';
    if (querry.includes('facebook.com')) {
      sourceUrl = `https://www.facebook.com/plugins/video.php?href=${querry}`
      this.handlePreview(querry, sourceUrl, type)
    }
    else if (querry.includes('youtube.com' && video_id)) {
      sourceUrl = `https://www.youtube.com/embed/${video_id}`
      this.handlePreview(querry, sourceUrl, type)
    }
    else if (querry.includes('vimeo.com')) {
      const vimeo_id = querry.split('com/')[1]
      sourceUrl = `https://player.vimeo.com/video/${vimeo_id && vimeo_id}`
      this.handlePreview(querry, sourceUrl, type)
    }
    else {
      window.open(`${querry}`, '_blank')
      return;
    }
  }
  // handle url preview
  handlePreview = (querry, sourceUrl, type) => {
    this.setState({
      loading: true,
      imageurl: '',
      url: '',
      valid: false,
    })

    axios.get(`https://api.microlink.io/?url=${querry}`).then((preview) => {
      const imageurl = preview && preview.data.data.image.url
      const description = preview && preview.data.data.description
      const title = preview && preview.data.data.title;
      const previewUrl = preview && preview.data.data.url
      let obj = {
        imageurl,
        description,
        title,
        previewUrl
      }
      this.props.getDetails(obj)
      if (type === "submit") {
        this.setState({
          imageurl,
          url: sourceUrl,
          valid: true,
          loading: false,
          description,
          title,
          previewUrl
        })
        return
      }
      this.setState({
        imageurl,
        description,
        title,
        previewUrl,
        loading: false,
      })
    })

      .catch((err) => {
        console.log(err)
        this.setState({
          loading: false
        })

      })
  }

  handleSubmit() {

  }

  render() {
    const { url, imageurl, valid, loading, title, previewUrl, description } = this.state
    return (
      <div className="App viewport">
        <SearchBar
          onblur={(e, type) => this.handleChange(e, type)}
          imageurl={imageurl}
          loading={loading}
          title={title}
          description={description}
          previewUrl={previewUrl}
        />
        <Videos
          src={url}
          valid={valid}
          loading={loading}
        />
      </div>
    );
  }
}
// getting states from redux store
const mapstateToProps = (state) => {
  return {
    //  details:
  }

}
// dispathing actions from redux store
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (payload) => dispatch(AuthAction.getLinkDetails(payload))
  }
}
export default connect(mapstateToProps, mapDispatchToProps)(App);
