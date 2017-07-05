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
        currentPage: fakeData.currentPage + 1,
        // totalPages: fakeData.totalPages,
        totalPages: 20,
        filters: fakeData.filters,
        selected: fakeData.selectedFilters || [],
        searchTerm: fakeData.searchTerm || "",
        requestFailed: false,
        countryCode: "ABC-123",
        pageRange: 10,
        noResultsMessage: "No results found.",
        filtersLabel: "Select Filters",
        searchLabel: "Country Specific Search",
        searchButtonText : "Search",
        clearButtonText: "Clear Filters"
    }

    addOrRemoveFilter = (changedFilter) => {
        const prevSelected = this.state.selected;

        const newSelected = prevSelected.includes(changedFilter)
            ?   prevSelected.filter(function(el) { return el !== changedFilter; })
            :   prevSelected.concat([changedFilter]);

        this.setState({ selected: newSelected });

        this.runSearch();
    }

    clearFilters = () => {
        this.setState({ selected: [] });

        this.runSearch();
    }

    goToPage = (newPage) => {
        this.setState({ currentPage: newPage });

        this.runSearch();
    }

    updateSearchValue = (newValue) => {
        this.setState({ searchTerm: newValue });
    }

    queryBuilder = () => {
        const { countryCode, searchTerm, selected } = this.state;

        // const   endpointBase = "http://devcm/api/imf/countrysearch/search?country=196ddeb5-0262-4cc1-8f29-d808b31b4eeb&searchTerm=test&selectedFilters=test&selectedFilters=second"
        const   endpointBase = "",
                countryBase = "country=",
                searchTermBase = "searchTerm=",
                selectedFieldBase = "selectedFilters=";

        // build country query string (required param)
        const countryString = countryBase + countryCode;

        // build filter query string (optional param)
        const filterStrings = selected.map(function(filter) { return selectedFieldBase + filter; });
        const filterQuery = filterStrings.length > 0
            ? "& " + filterStrings.join("&")
            : null;

        // build search term query string (optional param)
        const searchTermString = searchTerm
            ? "&" + searchTermBase + this.state.searchTerm
            : undefined;

        // put it all together
        const queryString = [countryString, searchTermString, filterQuery].join("");

        return endpointBase + queryString;
    }

    requestResults = (url) => {
        console.log("requesting results from ", url);
        // fetch(url)
        //     .then(response => {
        //         if (!response.ok) {
        //             this.setState({
        //                 requestFailed: true
        //             });
        //             throw Error("Network request failed");
        //         }
        //         console.log("response:", response);
        //         return response
        //     })
        //     .then(d => d.json())
        //     .then(d => {
        //         console.log("data:", d);
        //         // this.setState({
        //         //     results: d.items,
        //         //     hasMoreItems: d.hasMoreItems
        //         // })
        //     }, () => {
        //         // this.setState({
        //         //     results: [],
        //         //     hasMoreItems: false
        //         // })
        //     })
    }

    runSearch = () => {
        console.log("running search");

        const url = this.queryBuilder();

        this.requestResults(url);
    }

    render = () => {

        let controlsProps = {
            filters: this.state.filters,
            selected: this.state.selected,
            searchTerm: this.state.searchTerm,
            filtersLabel: this.state.filtersLabel,
            searchLabel: this.state.searchLabel,
            searchButtonText: this.state.searchButtonText,
            clearButtonText: this.state.clearButtonText,
            updateSearchValue: this.updateSearchValue,
            addOrRemoveFilter: this.addOrRemoveFilter,
            runSearch: this.runSearch,
            clearFilters: this.clearFilters
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