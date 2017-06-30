import React, { Component } from 'react';
import { array, string, bool, func } from 'prop-types';
import classNames from 'classnames';


import FilterOption from './FilterOption.jsx';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        isOpen: bool,
        toggleDropdown: func
    }

    render = () => {

        const { filters, isOpen, toggleDropdown } = this.props;

        // split the list of options into 2 even (or almost even) groups
        const colLength = Math.ceil(filters.length / 2);

        const colOneItems = filters.slice(0, colLength);
        const colOneElements = colOneItems.map((item, index) =>
            <FilterOption key={index} data={item} />
        );

        const colTwoItems = filters.slice(colLength, filters.length);
        const colTwoElements = colTwoItems.map((item, index) =>
            <FilterOption key={index} data={item} />
        );

        // conditionally add is-open class for styling purposes
        const openClass = classNames("multiSelect", {
            "is-open": isOpen
        });

        return (
            <dd className={openClass}>
                <div className={openClass}>
                    <ul>{colOneElements}</ul>
                    <ul>{colTwoElements}</ul>
                </div>
            </dd>
        )
    }
}


export default FiltersDropdown;
