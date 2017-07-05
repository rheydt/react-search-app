import React, { Component } from 'react';
import { string, func } from 'prop-types';


class ClearButton extends Component {

    static propTypes = {
        label: string,
        clearFilters: func
    }

    handleClick = (e) => {
        const { clearFilters } = this.props;

        e.preventDefault();
        console.log("clearing filters");
        clearFilters();

    }

    render = () => {
        const { label } = this.props;

        return (
            <button className="text reset" onClick={this.handleClick}>{label}</button>
        );
    }
}

export default ClearButton;
