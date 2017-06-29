import React, { Component } from 'react';
import { array, string } from 'prop-types';

import FilterOption from './FilterOption.jsx';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        label: string
    }

    renderField = () => {
        const { selected, label } = this.props;

        return (
            <dt>
                <a name="filters">
                    <span className="filter-label">{label}</span>
                    <p className="multiSel"></p>
                </a>
            </dt>
        )
    }


    renderDropdownMenu = () => {
        const { filters } = this.props;

        const colLength = Math.floor(filters.length / 2);

        const colOneItems = filters.slice(0, colLength);
        const colOneElements = colOneItems.map((item, index) =>
            <FilterOption key={index} data={item} />
        );

        const colTwoItems = filters.slice(colLength, filters.length);
        const colTwoElements = colTwoItems.map((item, index) =>
            <FilterOption key={index} data={item} />
        );

        console.log(colOneItems, colTwoItems);

        return (
            <dd>
                <div className="multiSelect">
                    <ul>{colOneElements}</ul>
                    <ul>{colTwoElements}</ul>
                </div>
            </dd>
        )
    }

    render = () => {

        return (
            <fieldset className="cnt-fields cnt-fields--filters">
                <dl className="dropdown">
                    {this.renderField()}
                    {this.renderDropdownMenu()}
                </dl>
            </fieldset>
        )
    }
}


export default FiltersDropdown;
