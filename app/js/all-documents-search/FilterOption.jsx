import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';


class FilterOption extends Component {

    static propTypes = {
        data: shape({
            hits: number,
            text: string
        })
    }

    render = () => {

        const { hits, text } = this.props.data;

        return (
            <li>
                <input type="checkbox" name={text} value={text} />
                <label htmlFor={text}>{text} ( {hits} )</label>
            </li>
        )
    }
}


export default FilterOption;
