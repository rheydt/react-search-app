import React, { Component } from 'react';
import { array, func, bool } from 'prop-types';

import Group1Facet from './Group1Facet.jsx';
import Group2Facet from './Group2Facet.jsx';
import ClearButton from './ClearButton.jsx';
import Sorter from './Sorter.jsx';

class ListControls extends Component {

    static propTypes = {
        filter1list: array,
        filter2list: array,
        selectedFilters: array,
        clearFilters: func,
        sortDescending: bool
    }

    render = () => {

        return (
            <div className="news-listing__facets">
                <Group1Facet items={this.props.filter1list} selected={this.props.selectedFilters} />
                <Group2Facet items={this.props.filter2list} selected={this.props.selectedFilters} />
                <ClearButton action={this.props.clearFilters}/>
                <Sorter sortDescending={this.props.sortDescending}/>
            </div>
        )
    }

}

export default ListControls;
