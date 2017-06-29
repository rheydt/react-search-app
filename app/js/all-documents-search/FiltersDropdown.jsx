import React, { Component } from 'react';
import Select from 'react-select';
import { array, string } from 'prop-types';


class FiltersDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        label: string
    }

    renderOption = () => {
        console.log(this.props.filters);

        return (
            "test"
        );
    }

    renderArrow = () => {
        return (
            <span className="cnt-fields__dropdown-arrow"></span>
        );
    }

    logChange = (val) => {
        console.log("Selected: " + JSON.stringify(val));
    }

    render = () => {

        const { filters, selected, label } = this.props;

        return (
            <Select
                name="form-field-name"
                value="one"
                options={filters}
                multi={true}
                placeholder={label}
                className={"cnt-fields cnt-fields--filters"}
                onChange={this.logChange}
            />
        )
    }
}


export default FiltersDropdown;
