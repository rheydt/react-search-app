import React, { Component } from 'react';
import { string } from 'prop-types';


class SubmitButton extends Component {

    static propTypes = {
        label: string
    }

    render = () => {
        const { label } = this.props;

        return (
            <button type="submit" className="text">{label}</button>
        );
    }
}

export default SubmitButton;
