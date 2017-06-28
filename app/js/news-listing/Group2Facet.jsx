import React, { Component } from 'react';
import { array } from 'prop-types';

import FacetOption from './FacetOption.jsx';


class Group2Facet extends Component {

    static propTypes = {
        items: array,
        selected: array
    }

    buildOptionList = () => {

        var options = this.props.items;

        let optionElements = options.map(function(option) {
            return (
                <FacetOption key={option.ParentTag.TagId} data={option} />
            );
        });

        return (
            optionElements
        );
    }

    render = () => {
        return (
            <div className="listing-facets__group">
                <label className="listing-facets__label">Choose filter 2:</label>
                <div className="listing-facets__input-wrapper">
                    <select className="listing-facets__text-field">
                        {this.buildOptionList()}
                    </select>
                </div>
            </div>
        )
    }
}

export default Group2Facet;
