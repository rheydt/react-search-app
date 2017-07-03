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
        searchTerm: fakeData.searchTerm,
        requestFailed: false,
        countryCode: "ABC-123",
        pageRange: 10,
        noResultsMessage: "No results found.",
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

    queryBuilder = () => {

        // const   endpointBase = "http://devcm/api/imf/countrysearch/search?country=196ddeb5-0262-4cc1-8f29-d808b31b4eeb&searchTerm=test&selectedFilters=test&selectedFilters=second"
        const   endpointBase = "",
                countryBase = "country=",
                searchTermBase = "searchTerm=",
                selectedFieldBase = "selectedFilters=";
                // numItemsBase = "numItems=",
                // pageNumBase = "pageNum=";

        // get selected filters, add blank entry if none are present
        let filterIds = this.state.selected.length <= 0
            ? [""]
            : this.state.selected;

        // build filter query string
        let filterStrings = filterIds.map(function(id) { return selectedFieldBase + id; }),
            filterQuery = filterStrings.join("&");

        // build search term query string
        let searchTermString = searchTermBase + this.state.searchTerm;

        // build other query strings
        // let sortQuery = sortOrderBase + this.state.sortOrder,
        //     numQuery = numItemsBase + this.state.numItems,
        //     pageQuery = pageNumBase + this.state.pageNum;

        // put it all together
        let queryString = [searchTermString, filterQuery ].join("&");

        return endpointBase + queryString;
    }

    requestResults = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    this.setState({
                        requestFailed: true
                    });
                    throw Error("Network request failed");
                }
                console.log("response:", response);
                return response
            })
            .then(d => d.json())
            .then(d => {
                console.log("data:", d);
                // this.setState({
                //     results: d.items,
                //     hasMoreItems: d.hasMoreItems
                // })
            }, () => {
                // this.setState({
                //     results: [],
                //     hasMoreItems: false
                // })
            })
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

        console.log(this.queryBuilder());

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