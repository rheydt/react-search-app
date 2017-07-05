import React, { Component } from 'react';
import { string } from 'prop-types';


class SearchBox extends Component {

    static propTypes = {
        label: string
    }

    render = () => {
        const { label } = this.props;

        return (
            <input type="text" className="cnt-search" placeholder={label}></input>
        );
    }
}

export default SearchBox;
