import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

import Filters from './Filters.jsx';
import SearchBox from './SearchBox.jsx';
import SubmitButton from './SubmitButton.jsx';
import ClearButton from './ClearButton.jsx';


class Controls extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        filtersLabel: string,
        searchLabel: string,
        searchButtonText: string,
        clearButtonText: string,
        addOrRemoveFilter: func,
        clearFilters: func
    }

    render = () => {
        const { filters, selected, filtersLabel, searchLabel, searchButtonText, clearButtonText, addOrRemoveFilter, clearFilters } = this.props;

        const filtersProps = {
            filters: filters,
            selected: selected,
            label: filtersLabel,
            addOrRemoveFilter: addOrRemoveFilter
        }

        const searchBoxProps = {
            submitLabel: searchButtonText,
            inputPlaceholder: searchLabel
        }

        const clearButtonProps = {
            label: clearButtonText,
            clearFilters: clearFilters
        }


        return (
            <form className="form-archive">

                <Filters {...filtersProps}/>

                <fieldset className="cnt-fields cnt-fields--search-input">
                    <SearchBox {...searchBoxProps} />
                    <ClearButton {...clearButtonProps} />
                </fieldset>

            </form>
        );
    }
}

export default Controls;
