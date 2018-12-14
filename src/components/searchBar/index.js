
/**
 * importing modules
 */
import React, { Component } from 'react';

import './style.css'
import ImagePreview from '../UrlPreview'
/** 
 * start of Search bar component
*/
export default class SearchBar extends Component {
    render() {
        const { onblur, imageurl, loading, title, previewUrl, description } = this.props;
        return (
            <div className="container">
                <input type="text" className="form-control input" id="inlineFormInputGroup"
                    onBlur={(e) => onblur(e)}
                    placeholder="paste url of videos .." />
                <ImagePreview
                    src={imageurl}
                    loading={loading}
                    title={title}
                    previewUrl={previewUrl}
                    description={description}
                />
                {/* <button
                    className="btn"><i className="fa fa-search"></i> search</button> */}
            </div>
        )

    }
}
