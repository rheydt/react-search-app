import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

import Filters from './Filters.jsx';
import SearchBox from './SearchBox.jsx';


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

        let searchBoxProps = {
            searchLabel: searchLabel
        }

        return (
            <form className="form-archive">

                <Filters {...filtersProps}/>

                <fieldset className="cnt-fields cnt-fields--search-input">
                    <SearchBox {...searchBoxProps} />
                    <button type="submit" className="text">{searchButtonText}</button>
                </fieldset>

            </form>
        );
    }
}

export default Controls;
