import React, { Component } from 'react';
import { string } from 'prop-types';


class SearchBox extends Component {

    static propTypes = {
        label: string
    }

    handleOnChange = (e) => {
        e.preventDefault();
        console.log("handle on change");

        console.log(e.target);
    }

    render = () => {
        const { label } = this.props;

        return (
            <input type="text" className="cnt-search" placeholder={label} onChange={this.handleOnChange}></input>
        );
    }
}

export default SearchBox;
