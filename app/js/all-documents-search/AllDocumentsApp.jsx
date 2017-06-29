require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Controls from './Controls.jsx';
import Pagination from './Pagination.jsx';
import ResultsSection from './ResultsSection.jsx';

class AllDocumentsApp extends Component {
    state = {
        results: [{}, {}],
        currentPage: 1,
        totalPages: 1000,
        pageRange: 10,
        noResultsMessage: "No results found."
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
                <Pagination {...paginationProps}/>
                <ResultsSection {...resultsProps}/>
            </div>
        )
    }
}

export default AllDocumentsApp;