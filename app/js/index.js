require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { initAllDocumentsSearch } from "./all-documents-search/index.js";
import { AddRemoveCountryNews } from './add-remove-country/AddRemoveCountryNews.jsx';


$(document).ready( function() {

    // All Documents Search
    if ($("#js-all-documents-search").length) {
        initAllDocumentsSearch($("#js-all-documents-search"));
    }

    // Add to or Remove from Country
    if ($("#js-add-remove-country").length) {
        console.log("add or remove country init");

        ReactDOM.render(
            <AddRemoveCountryNews />,
            document.getElementById('js-add-remove-country')
        );
    }
});
