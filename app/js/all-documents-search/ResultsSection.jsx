import React, { Component } from 'react';
import { array, bool, string } from 'prop-types';

import Results from './Results.jsx';


class ResultsSection extends Component {

    static propTypes = {
        results: array,
        requestFailed: bool,
        noResultsMessage: string
    }

    state = {
        hasNoResults: (this.props.results.length <= 0)
    }

    renderResultsBody = () => {

        if (this.state.hasNoResults) {
            return (this.props.noResultsMessage);
        } else {
            return (<Results items={this.props.results}/>)
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
