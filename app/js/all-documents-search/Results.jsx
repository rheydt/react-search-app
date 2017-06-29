import React, { Component } from 'react';
import { array } from 'prop-types';

import ResultItem from './ResultItem.jsx';


class Results extends Component {

    static propTypes = {
        items: array
    }

    render = () => {

        const listItems = this.props.items.map((item, index) =>
            <ResultItem key={index} data={item} />
        );

        return (
            <div>{listItems}</div>
        )
    }
}

export default Results;
