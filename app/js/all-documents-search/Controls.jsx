import React, { Component } from 'react';
import { array, string } from 'prop-types';

import FiltersDropdown from './FiltersDropdown.jsx';


class Controls extends Component {

    static propTypes = {
        filters: array,
        selectedFilters: array,
        filtersLabel: string,
        searchLabel: string,
        searchButtonText: string
    }

    render = () => {

        const { filters, selectedFilters, filtersLabel, searchLabel, searchButtonText } = this.props;

        let filtersProps = {
            filters: filters,
            selected: selectedFilters,
            label: filtersLabel
        }

        return (
            <form className="form-archive">

                <FiltersDropdown {...filtersProps}/>

                <fieldset className="cnt-fields">
                    <input type="text" className="cnt-search cnt-search--search-input" placeholder={searchLabel}></input>
                    <button type="submit" className="text">{searchButtonText}</button>
                </fieldset>

            </form>
        )
    }
}

export default Controls;
