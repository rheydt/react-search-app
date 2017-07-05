import React, { Component } from 'react';
import { string } from 'prop-types';


class SubmitButton extends Component {

    static propTypes = {
        searchButtonText: string
    }

    render = () => {
        const { searchButtonText } = this.props;

        return (
            <button type="submit" className="text">{searchButtonText}</button>
        );
    }
}

export default SubmitButton;
