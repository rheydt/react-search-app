import React, { Component } from 'react';
import { number } from 'prop-types';


class Pagination extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number
    }

    state =  {
        showPrev: true,
        showNext: true
    }

    renderPrevButton = () => {
        if (this.state.showPrev) {
            return (<a href="#" className="previous"></a>);
        } else {
            return;
        }
    }

    renderNextButton = () => {
        if (this.state.showNext) {
            return (<a href="#" className="next"></a>);
        } else {
            return;
        }
    }

    renderPageXofY = () => {
        const { currentPage, totalPages } = this.props;

        return (
            <span><span>Page {currentPage}</span> of {totalPages}</span>
        );
    }

    renderPageList = () => {
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
                <p className="pages">

                    {this.renderPrevButton()}

                    {this.renderPageXofY()}

                    {this.renderPageList()}

                    {this.renderNextButton()}

                </p>
            </div>
        );
    }
}


export default Pagination;
