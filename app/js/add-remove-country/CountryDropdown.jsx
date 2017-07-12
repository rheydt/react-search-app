import React, { Component } from 'react';
import ReactDOM from "react-dom";

class CountryDropdown extends Component {

    render = () => {

        return (
            <form className="form imf-country-tag-form" method="post" action="/api/imf/countryfeaturednews/addfeatured">
                <fieldset>
                    <input id="eeFeaturedInnerItem" type="hidden" value="744a1300-25ac-4bcc-98b8-50ea49529c12" />
                    <legend>Select Country</legend>
                    <div className="form-row">
                        <select id="eeFeaturedCountries">
                            <option>--Select Country--</option>
                                <option value="20689307-59d0-4adc-a923-9de7369a1b53">Italy</option>
                                <option value="cafe9140-6fdf-4c66-975c-afd0e3c3cbf3">Mexico</option>
                        </select>
                        <br />
                        <div className="results"></div>
                    </div>
                    <div className="scWizardButtons">
                        <br />
                        <button className="form-submit">Add to Country</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}
export default CountryDropdown;