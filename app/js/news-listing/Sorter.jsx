import React, { Component } from 'react';

class Sorter extends Component {

    // true = descending
    // false = ascending

    // to conditionally add a class, use the classNames package
    // classNames("sort-arrow", {
    //     "is-active": this.props.isActive
    // })

    render = () => {
        return (
            <div className="listing-facets__group listing-facets__group--sort">
                <label className="listing-facets__label">Sort By</label>
                <div className="listing-facets__sort-wrapper">
                    <input type="text" className="listing-facets__text-field" />
                    <span className="listing-facets__dropdown-toggle"></span>
                    <div className="listing-facets__sort-arrow-group">
                        <button className="listing-facets__sort-arrow"><i className="fa fa-angle-up"></i></button>
                        <button className="listing-facets__sort-arrow"><i className="fa fa-angle-down"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sorter;
