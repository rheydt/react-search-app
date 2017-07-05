import React, { Component } from 'react';
import { string } from 'prop-types';


class ClearButton extends Component {

    static propTypes = {
        clearButtonText: clearButtonText
    }

    render = () => {
        const { clearButtonText } = this.props;

        return (
            <button className="text">{clearButtonText}</button>
        );
    }
}

export default ClearButton;
