// import $ from "jquery";
require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import NewsListingApp from './NewsListingApp.jsx';

export function initNewsListing(mountNode) {

    if (!mountNode.length) {
        return;
    }

    ReactDOM.render(
      <NewsListingApp />,
      document.getElementById('js-news-listing-app')
    );
}

