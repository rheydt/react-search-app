import React, { Component } from 'react';

class ClearButton extends Component {

    handleClick = (e) => {
        e.preventDefault();
    }

    render = () => {
        return (
            <div className="listing-facets__group">
                <button className="listing-facets__clear-all-button" onClick={this.handleClick}>Clear All</button>
            </div>
        )
    }
}

export default ClearButton;
