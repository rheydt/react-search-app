import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { shape, string, array, func } from 'prop-types';


class CountriesSelect extends Component {

    static propTypes = {
        currentCountry: shape({
            name: string,
            id: string
        }),
        countryPlaceholder: string,
        countries: array,
        updateChosenCountry: func
    }

    handleChange = (e) => {
        const { updateChosenCountry } = this.props;

        updateChosenCountry(e.target.value);
    }

    renderCountryList = () => {
        const { countries } = this.props;

        return countries.map((item, index) =>
            <option key={index} value={item.id} onClick={this.handleSelect}>{item.name}</option>
        );
    }

    render = () => {
        const { currentCountry, countryPlaceholder } = this.props;

        return (
            <select className="eeFeaturedCountries" onChange={this.handleChange}>
                <option>{countryPlaceholder}</option>
                {this.renderCountryList()}
            </select>
        );
    }
}
export default CountriesSelect;