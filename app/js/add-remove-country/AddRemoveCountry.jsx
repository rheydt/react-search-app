import React, { Component } from 'react';
import ReactDOM from "react-dom";

import CountryDropdown from './CountryDropdown.jsx';
import PreviewList from './PreviewList.jsx';


class AddRemoveCountryApp extends Component {

    state = {
        service: {
            base: "/api/imf/countryfeaturednews/",
            get: "getfeatured=",
            add: "addfeatured=",
            remove: "removefeatured="
        },
        currentCountry: {
            name: "",
            id: "",
            url: ""
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
                dateRange: "2017-05-12 to 2017-06-05",
                id: "123456"
            },
            {
                title: "Another One",
                url: "#",
                dateRange: "2017-05-13 to 2017-07-05",
                id: "234234"
            }
        ],
        dictionary: {
            countryLabel: "Select Country",
            countryPlaceholder: "Choose A Country",
            previewLabel: "Displaying {num} current items for {country}:",
            addButtonText: "Add to {country}",
            removeButtonText: "Remove from {country}",
            goToCountryButtonText: "Go To {country}'s Page"
        },
        publicFacingMessage: "",
        error: false
    }

    addToCountry = () => {
        console.log("add to country");
        const url = this.buildServiceUrl("add");
        // http://devcm/api/imf/countryfeaturednews/addfeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3&itemid=744a1300-25ac-4bcc-98b8-50ea49529c12
        const results = this.requestResults(url);
        //{"publicFacingMessage":"Item already being featured","successful":false}
    }

    removeFromCountry = (item, country) => {
        console.log("remove from country");
        const url = this.buildServiceUrl("remove");
        //http://devcm/api/imf/countryfeaturednews/removefeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3&itemid=744a1300-25ac-4bcc-98b8-50ea49529c12
        const results = this.requestResults(url);
    }

    replaceCountryToken = (string) => {
        const { currentCountry } = this.state;

        const countryPattern = /{country}/g;
        return string.replace(countryPattern, currentCountry.name);
    }

    updateChosenCountry = (countryObj) => {
        console.log("updating to ", countryObj);
        this.setState({
            currentCountry: countryObj
        })
    }

    getPreviewItems = (countryId) => {
        console.log("getting items for ", countryId);
        const url = this.buildServiceUrl("get");
        //http://devcm/api/imf/countryfeaturednews/getfeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3&itemid=744a1300-25ac-4bcc-98b8-50ea49529c12
        const results = this.requestResults(url);
        // [{"dateRangeText":"2017-07-11 to 2017-07-25","title":"dwp-TestEvent-Page","url":"/en/Velir/dwp-TestEvent-Page","featuredNewsItemId":"bcfea9aa-6877-43ff-847f-316bd8b6db1f","featuredNewsInnerItemId":"744a1300-25ac-4bcc-98b8-50ea49529c12","countryPageId":"8307afa9-4517-4509-a3d5-0e98625d0036"}]
        this.setState({
            previewItems: results
        });
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
            }, () => {
                // this.setState({
                //     results: []
                // })
            })
    }

    render = () => {
        console.log("rendering");
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
            previewLabel: this.replaceCountryToken(dictionary.previewLabel),
            previewItems: previewItems,
            removeButtonText: this.replaceCountryToken(dictionary.removeButtonText),
            removeFromCountry: this.removeFromCountry
        }

        return (
            <div className="module">

                <div className="notes">
                    <div className="alert">This is an "Experience Editor" only item.</div>
                    <div>Changes are made without saving the current page.</div>
                </div>

                <CountryDropdown {...countryDropdownProps} />

                { currentCountry.id !== "" && (
                    <div>
                        <PreviewList {...previewListProps} />
                        <a href="{currentCountry.url}">{this.replaceCountryToken(dictionary.goToCountryButtonText)}</a>
                    </div>
                )}

            </div>
        );
    }
}
export default AddRemoveCountryApp;