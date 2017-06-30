import React, { Component } from 'react';
import { array, func } from 'prop-types';

import ResultsItem from './ResultsItem.jsx';


class Results extends Component {

    static propTypes = {
        items: array,
        addOrRemoveFilter: func
    }

    render = () => {

        const {items, addOrRemoveFilter} = this.props;

        const listItems = items.map((item, index) =>
            <ResultsItem key={index} data={item} addOrRemoveFilter={addOrRemoveFilter}/>
        );

        return (
            <div>{listItems}</div>
        )
    }
}

export default Results;
