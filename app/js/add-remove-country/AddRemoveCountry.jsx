import React, { Component } from 'react';
import ReactDOM from "react-dom";

import CountryDropdown from './CountryDropdown.jsx';
import PreviewList from './PreviewList.jsx';
import GoToCountryLink from './GoToCountryLink.jsx';


class AddRemoveCountryApp extends Component {

    state = {
        serviceBase: "/api/imf/countryfeaturednews/",
        getService: "getfeatured=",
        countryLabel: "Select Country",
        countryPlaceholder: "Choose A Country",
        countries: [
            {
                name: "Italy",
                id: "20689307-59d0-4adc-a923-9de7369a1b53"
            },
            {
                name: "Mexico",
                id: "cafe9140-6fdf-4c66-975c-afd0e3c3cbf3"
            }
        ],
        addButton: {
            text: "Add to {country}",
            service: "addfeatured=",
        },
        goToCountryLink: {
            text: "Go To {country} Page",
            url: "http://devcm/?sc_mode=edit&amp;sc_itemid=%7bE2DE87DF-EFE2-40B8-B2FD-92DE54A19F43%7d&amp;sc_lang=en"
        },
        previewLabel: "Displaying {num} current items on {country}",
        previewItems: [
            {
                title: "Title of different article being Featured",
                url: "#",
                dateRange: "2017-05-12 to 2017-06-05"
            },
            {
                title: "Another One",
                url: "#",
                dateRange: "2017-05-13 to 2017-07-05"
            }
        ],
        removeButton: {
            text: "Remove from {country}",
            service: "removefeatured="
        }
    }

    addToCountry = () => {
        console.log("add to country");
    }

    removeFromCountry = (item, country) => {
        console.log("remove from country");
    }

    render = () => {

        const { countryLabel, countryPlaceholder, countries, goToCountryLink, previewLabel, previewItems, addButton, removeButton } = this.state;

        const countryDropdownProps = {
            countryLabel: countryLabel,
            countryPlaceholder: countryPlaceholder,
            countries: countries,
            addButton: addButton,
            addToCountry: this.addToCountry
        }

        const previewListProps = {
            previewLabel: previewLabel,
            previewItems: previewItems,
            removeButton: removeButton,
            removeFromCountry: this.removeFromCountry
        }

        return (
            <div className="module">

                <div className="notes">
                    <div className="alert">This is an "Experience Editor" only item.</div>
                    <div>Changes are made without saving the current page.</div>
                </div>

                <CountryDropdown {...countryDropdownProps} />

                <PreviewList {...previewListProps} />

                <GoToCountryLink {...goToCountryLink} />

            </div>
        );
    }
}
export default AddRemoveCountryApp;