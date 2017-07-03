import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Controls from './Controls.jsx';
import Pagination from './Pagination.jsx';
import ResultsSection from './ResultsSection.jsx';

const fakeData = require('./json/fakeDataDefault.json');


class AllDocumentsApp extends Component {

    state = {
        results: fakeData.results,
        totalHits: fakeData.totalHits,
        noResultsMessage: "No results found.",
        currentPage: fakeData.currentPage + 1,
        totalPages: fakeData.totalPages,
        pageRange: 10,
        filters: fakeData.filters,
        selected: fakeData.selectedFilters || [],
        searchTerm: fakeData.searchTerm,
        filtersLabel: "Select Filters",
        searchLabel: "Country Specific Search",
        searchButtonText : "Search"
    }

    addOrRemoveFilter = (changedFilter) => {
        const prevSelected = this.state.selected;

        const newSelected = prevSelected.includes(changedFilter)
            ?   prevSelected.filter(function(el) { return el !== changedFilter; })
            :   prevSelected.concat([changedFilter]);

        this.setState({
            selected: newSelected
        });
    }

    goToPage = (newPage) => {
        this.setState({
            currentPage: newPage
        });
    }

    render = () => {

        let controlsProps = {
            filters: this.state.filters,
            selected: this.state.selected,
            filtersLabel: this.state.filtersLabel,
            searchLabel: this.state.searchLabel,
            searchButtonText: this.state.searchButtonText,
            addOrRemoveFilter: this.addOrRemoveFilter
        };

        let paginationProps = {
            currentPage: this.state.currentPage,
            totalPages: this.state.totalPages,
            pageRange: this.state.pageRange,
            goToPage: this.goToPage
        };

        let resultsProps = {
            results: this.state.results,
            noResultsMessage: this.state.noResultsMessage,
            addOrRemoveFilter: this.addOrRemoveFilter
        };

        return (
            <div>
                <Controls {...controlsProps} />
                <Pagination {...paginationProps}/>
                <ResultsSection {...resultsProps}/>
                <Pagination {...paginationProps}/>
            </div>
        );
    }
}

export default AllDocumentsApp;