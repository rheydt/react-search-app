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
        clearButtonText: string,
        addOrRemoveFilter: func
    }

    render = () => {
        const { filters, selected, filtersLabel, searchLabel, searchButtonText, clearButtonText, addOrRemoveFilter } = this.props;

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
                    <SearchBox searchLabel={searchLabel} />
                    <SubmitButton searchButtonText={searchButtonText} />
                    <ClearButton clearButtonText={clearButtonText} />
                </fieldset>

            </form>
        );
    }
}

export default Controls;
