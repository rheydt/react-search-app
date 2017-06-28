import React, { Component } from 'react';
import { bool, array } from 'prop-types';

import NewsList from './NewsList.jsx';
import LoadMoreButton from './LoadMoreButton.jsx';



class ListResults extends Component {

    static propTypes = {
        requestFailed: bool,
        results: array,
        hasMoreItems: bool
    }

    renderResultsBody = () => {

        const failureMsg = "Request failed. Please try again";
        // const loadingMsg = "Loading...";
        const noResultsMsg = "No results found."
        const results = <NewsList items={this.props.results}/>;

        if (this.props.requestFailed) {
            return failureMsg;
        }
        // else if (this.props.isLoading) {
        //     return loadingMsg;
        // }
        else if (this.props.results.length = 0) {
            return noResultsMsg;
        }
        else {
            return results;
        }
    }

    renderLoadMoreButton = () => {

        if (this.props.hasMoreItems) {
            return ( <LoadMoreButton /> );
        } else {
            return;
        }
    }

    render = () => {

        return (

            <div className="news-listing__results">
                {this.renderResultsBody()}
                {this.renderLoadMoreButton()}
            </div>
        );
    }
}

export default ListResults;