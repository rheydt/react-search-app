import React, { Component } from 'react';
import NewsItem from './NewsItem.jsx';

class NewsList extends Component {

    render = () => {

        const listItems = this.props.items.map((item, index) =>
            <NewsItem key={index} data={item} />
        );

        return (
            <ul className="news-listing__list">{listItems}</ul>
        )
    }
}

export default NewsList;