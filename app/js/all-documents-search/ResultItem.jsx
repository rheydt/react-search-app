import React, { Component } from 'react';
import { shape, string, array } from 'prop-types';


class ResultsItem extends Component {

    static propTypes = {
        data: shape({
            title: string,
            href: string,
            date: string,
            tags: array
        })
    }

    renderTags = () => {

        const { tags } = this.props.data;

        const tagsList = tags.map((tag, index) =>
            <a key={index} href="#" className="btn classify">{tag}</a>
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
