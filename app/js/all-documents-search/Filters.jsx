import React, { Component } from 'react';
import { array, string } from 'prop-types';

import FilterField from './FilterField.jsx';
import FiltersDropdown from './FiltersDropdown.jsx';


class Filters extends Component {

    static propTypes = {
        filters: array,
        selected: array,
        label: string
    }

    state = {
        isOpen: false
    }

    componentDidUpdate = (prevProps, prevState) => {
        // when the menu is open, add an event listener
        // to watch for clicks outside the dropdown or field
        if (this.state.isOpen) {
            document.addEventListener("click", this.handleClickAway, true);
        } else {
            // cleanup event listener
            document.removeEventListener("click", this.handleClickAway, true);
        }
    }

    toggleDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClickAway = (e) => {
        // if the user clicked outside of the dropdown, close it
        const inDropdown = $(e.target).closest(".dropdown").length;

        if (!inDropdown){
            this.toggleDropdown();
        }
    }

    render = () => {

        const { filters, selected, label } = this.props;

        const fieldProps = {
            selected: selected,
            label: label,
            toggleDropdown: this.toggleDropdown,
            isOpen: this.state.isOpen
        }

        const dropdownProps = {
            selected: selected,
            filters: filters,
            isOpen: this.state.isOpen
        }

        return (
            <fieldset className="cnt-fields cnt-fields--filters">
                <dl className="dropdown">
                    <FilterField {...fieldProps} />
                    <FiltersDropdown {...dropdownProps} />
                </dl>
            </fieldset>
        )
    }
}

export default Filters;
