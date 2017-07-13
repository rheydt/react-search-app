import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, shape, func } from 'prop-types';

import CountriesSelect from './CountriesSelect.jsx';

class CountryDropdown extends Component {

    static propTypes = {
        currentCountry: shape({
            name: string,
            id: string
        }),
        countryLabel: string,
        countryPlaceholder: string,
        countries: array,
        addButtonText: string,
        addToCountry: func,
        updateChosenCountry: func
    }

    handleButtonClick = (e) => {
        addToCountry();
    }

    render = () => {
        const { currentCountry, countryLabel, countryPlaceholder, countries, addButtonText, updateChosenCountry } = this.props;

        const countriesSelectProps = {
            currentCountry: currentCountry,
            countryPlaceholder: countryPlaceholder,
            countries: countries,
            updateChosenCountry: updateChosenCountry
        }

        return (
            <form className="form imf-country-tag-form" method="post" action="/api/imf/countryfeaturednews/addfeatured">
                <fieldset>

                    <input id="eeFeaturedInnerItem" type="hidden" value="744a1300-25ac-4bcc-98b8-50ea49529c12" />

                    { countryLabel !== ""  && (
                        <legend>{countryLabel}</legend>
                    )}

                    <div className="form-row">
                        <CountriesSelect {...countriesSelectProps} />
                        <br />
                    </div>

                    { currentCountry.id !== "" && (
                        <div>
                            <br />
                            <button className="form-submit" onClick={this.handleButtonClick}>{addButtonText}</button>
                        </div>
                    )}

                </fieldset>
            </form>
        );
    }
}
export default CountryDropdown;