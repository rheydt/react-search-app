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
        currentPage: fakeData.currentPage,
        totalPages: fakeData.totalPages,
        pageRange: 10,
        filters: fakeData.filters,
        selectedFilters: fakeData.selectedFilters,
        searchTerm: fakeData.searchTerm,
        filtersLabel: "Select Filters",
        searchLabel: "Country Specific Search",
        searchButtonText : "Search"
    }

    render = () => {

        let controlsProps = {
            filters: this.state.filters,
            selectedFilters: this.state.selectedFilters,
            filtersLabel: this.state.filtersLabel,
            searchLabel: this.state.searchLabel,
            searchButtonText: this.state.searchButtonText
        };

        let paginationProps = {
            currentPage: this.state.currentPage,
            totalPages: this.state.totalPages,
            pageRange: this.state.pageRange
        };

        let resultsProps = {
            results: this.state.results,
            noResultsMessage: this.state.noResultsMessage
        };

        return (

            <div className="all-documents-search">
                <Controls {...controlsProps} />
                <Pagination {...paginationProps}/>
                <ResultsSection {...resultsProps}/>
                <Pagination {...paginationProps}/>
            </div>
        )
    }
}

export default AllDocumentsApp;