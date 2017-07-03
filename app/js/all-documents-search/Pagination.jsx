import React, { Component } from 'react';
import { number, func } from 'prop-types';

import PaginationArrow from './PaginationArrow.jsx';
import PaginationList from './PaginationList.jsx';


class Pagination extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number,
        goToPage: func
    }

    renderArrow = (direction) => {
        const { currentPage, totalPages, goToPage } = this.props;

        /* direction = -1 for previous button
        ** direction = 1 for next button
        */

        const arrowProps = {
            direction: direction,
            goToPage: goToPage,
            destinationPage: currentPage + (direction)
        }

        // only print the button if there is a next/prev page to navigate to
        if ( (direction < 0 && currentPage > 1) || (direction > 0 && currentPage < totalPages) ) {
            return <PaginationArrow {...arrowProps} />;
        } else {
            return;
        }
    }

    renderPageXofY = () => {
        const { currentPage, totalPages } = this.props;

        return (
            <div className="pagination"><span>Page {currentPage}</span> of {totalPages}</div>
        );
    }

    render = () => {
        const { currentPage, totalPages, pageRange, goToPage } = this.props;

        const pageListProps = {
            currentPage: currentPage,
            totalPages: totalPages,
            pageRange: pageRange,
            goToPage: goToPage
        };

        return (
            <div className="pnlResults">
                <div className="pages">

                    {this.renderArrow(-1)}

                    {this.renderPageXofY()}

                    <PaginationList {...pageListProps} />

                    {this.renderArrow(1)}

                </div>
            </div>
        );
    }
}


export default Pagination;
