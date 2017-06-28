require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import AllDocumentsApp from './AllDocumentsApp.jsx';

export function initAllDocumentsSearch(mountNode) {

    if (!mountNode.length) {
        return;
    }

    ReactDOM.render(
        <AllDocumentsApp />,
        document.getElementById('js-all-documents-search')
    );
}

