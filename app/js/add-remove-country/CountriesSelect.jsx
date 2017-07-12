import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array } from 'prop-types';


class CountriesSelect extends Component {

    static propTypes = {
        countryPlaceholder: string,
        countries: array
    }

    renderCountryList = () => {
        const { countries } = this.props;

        return countries.map((item, index) =>
            <option key={index} value={item.id}>{item.name}</option>
        );
    }

    render = () => {
        const {countryPlaceholder} = this.props;

        return (
            <select className="eeFeaturedCountries">
                <option>{countryPlaceholder}</option>
                {this.renderCountryList()}
            </select>
        );
    }
}
export default CountriesSelect;