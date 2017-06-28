require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Controls from './Controls.jsx';
import Pagination from './Pagination.jsx';
import Results from './Results.jsx';

class AllDocumentsApp extends Component {
    render = () => {
        return (
            <div className="all-documents-search">
                <Controls />
                <Pagination />
                <Results />
                <Pagination />
            </div>
        )
    }
}

export default AllDocumentsApp;