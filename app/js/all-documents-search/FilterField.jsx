import React, { Component } from 'react';
import { array, string, func, bool} from 'prop-types';
import classNames from 'classnames';


class FilterField extends Component {

    static propTypes = {
        selected: array,
        label: string,
        toggleDropdown: func
    }

    state = {
        isEmpty : this.props.selected.length <= 0
    }

    handleClick = (e) => {
        const { toggleDropdown } = this.props;

        e.preventDefault();
        toggleDropdown();
    }

    render = () => {

        const { selected, label } = this.props;

        // conditionally add is-showing class for placeholder styling purposes
        const isEmptyClass = classNames("filter-field", {
            "is-empty": this.state.isEmpty
        });

        return (
            <dt>
                <a name="filters" className={isEmptyClass} onClick={this.handleClick}>
                    <span className="filter-label">{label}</span>
                    <p className="multiSel">SELECTIONS</p>
                </a>
            </dt>
        )
    }
}


export default FilterField;
