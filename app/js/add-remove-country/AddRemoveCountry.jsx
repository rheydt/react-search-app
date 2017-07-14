import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { shape, string } from 'prop-types';

import CountryDropdown from './CountryDropdown.jsx';
import PreviewList from './PreviewList.jsx';


class AddRemoveCountryApp extends Component {

    /* props come from BE via script tag in .cshtml */

    static propTypes = {
        service: shape({
            base: string,
            get: string,
            add: string,
            remove: string
        }),
        currentPageId: string,
        dictionary: shape({
            countryLabel: string,
            countryPlaceholder: string,
            previewLabel: string,
            addButtonText: string,
            removeButtonText: string,
            goToCountryButtonText: string
        })
    }

    state = {
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
            },
            {
                title: "Current Page Article",
                url: "#",
                dateRange: "XXXX-XX-XX to XXXX-XX-XX",
                id: "744a1300-25ac-4bcc-98b8-50ea49529c12"
            },
        ],
        publicFacingMessage: "",
        error: false
    }

    replaceCountryToken = (string) => {
        const { currentCountry } = this.state;

        const countryPattern = /{country}/g;
        return string.replace(countryPattern, currentCountry.name);
    }

    updateChosenCountry = (countryObj) => {
        this.setState({currentCountry: countryObj})
    }

    getPreviewItems = () => {
        // don't need item id
        console.log("getting items for ", countryId);
        const url = this.buildServiceUrl("get", item);
        //http://devcm/api/imf/countryfeaturednews/getfeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3
        const results = this.requestResults(url);
        // [{"dateRangeText":"2017-07-11 to 2017-07-25","title":"dwp-TestEvent-Page","url":"/en/Velir/dwp-TestEvent-Page","featuredNewsItemId":"bcfea9aa-6877-43ff-847f-316bd8b6db1f","featuredNewsInnerItemId":"744a1300-25ac-4bcc-98b8-50ea49529c12","countryPageId":"8307afa9-4517-4509-a3d5-0e98625d0036"}]
        this.setState({
            previewItems: results
        });
    }

    addToCountry = () => {
        console.log("add to country");
        const { currentPageId } = this.props;

        const url = this.buildServiceUrl("add", currentPageId);
        // http://devcm/api/imf/countryfeaturednews/addfeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3&itemid=744a1300-25ac-4bcc-98b8-50ea49529c12

        const results = this.requestResults(url);
        this.setState({
            publicFacingMessage: results.publicFacingMessage,
            error: results.successful
        })
        //{"publicFacingMessage":"Item already being featured","successful":false}
    }

    removeFromCountry = (item) => {
        console.log("remove from country");
        const { currentPageId } = this.props;

        const url = this.buildServiceUrl("remove", currentPageId);
        //http://devcm/api/imf/countryfeaturednews/removefeatured?countryId=cafe9140-6fdf-4c66-975c-afd0e3c3cbf3&itemid=744a1300-25ac-4bcc-98b8-50ea49529c12
        const results = this.requestResults(url);
    }

    buildServiceUrl = (action) => {
        const { service, currentPageId } = this.props;
        const { currentCountry } = this.state;

        const countryString = "countryId=" + currentCountry.id;
        const itemString = "itemid=" + currentPageId;

        switch (action) {
            case "get":
                return service.base + service.get + "?" + countryString;
                break;
            case "add":
                return service.base + service.add + "?" + countryString + itemString;
                break;
            case "remove":
                return service.base + service.remove + "?" + countryString + itemString;
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
        const { currentCountry, countries, previewItems } = this.state;
        const { dictionary, currentPageId } = this.props;

        const countryDropdownProps = {
            currentCountry: currentCountry,
            countryLabel: dictionary.countryLabel,
            countryPlaceholder: dictionary.countryPlaceholder,
            countries: countries,
            addButtonText: this.replaceCountryToken(dictionary.addButtonText),
            addToCountry: this.addToCountry,
            updateChosenCountry: this.updateChosenCountry,
            previewItems: previewItems,
            currentPageId: currentPageId
        }

        const previewListProps = {
            previewLabel: this.replaceCountryToken(dictionary.previewLabel),
            previewItems: previewItems,
            removeButtonText: this.replaceCountryToken(dictionary.removeButtonText),
            removeFromCountry: this.removeFromCountry,
            currentPageId: currentPageId
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