import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, shape, func } from 'prop-types';

import CountriesSelect from './CountriesSelect.jsx';
import AddButton from './AddButton.jsx';

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
        updateChosenCountry: func,
        previewItems: array,
        currentPageId: string
    }

    render = () => {
        const { currentCountry, countryLabel, countryPlaceholder, countries, addButtonText, updateChosenCountry, previewItems, currentPageId, addToCountry } = this.props;

        const countriesSelectProps = {
            currentCountry: currentCountry,
            countryPlaceholder: countryPlaceholder,
            countries: countries,
            updateChosenCountry: updateChosenCountry
        }

        const addButtonProps = {
            addButtonText: addButtonText,
            addToCountry: addToCountry
        }

        const isCurrentPageItem = previewItems.filter(function(item){
            return item.id === currentPageId;
        });

        return (
            <form className="form imf-country-tag-form">
                <fieldset>

                    { countryLabel !== ""  && (
                        <legend>{countryLabel}</legend>
                    )}

                    <div className="form-row">
                        <CountriesSelect {...countriesSelectProps} />
                        <br />
                    </div>

                    { (currentCountry.id !== "" && isCurrentPageItem.length > 0) && (
                        <AddButton {...addButtonProps} />
                    )}

                </fieldset>
            </form>
        );
    }
}
export default CountryDropdown;