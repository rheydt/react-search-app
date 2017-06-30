import React, { Component } from 'react';
import { string, func } from 'prop-types';


class ResultsTag extends Component {

    static propTypes = {
        tag: string,
        addOrRemoveFilter: func
    }

    handleClick = (e) => {

        const {tag, addOrRemoveFilter} = this.props;

        e.preventDefault();
        addOrRemoveFilter(tag);
    }

    render = () => {

        const { tag } = this.props;

        return (
            <a href="#" className="btn classify" onClick={this.handleClick}>{tag}</a>
        )
    }
}


export default ResultsTag;
