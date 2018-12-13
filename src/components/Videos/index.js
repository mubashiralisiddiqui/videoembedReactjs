
/**
 * importing modules
 */
import React, { Component } from 'react';

import './style.css'



export default class SearchBar extends Component {

    render() {
        const { src, valid, loading } = this.props
        return (
            <div className="container">
                {(loading ?
                    <p style={{ color: 'white' }}> loading . . .  </p> :
                    null)
                }
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
