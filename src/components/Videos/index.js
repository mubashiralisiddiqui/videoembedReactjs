
/**
 * importing modules
 */
import React, { Component } from 'react';

import './style.css'



export default class SearchBar extends Component {

    render() {
        const { src, valid, loading } = this.props
        return (
            <div className="videocontainer">
                {(loading ?
                    <p style={{ color: 'white' }}> loading . . .  </p> :
                    null)
                }
                {
                    valid ?

                        < iframe width="80%" height="360px"
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
