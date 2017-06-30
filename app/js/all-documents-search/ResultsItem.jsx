import React, { Component } from 'react';
import { shape, string, array, func } from 'prop-types';

import ResultsTag from './ResultsTag.jsx';


class ResultsItem extends Component {

    static propTypes = {
        data: shape({
            title: string,
            href: string,
            date: string,
            tags: array
        }),
        addOrRemoveFilter: func
    }

    renderTags = () => {

        const { tags } = this.props.data;
        const { addOrRemoveFilter } = this.props;

        const tagsList = tags.map((tag, index) =>
            <ResultsTag key={index} tag={tag} addOrRemoveFilter={addOrRemoveFilter}/>
        );

        return (
            <div className="tags">{tagsList}</div>
        )
    }

    render = () => {

        const { title, href, date } = this.props.data;

        return (
            <div className="result-item">
                <h6><a href={href}>{title}</a></h6>
                <p className="date">{date}</p>
                {this.renderTags()}
            </div>
        );
    }
}


export default ResultsItem;
