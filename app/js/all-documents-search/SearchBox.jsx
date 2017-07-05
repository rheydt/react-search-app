import React, { Component } from 'react';
import { string } from 'prop-types';

import Filters from './Filters.jsx';
import SearchBox from './SearchBox.jsx';


class Controls extends Component {

    static propTypes = {
        searchLabel: searchLabel
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

export default Controls;
