import { initNewsListing } from "./news-listing/index.js";
import { initAllDocumentsSearch } from "./all-documents-search/index.js";


$(document).ready( function() {

    // News Listing
    if ($("#js-news-listing-app").length) {
        initNewsListing($("#js-news-listing-app"));
    }

    // All Documents Search
    if ($("#js-all-documents-search").length) {
        initAllDocumentsSearch($("#js-all-documents-search"));
    }
});
