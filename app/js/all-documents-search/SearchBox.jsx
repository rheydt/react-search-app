import React, { Component } from 'react';
import { string } from 'prop-types';


class SearchBox extends Component {

    static propTypes = {
        submitLabel: string,
        inputPlaceholder: string
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("submitting search");
    }

    render = () => {
        const { submitLabel, inputPlaceholder } = this.props;

        return (
            <div>
                <input type="text" className="cnt-search" placeholder={inputPlaceholder}></input>
                <button type="submit" className="text" onClick={this.handleClick}>{submitLabel}</button>
            </div>
        );
    }
}

export default SearchBox;
