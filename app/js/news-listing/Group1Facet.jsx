import React, { Component } from 'react';
import { array } from 'prop-types';

import FacetOption from './FacetOption.jsx';


class Group1Facet extends Component {

    static propTypes = {
        items: array,
        selected: array
    }

    buildOptionList = () => {

        var allOptions = this.props.items;

        let allOptionElements = allOptions.map(function(option) {
            return (
                <FacetOption key={option.ParentTag.TagId} data={option} />
            );
        });

        return (
            allOptionElements
        );
    }

    render = () => {
        return (
            <div className="listing-facets__group">
                <label className="listing-facets__label">Choose filter 1:</label>
                <div className="listing-facets__input-wrapper">
                    <select className="listing-facets__text-field">
                        {this.buildOptionList()}
                    </select>
                </div>
            </div>
        )
    }

}

export default Group1Facet;
