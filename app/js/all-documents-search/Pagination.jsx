import React, { Component } from 'react';
import { number, func } from 'prop-types';


class Pagination extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number,
        goToPage: func
    }

    state =  {
        showPrev: true,
        showNext: true
    }

    handleNextOrPrevClick = (e) => {
        const { currentPage, goToPage } = this.props;

        e.preventDefault();
        console.log(e.target);
    }


    handlePrevClick = (e) => {
        const { currentPage, goToPage } = this.props;

        e.preventDefault();
        goToPage(currentPage - 1);
    }

    handleNextClick = (e) => {
        const { currentPage, goToPage } = this.props;

        e.preventDefault();
        goToPage(currentPage + 1);
    }

    renderPrevButton = () => {
        const { currentPage, goToPage } = this.props;

        const prevPage = currentPage - 1;

        if (currentPage > 1) {
            return (<a href="#" className="previous" data-direction="next" onClick={this.handlePrevClick}></a>);
        } else {
            return;
        }
    }

    renderNextButton = () => {
        const { currentPage, goToPage, totalPages } = this.props;

        const nextPage = currentPage + 1;

        if (currentPage < totalPages) {
            return (<a href="#" className="next" data-direction="prev" onClick={this.handleNextClick}></a>);
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

    isCurrentPage = (pageNum) => {
        const { currentPage } = this.props;

        return pageNum === currentPage;
    }

    renderPageList = () => {
        const { currentPage, pageRange, totalPages } = this.props;

        // list length is totalPages or pageRange, whichever is smaller
        const listLength = totalPages > pageRange
            ? pageRange
            : totalPages;

        // generate array of length listLength where each entry a number, in order
        const pageArray = Array(listLength).fill().map((el, index) => index + 1 );
        console.log(pageArray);

        const pageList = pageArray.map((el, index) => {
            // if (currentPage === 1 && el === 1) {
            //     return (""); // special case - don't print page 1 if on first page
            // }
            if (this.isCurrentPage(el)) {
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

                    {this.renderPrevButton()}

                    {this.renderPageXofY()}

                    {this.renderPageList()}

                    {this.renderNextButton()}

                </div>
            </div>
        );
    }
}


export default Pagination;
