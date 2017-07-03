import React, { Component } from 'react';
import { number, func } from 'prop-types';


class PaginationList extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number,
        goToPage: func
    }

    generatePagesArray = () => {
        const { currentPage, totalPages, pageRange } = this.props;

        // make array of indexes from 0 to totalPages
        // note: our array will start the count at 1
        const totalPagesArray = Array(totalPages).fill().map((el, i) => i + 1);

        // list length is totalPages or pageRange, whichever is smaller
        const listLength = totalPages > pageRange
            ? pageRange
            : totalPages;

        // determine # of items to show on each side of current page item
        const midPoint = Math.ceil(pageRange / 2);

        // set boundries of page list, fixing the list at each extremity
        // so pages shown are never negative or more than totalPages
        if (currentPage <= midPoint) {
            // if currentPage is near the start of the list
            return totalPagesArray.slice(0, listLength);
        } else if (currentPage + midPoint >= totalPages) {
            // if currentPage is near the end of the list
            return totalPagesArray.slice(totalPages - pageRange, totalPages);
        } else {
            // if current page is somewhere in between
            return totalPagesArray.slice(currentPage - midPoint, currentPage + midPoint);
        }
    }

    render = () => {
        const { currentPage, totalPages, pageRange, goToPage } = this.props;

        const pageNums = this.generatePagesArray();

        const pageElements = pageNums.map((el, index) => {
            if (currentPage === 1 && el === 1) {
                // special case - don't print page 1 if on first page
                return ("");
            } else if (el === currentPage) {
                return (<span key={index} className="current-page">{el}</span>);
            } else {
                return (<a key={index} href="#">{el}</a>);
            }
        });


        return (
            <span className="pnlGroup">
                {pageElements}
            </span>
        );
    }
}


export default PaginationList;
