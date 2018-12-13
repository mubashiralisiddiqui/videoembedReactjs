/**
 *  import modules
 */
import React, { Component } from 'react';

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
    valid: false
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
    return (
      <div className="App viewport">
        <SearchBar
          onblur={(e) => this.handleChange(e)}
        />
        <Videos
          src={this.state.url}
          valid={this.state.valid}
        />
      </div>
    );
  }
}

export default App;
