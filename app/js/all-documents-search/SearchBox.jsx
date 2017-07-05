import React, { Component } from 'react';
import { string } from 'prop-types';


class SearchBox extends Component {

    static propTypes = {
        searchLabel: string
    }

    handleOnChange = (e) => {
        e.preventDefault();
        console.log("handle on change");

        console.log(e.target);
    }

    render = () => {
        const { searchLabel } = this.props;

        return (
            <input type="text" className="cnt-search" placeholder={searchLabel} onChange={this.handleOnChange}></input>
        );
    }
}

export default SearchBox;
