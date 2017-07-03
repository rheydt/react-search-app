import React, { Component } from 'react';
import { shape, string, number, func, bool } from 'prop-types';


class FilterOption extends Component {

    static propTypes = {
        data: shape({
            hits: number,
            text: string
        }),
        addOrRemoveFilter: func,
        isSelected: bool
    }

    handleClick = (e) => {

        const { addOrRemoveFilter } = this.props;

        const value = $(e.target:checked).val();

        addOrRemoveFilter(value);
    }

    render = () => {

        const { hits, text } = this.props.data;
        const { isSelected } = this.props;

        return (
            <li>
                <input type="checkbox" name={text} value={text} onClick={this.handleClick} checked={isSelected}/>
                <label htmlFor={text}>{text} ({hits})</label>
            </li>
        )
    }
}


export default FilterOption;
