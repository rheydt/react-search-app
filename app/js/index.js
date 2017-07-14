require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { initAllDocumentsSearch } from "./all-documents-search/index.js";
import AddRemoveCountryApp from './add-remove-country/AddRemoveCountry.jsx';


$(document).ready( function() {

    // All Documents Search
    if ($("#js-all-documents-search").length) {
        initAllDocumentsSearch($("#js-all-documents-search"));
    }

    // Add to or Remove from Country
    if ($("#js-add-remove-country").length) {
        console.log("add or remove country init");
        /* props come from BE via global variable in script tag in .cshtml */

        ReactDOM.render(
            <AddRemoveCountryApp {...countryNewsBackendProps}/>,
            document.getElementById('js-add-remove-country')
        );
    }
});
