import React, { Component } from 'react';
import { string, func } from 'prop-types';


class SearchBox extends Component {

    static propTypes = {
        searchTerm: string,
        submitLabel: string,
        inputPlaceholder: string,
        updateSearchValue: func,
        runSearch: func
    }

    handleChange = (e) => {
        const { updateSearchValue } = this.props;

        updateSearchValue(e.target.value);
    }

    // note: also triggered when ENTER is pressed in input field
    handleClick = (e) => {
        const { runSearch } = this.props;

        e.preventDefault();
        runSearch();
    }

    render = () => {
        const { searchTerm, submitLabel, inputPlaceholder } = this.props;

        return (
            <div>
                <input type="text" className="cnt-search" placeholder={inputPlaceholder} value={searchTerm} onChange={this.handleChange}></input>
                <button type="submit" className="text" onClick={this.handleClick}>{submitLabel}</button>
            </div>
        );
    }
}

export default SearchBox;
