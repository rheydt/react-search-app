import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';


class FilterOption extends Component {

    static propTypes = {
        data: shape({
            label: string,
            value: string,
            hits: number
        })
    }

    render = () => {

        const { label, value, hits } = this.props;

        return (
            <li>
                <input type="checkbox" value={value} />
                <a href="#">{label} ({hits})</a>
            </li>
        )
    }
}


export default FilterOption;
