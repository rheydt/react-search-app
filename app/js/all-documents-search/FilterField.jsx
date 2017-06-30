import React, { Component } from 'react';
import { array, string, func, bool} from 'prop-types';


class FilterField extends Component {

    static propTypes = {
        selected: array,
        label: string,
        toggleDropdown: func
    }

    handleClick = (e) => {
        const { toggleDropdown } = this.props;

        e.preventDefault();
        toggleDropdown();
    }

    render = () => {

        const { selected, label } = this.props;

        return (
            <dt>
                <a name="filters">
                    <span className="filter-label">{label}</span>
                    <p className="multiSel"></p>
                </a>
            </dt>
        )
    }
}


export default FilterField;
