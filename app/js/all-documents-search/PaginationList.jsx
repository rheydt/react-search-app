import React, { Component } from 'react';
import { number, func } from 'prop-types';


class PaginationList extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number,
        goToPage: func
    }

    render = () => {
        const { currentPage, totalPages, pageRange, goToPage } = this.props;

        // list length is totalPages or pageRange, whichever is smaller
        const listLength = totalPages > pageRange
            ? pageRange
            : totalPages;

        // generate array of length listLength where each entry a number, in order
        const pageArray = Array(listLength).fill().map((el, index) => index + 1);

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
}


export default PaginationList;
