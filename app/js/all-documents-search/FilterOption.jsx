import React, { Component } from 'react';
import { shape, string, number, func } from 'prop-types';


class FilterOption extends Component {

    static propTypes = {
        data: shape({
            hits: number,
            text: string
        }),
        addOrRemoveFilter: func
    }

    handleClick = (e) => {

        const { addOrRemoveFilter } = this.props;

        const value = $(e.target:checked).val();

        addOrRemoveFilter(value);
    }

    render = () => {

        const { hits, text } = this.props.data;

        return (
            <li>
                <input type="checkbox" name={text} value={text} onClick={this.handleClick}/>
                <label htmlFor={text}>{text} ({hits})</label>
            </li>
        )
    }
}


export default FilterOption;
