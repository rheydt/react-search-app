require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Controls from './Controls.jsx';
import Pagination from './Pagination.jsx';
import Results from './Results.jsx';

class AllDocumentsApp extends Component {
    state = {
        currentPage: 1,
        totalPages: 1000,
        pageRange: 10
    }

    render = () => {
        let paginationProps = {
            currentPage: this.state.currentPage,
            totalPages: this.state.totalPages,
            pageRange: this.state.pageRange
        };

        return (
            <div className="all-documents-search">
                <Pagination {...paginationProps}/>
            </div>
        )
    }
}

export default AllDocumentsApp;