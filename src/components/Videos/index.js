
/**
 * importing modules
 */
import React, { Component } from 'react';

import './style.css'



export default class SearchBar extends Component {

    render() {
        const { src, valid } = this.props
        return (
            <div className="container">
                {
                    valid ?
                        < iframe width="640px" height="360%"
                            title="play"
                            src={src}
                            allowFullScreen
                        >
                        </iframe>
                        : null
                }

            </div >
        )

    }
}
