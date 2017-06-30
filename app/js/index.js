require('jquery');
import { initNewsListing } from "./news-listing/index.js";
import { initAllDocumentsSearch } from "./all-documents-search/index.js";


$(document).ready( function() {

    // All Documents Search
    if ($("#js-all-documents-search").length) {
        initAllDocumentsSearch($("#js-all-documents-search"));
    }
});
