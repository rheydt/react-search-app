import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, shape, func } from 'prop-types';

class CountryDropdown extends Component {

    static propTypes = {
        addButtonText: string,
        addToCountry: func
    }

    render = () => {
        const { addToCountry, addButtonText} = this.props;

        return (
            <div>
                <br />
                <button className="form-submit" onClick={addToCountry}>{addButtonText}</button>
            </div>
        );
    }
}
export default CountryDropdown;