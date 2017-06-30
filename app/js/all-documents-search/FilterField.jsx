import React, { Component } from 'react';
import { array, string, func, bool} from 'prop-types';
import classNames from 'classnames';


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

        const isEmpty = this.props.selected.length === 0;

        // conditionally add is-empty class for placeholder styling purposes
        const isEmptyClass = classNames("filter-field", {
            "is-empty": isEmpty
        });

        const fieldText = isEmpty
            ? label
            : selected.join(", ");

        return (
            <dt>
                <a className={isEmptyClass} onClick={this.handleClick}>
                    <span>{fieldText}</span>
                </a>
            </dt>
        )
    }
}


export default FilterField;
