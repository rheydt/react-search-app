import React, { Component } from 'react';
import { string, func } from 'prop-types';


class ClearButton extends Component {

    static propTypes = {
        clearButtonText: string,
        clearFilters: func
    }

    handleClick = (e) => {
        const { clearFilters } = this.props;

        e.preventDefault();
        console.log("clearning filters");
        clearFilters();

    }

    render = () => {
        const { clearButtonText } = this.props;

        return (
            <button className="text reset" onClick={this.handleClick}>{clearButtonText}</button>
        );
    }
}

export default ClearButton;
