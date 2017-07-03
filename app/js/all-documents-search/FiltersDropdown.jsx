import React, { Component } from 'react';
import { array, string, bool, func } from 'prop-types';
import classNames from 'classnames';

import FilterOption from './FilterOption.jsx';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        isOpen: bool,
        addOrRemoveFilter: func
    }

    renderPartialFiltersList = (array, sliceFrom, sliceTo) => {
        const listItems = array.slice(sliceFrom, sliceTo);

        const listElements = listItems.map((item, index) =>
            <FilterOption key={index} data={item} addOrRemoveFilter={this.props.addOrRemoveFilter} isSelected={this.isSelected(item)} />
        );

        return listElements;
    }

    isSelected = (item) => {
        const { selected } = this.props;

        return selected.includes(item.text);
    }

    render = () => {
        const { filters, isOpen } = this.props;

        // split the list of options into 2 even (or almost even) groups
        const colLength = Math.ceil(filters.length / 2);
        const colOneElements = this.renderPartialFiltersList(filters, 0, colLength);
        const colTwoElements = this.renderPartialFiltersList(filters, colLength, filters.length);

        // conditionally add is-open class for styling purposes
        const openClass = classNames("filters-dropdown-wrapper", {
            "is-open": isOpen
        });

        return (
            <dd className={openClass}>
                <div className="multiSelect">
                    <ul>{colOneElements}</ul>
                    <ul>{colTwoElements}</ul>
                </div>
            </dd>
        )
    }
}

export default FiltersDropdown;
