import React, { Component } from 'react';
import { number, func } from 'prop-types';

import PaginationArrow from './PaginationArrow.jsx';


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

    renderPageList = () => {
        const { currentPage, pageRange, totalPages } = this.props;

        // list length is totalPages or pageRange, whichever is smaller
        const listLength = totalPages > pageRange
            ? pageRange
            : totalPages;

        // generate array of length listLength where each entry a number, in order
        const pageArray = Array(listLength).fill().map((el, index) => el );

        const emptyPageArray = Array(listLength);


        const pageList = pageArray.map((el, index) => {
            // if (currentPage === 1 && el === 1) {
            //     return (""); // special case - don't print page 1 if on first page
            // }
            if (el === currentPage) {
                return (<span key={index} className="current-page">{el}</span>);
            } else {
                return (<a key={index} href="#">{el}</a>);
            }
        });

        return (
            <span className="pnlGroup">
                {pageList}
            </span>
        );
    }

    render = () => {
        return (
            <div className="pnlResults">
                <div className="pages">

                    {this.renderArrow(-1)}

                    {this.renderPageXofY()}

                    {this.renderPageList()}

                    {this.renderArrow(1)}

                </div>
            </div>
        );
    }
}


export default Pagination;
