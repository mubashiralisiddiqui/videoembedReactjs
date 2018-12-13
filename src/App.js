/**
 *  import modules
 */
import React, { Component } from 'react';
import axios from 'axios'

import { SearchBar, Videos } from './components'
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
    imageurl: ''
  }
  // change handler input 
  handleChange = (e) => {
    let querry = e.target.value;
    let video_id = querry.split('v=')[1];
    const ampersandPosition = video_id && video_id.indexOf('&');
    if (video_id && ampersandPosition != -1) {
      video_id = video_id && video_id.substring(0, ampersandPosition);
    }
    let sourceUrl = '';
    if (querry.includes('facebook.com')) {
      sourceUrl = `https://www.facebook.com/plugins/video.php?href=${querry}`
    }
    else if (querry.includes('youtube.com' && video_id)) {
      sourceUrl = `https://www.youtube.com/embed/${video_id}`
      axios.get(`https://api.microlink.io/?url=${querry}`).then((prev) => {
        console.log(prev.data.data.image.url)
        let imageurl = prev.data.data.image.url
        this.setState({
          imageurl
        })
      })
        .catch((err) => {
          console.log(err)

        })
    }
    else if (querry.includes('vimeo.com')) {
      let vimeo_id = querry.split('com/')[1]
      sourceUrl = `https://player.vimeo.com/video/${vimeo_id && vimeo_id}`
    }
    else {
      window.open(`${querry}`, '_blank')
      return;
    }

    this.setState({
      url: sourceUrl,
      valid: true
    })
  }

  render() {
    const { url, imageurl, valid } = this.state
    return (
      <div className="App viewport">
        <SearchBar
          onblur={(e) => this.handleChange(e)}
          imageurl={imageurl}
        />
        <Videos
          src={url}
          valid={valid}
        />
      </div>
    );
  }
}

export default App;
