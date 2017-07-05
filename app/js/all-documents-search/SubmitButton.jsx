import React, { Component } from 'react';
import { string } from 'prop-types';


class SubmitButton extends Component {

    static propTypes = {
        label: string
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("submitting search");
    }

    render = () => {
        const { label } = this.props;

        return (
            <button type="submit" className="text" onClick={this.handleClick}>{label}</button>
        );
    }
}

export default SubmitButton;
