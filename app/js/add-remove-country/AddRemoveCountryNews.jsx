import React, { Component } from 'react';
import ReactDOM from "react-dom";

import CountryDropdown from './CountryDropdown.jsx';
import PreviewList from './PreviewList.jsx';


class AddRemoveCountryNews extends Component {

    state = {
        service: {
            base: "/api/imf/countryfeaturednews/",
            get: "getfeatured=",
            add: "addfeatured=",
            remove: "removefeatured="
        },
        currentCountry: {
            name: "Mexico",
            id: "cafe9140-6fdf-4c66-975c-afd0e3c3cbf3",
            url: "http://devcm/?sc_mode=edit&amp;sc_itemid=%7bE2DE87DF-EFE2-40B8-B2FD-92DE54A19F43%7d&amp;sc_lang=en"
        },
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
        dictionary: {
            countryLabel: "Select Country",
            countryPlaceholder: "Choose A Country",
            previewLabel: "Displaying {num} current items on {country}",
            addButtonText: "Add to {country}",
            removeButtonText: "Remove from {country}",
            goToCountryButtonText: "Go To {country}'s Page"
        }
    }

    addToCountry = () => {
        console.log("add to country");
        const url = this.buildServiceUrl("add");
        const results = this.requestResults(url);
    }

    removeFromCountry = (item, country) => {
        console.log("remove from country");
        const url = this.buildServiceUrl("remove");
        const results = this.requestResults(url);
    }

    replaceCountryToken = (string) => {
        const { currentCountry } = this.state;

        const countryPattern = /{country}/g;

        return string.replace(countryPattern, currentCountry.name);
    }

    updateChosenCountry = (countryId) => {
        console.log("update chosen country to ", countryId);
        const url = this.buildServiceUrl("get");
        const results = this.requestResults(url);
    }


    buildServiceUrl = (action) => {
        const { service } = this.state;

        switch (action) {
            case "get":
                return service.base + service.get;
                break;
            case "add":
                return service.base + service.add;
                break;
            case "remove":
                return service.base + service.remove;
                break;
        }
    }

    requestResults = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    this.setState({
                        requestFailed: true
                    });
                    throw Error("Network request failed");
                }
                console.log("response:", response);
                return response
            })
            .then(d => d.json())
            .then(d => {
                console.log("data:", d);
                this.setState({
                    currentCountry: d.currentCountry,
                    previewItems: d.previewItems
                })
            }, () => {
                // this.setState({
                //     results: []
                // })
            })
    }

    render = () => {
        const { currentCountry, countries, previewItems, dictionary } = this.state;

        const countryDropdownProps = {
            currentCountry: currentCountry,
            countryLabel: dictionary.countryLabel,
            countryPlaceholder: dictionary.countryPlaceholder,
            countries: countries,
            addButtonText: this.replaceCountryToken(dictionary.addButtonText),
            addToCountry: this.addToCountry,
            updateChosenCountry: this.updateChosenCountry
        }

        const previewListProps = {
            previewLabel: dictionary.previewLabel,
            previewItems: previewItems,
            removeButtonText: this.replaceCountryToken(dictionary.removeButtonText),
            removeFromCountry: this.removeFromCountry
        }

        const goToCountryText = this.replaceCountryToken(dictionary.goToCountryButtonText);

        return (
            <div className="module">

                <div className="notes">
                    <div className="alert">This is an "Experience Editor" only item.</div>
                    <div>Changes are made without saving the current page.</div>
                </div>

                <CountryDropdown {...countryDropdownProps} />

                // <PreviewList {...previewListProps} />

                <a href="{currentCountry.url}">{goToCountryText}</a>

            </div>
        );
    }
}
export default AddRemoveCountryNews;