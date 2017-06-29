import React, { Component } from 'react';
import { array } from 'prop-types';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array
    }

    render = () => {

        const { filters, selected } = this.props;

        return (
            <fieldset className="cnt-fields">
                <dl className="dropdown">
                    <dt>
                        <a name="filters">
                            <span className="filter-label">Select Filters</span>
                            <p className="multiSel"></p>
                        </a>
                    </dt>
                </dl>
            </fieldset>
        )
    }
}


export default FiltersDropdown;
