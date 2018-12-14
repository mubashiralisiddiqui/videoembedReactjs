
/**
 * importing modules
 */
import React, { Component, Fragment } from 'react';

import './style.css'
import ImagePreview from '../UrlPreview'
/** 
 * start of Search bar component
*/
export default class SearchBar extends Component {
    state = {
        url: ''
    }
    handleChange = (e) => {
        const { onblur } = this.props
        this.setState({
            url: e.target.value
        })

        onblur(e.target.value)
    }
    handleSubmit = () => {
        const { onblur } = this.props
        onblur(this.state.url, "submit")
    }
    render() {
        const { onblur, imageurl, loading, title, previewUrl, description } = this.props;
        return (
            <Fragment>
                <div className="wrapper">
                    <input type="text" className="form-control input" id="inlineFormInputGroup"
                        onBlur={(e) => this.handleChange(e)}
                        placeholder="paste url of videos .." />
                    <button
                        onClick={() => this.handleSubmit()}
                        className="btn"><i className="fa fa-search"></i> search</button>

                </div>
                <ImagePreview
                    src={imageurl}
                    loading={loading}
                    title={title}
                    previewUrl={previewUrl}
                    description={description}
                />

            </Fragment>
        )

    }
}
