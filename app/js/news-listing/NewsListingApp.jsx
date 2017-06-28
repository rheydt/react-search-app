// import $ from "jquery";
require('jquery');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import ListControls from './ListControls.jsx';
import ListResults from './ListResults.jsx';


class NewsListingApp extends Component {

    state = {
        endpointUrl: "",
        filterOptions: {
            group1: [],
            group2: [],
        },
        selectedFilters: [],
        numItems: 5,
        pageNum: 0,
        sortOrder: true,
        results: [],
        hasMoreItems: false,
        requestFailed: false
    }

    queryBuilder = () => {

        // const   endpointBase = "https://bayer.ahmedb.velir.com/Services/Scope/Marketing/BeeHealth/BeeHealthListingService.asmx/GetListing?",
        const   endpointBase = "",
                selectedFieldBase = "selectedFields=",
                sortOrderBase = "sortOrder=",
                numItemsBase = "numItems=",
                pageNumBase = "pageNum=";

        // get selected filters, add blank entry if none are present
        let filterIds = this.state.selectedFilters.length <= 0
            ? [""]
            : this.state.selectedFilters;

        // build filter query string
        let filterStrings = filterIds.map(function(id) { return selectedFieldBase + id; }),
            filterQuery = filterStrings.join("&");

        // build other query strings
        let sortQuery = sortOrderBase + this.state.sortOrder,
            numQuery = numItemsBase + this.state.numItems,
            pageQuery = pageNumBase + this.state.pageNum;

        // put it all together
        let queryString = [filterQuery, sortQuery, numQuery, pageQuery].join("&");

        return endpointBase + queryString;
    }

    requestResults = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    this.setState({
                        requestFailed: true
                    });
                    throw Error("Network request failed");
                }
                console.log("response:", response);
                return response
            })
            .then(d => d.json())
            .then(d => {
                console.log("data:", d);
                this.setState({
                    results: d.items,
                    hasMoreItems: d.hasMoreItems
                })
            }, () => {
                this.setState({
                    results: [],
                    hasMoreItems: false
                })
            })
    }

    clearFilters = () => {
        this.setState({ selectedFilters: [] });
    }

    componentWillMount = () => {
        // generate initial service call url
        this.setState({endpointUrl: this.queryBuilder()});
    }

    componentDidMount = () => {
        this.requestResults(this.state.endpointUrl);
    }

    render = () => {
        let controlsProps = {
            filter1list: this.state.filterOptions.group1,
            filter2list: this.state.filterOptions.group2,
            selectedFilters: this.state.selectedFilters,
            clearFilters: this.clearFilters,
            sortDescending: this.state.sortOrder
        };

        let resultsProps = {
            requestFailed: this.state.requestFailed,
            results: this.state.results,
            hasMoreItems: this.state.hasMoreItems
        }

        return (
            <div className="news-listing">
                <ListControls {...controlsProps} />
                <ListResults {...resultsProps}/>
            </div>
        );
    }
}

export default NewsListingApp;
