require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Controls from './Controls.jsx';
import Pagination from './Pagination.jsx';
import ResultsSection from './ResultsSection.jsx';

const fakeData = require('./fakeDataDefault.json');


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
        searchTerm: fakeData.searchTerm
    }

    render = () => {
        let paginationProps = {
            currentPage: this.state.currentPage,
            totalPages: this.state.totalPages,
            pageRange: this.state.pageRange
        };

        let resultsProps = {
            results: this.state.results,
            noResultsMessage: this.state.noResultsMessage
        }

        return (

            <div className="all-documents-search">
                <Controls />
                <Pagination {...paginationProps}/>
                <ResultsSection {...resultsProps}/>
                <Pagination {...paginationProps}/>
            </div>
        )
    }
}

export default AllDocumentsApp;