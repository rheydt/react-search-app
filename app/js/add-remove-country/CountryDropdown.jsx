import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, shape, func } from 'prop-types';

import CountriesSelect from './CountriesSelect.jsx';

class CountryDropdown extends Component {

    static propTypes = {
        countryLabel: string,
        countryPlaceholder: string,
        countries: array,
        addButton: shape({
            text: string,
            service: string
        }),
        addToCountry: func
    }

    handleButtonClick = (e) => {
        addToCountry();
    }

    render = () => {
        const { countryLabel, countryPlaceholder, countries, addButton } = this.props;

        const countriesSelectProps = {
            countryPlaceholder: countryPlaceholder,
            countries: countries
        }

        return (
            <form className="form imf-country-tag-form" method="post" action="/api/imf/countryfeaturednews/addfeatured">
                <fieldset>
                    <input id="eeFeaturedInnerItem" type="hidden" value="744a1300-25ac-4bcc-98b8-50ea49529c12" />
                    <legend>{countryLabel}</legend>
                    <div className="form-row">
                        <CountriesSelect {...countriesSelectProps} />
                        <br />
                        <div className="results"></div>
                    </div>
                    <div className="scWizardButtons">
                        <br />
                        <button className="form-submit" onClick={this.handleButtonClick}>{addButton.text}</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}
export default CountryDropdown;