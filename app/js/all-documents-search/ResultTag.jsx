import React, { Component } from 'react';
import { string, number } from 'prop-types';


class ResultTag extends Component {

    static propTypes = {
        tag: string
    }

    handleClick = (e) => {

        const { toggleDropdown } = this.props;

        e.preventDefault();
        toggleDropdown();
    }

    render = () => {

        const { tag } = this.props;

        return (
            <a href="#" className="btn classify">{tag}</a>
        )
    }
}


export default ResultTag;
