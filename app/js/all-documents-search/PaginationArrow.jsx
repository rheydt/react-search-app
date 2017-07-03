import React, { Component } from 'react';
import { number, func } from 'prop-types';
import classNames from 'classnames';


class PaginationArrow extends Component {

    static propTypes = {
        direction: number,
        goToPage: func,
        destinationPage: number
    }

    handleClick = (e) => {
        const { goToPage, destinationPage } = this.props;

        e.preventDefault();
        goToPage(destinationPage);
    }

    render = () => {
        const { direction } = this.props;

        // conditionally add directional class for styling purposes
        const directionClass = classNames("pagination-arrow", {
            "previous": direction < 0,
            "next": direction > 0
        });

        return (
            <a href="#" className={directionClass} onClick={this.handleClick}></a>
        );
    }
}


export default PaginationArrow;
