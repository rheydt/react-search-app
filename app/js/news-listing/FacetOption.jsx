import React, { Component } from 'react';
import { array } from 'prop-types';

import FacetChildOption from './FacetChildOption.jsx';


class FacetOption extends Component {

    // static propTypes = {
    //     items: array,
    //     selected: array
    // }

    render = () => {
        return (
            <option value="{this.props.data.ParentTag.TagId}">{this.props.data.ParentTag.TagName}</option>
        )
    }

}

export default FacetOption;
