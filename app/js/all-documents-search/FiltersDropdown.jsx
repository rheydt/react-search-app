import React, { Component } from 'react';
import { array, string } from 'prop-types';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        label: string
    }

    render = () => {

        const { filters, selected, label } = this.props;

        return (
            <fieldset className="cnt-fields">
                <dl className="dropdown">
                    <dt>
                        <a name="filters">
                            <span className="filter-label">{label}</span>
                            <p className="multiSel"></p>
                        </a>
                    </dt>
                </dl>
            </fieldset>
        )
    }
}


export default FiltersDropdown;
