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

    renderPageList = () => {
        const { currentPage, pageRange } = this.props;
        return (
            <span className="pnlGroup">
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
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
