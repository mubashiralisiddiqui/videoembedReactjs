/**
 *  import modules 
 */
import React, { Component, Fragment } from 'react';

/**
 *  start of Url Preview components
 */
import './style.css'

export default class PreviewUrl extends Component {

    render() {
        const { src = "", loading, title, previewUrl, description = "description" } = this.props
        return (
            <div className="container">
                {loading ?
                    <p style={{ color: 'white' }}> loading . . .  </p>
                    :
                    src && src.length > 1 ?
                        <Fragment>
                            < div className="imagecontainer">
                                < img src={src}
                                    alt="Smiley face"
                                    style={{ height: "200px", width: "100%" }}
                                />
                            </div>

                            <div className="descContainer" >
                                <p className="url" >{previewUrl && previewUrl}</p>
                                <p className="title">{title && title}</p>
                                <p className="description">
                                    {description && description.length > 0 ? description :
                                        'Description not available for this link'
                                    }
                                </p>
                            </div>
                        </Fragment>
                        : null
                }
            </div>
        )
    }
}