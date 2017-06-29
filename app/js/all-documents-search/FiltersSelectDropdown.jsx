import React, { Component } from 'react';
import Select from 'react-select';
import { array, string } from 'prop-types';


class FiltersSelectDropdown extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        label: string
    }

    transformFilterData = () => {
        const { filters } = this.props;

        const selectOptions = filters.map(function(item, index) {
            return {value: item.text, label: item.text, hits: item.hits};
        });

        return selectOptions;
    }

    renderOption = (opt) => {
        return (
            <li>
                <input type="checkbox" value={opt.value} />
                <a href="#">{opt.label} ({opt.hits})</a>
            </li>
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

        let options = this.transformFilterData();

        return (
            <Select
                name="form-field-name"
                value=""
                options={options}
                multi={true}
                searchable={false}
                placeholder={label}
                className={"cnt-fields cnt-fields--filters"}
                optionRenderer={this.renderOption}
                onChange={this.logChange}
            />
        )
    }
}


export default FiltersSelectDropdown;
