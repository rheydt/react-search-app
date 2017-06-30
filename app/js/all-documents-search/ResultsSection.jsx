import React, { Component } from 'react';
import { array, bool, string, func } from 'prop-types';

import Results from './Results.jsx';


class ResultsSection extends Component {

    static propTypes = {
        results: array,
        requestFailed: bool,
        noResultsMessage: string,
        addOrRemoveFilter: func
    }

    renderResultsBody = () => {

        const {results, noResultsMessage, addOrRemoveFilter} = this.props;

        const hasNoResults = results.length === 0;

        if (hasNoResults) {
            return (noResultsMessage);
        } else {
            return (<Results items={results} addOrRemoveFilter={addOrRemoveFilter} />)
        }
    }

    render = () => {

        return (
            <div>
                {this.renderResultsBody()}
            </div>
        )
    }
}


export default ResultsSection;
