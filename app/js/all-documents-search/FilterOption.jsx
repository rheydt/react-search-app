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

        console.log(this.props);

        const { hits, text } = this.props;

        return (
            <li>
                <input type="checkbox" />
                <a href="#">{this.props.text} ( {this.props.hits} )</a>
            </li>
        )
    }
}


export default FilterOption;
