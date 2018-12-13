
/**
 * importing modules
 */
import React, { Component } from 'react';

import './style.css'
/** 
 * start of Search bar component
*/
export default class SearchBar extends Component {
    render() {
        const { onblur } = this.props
        return (
            <div className="container form-row align-items-center">
                <input type="text" className="form-control input" id="inlineFormInputGroup"
                    onBlur={(e) => onblur(e)}
                    placeholder="Username" />
                <button
                    className="btn"><i className="fa fa-search"></i> search</button>
            </div>
        )

    }
}
