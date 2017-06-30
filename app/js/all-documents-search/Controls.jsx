import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

import Filters from './Filters.jsx';


class Controls extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        filtersLabel: string,
        searchLabel: string,
        searchButtonText: string,
        addOrRemoveFilter: func
    }

    render = () => {

        const { filters, selected, filtersLabel, searchLabel, searchButtonText, addOrRemoveFilter } = this.props;

        let filtersProps = {
            filters: filters,
            selected: selected,
            label: filtersLabel,
            addOrRemoveFilter: addOrRemoveFilter
        }

        return (
            <form className="form-archive">

                <Filters {...filtersProps}/>

                <fieldset className="cnt-fields cnt-fields--search-input">
                    <input type="text" className="cnt-search" placeholder={searchLabel}></input>
                    <button type="submit" className="text">{searchButtonText}</button>
                </fieldset>

            </form>
        )
    }
}

export default Controls;
