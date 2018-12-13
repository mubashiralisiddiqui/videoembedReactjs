/**
 *  import modules 
 */
import React, { Component } from 'react';

/**
 *  start of Url Preview components
 */

export default class PreviewUrl extends Component {

    render() {
        const { src = "" } = this.props
        return (
            <div style={{ width: '20%', height: '20%' }}>
                <img src={src}
                    alt="Smiley face"
                    style={{ height: "200px", width: "200px" }}
                />
            </div>
        )
    }
}