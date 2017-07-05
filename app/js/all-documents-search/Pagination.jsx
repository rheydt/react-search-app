import React, { Component } from 'react';
import { number, string, func } from 'prop-types';

import PaginationArrow from './PaginationArrow.jsx';
import PaginationList from './PaginationList.jsx';


class Pagination extends Component {

    static propTypes = {
        currentPage: number,
        totalPages: number,
        pageRange: number,
        paginationText: string,
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

    wrapStringInSpan = (string) => {
        return (
            <span>{string}</span>
        );
    }

    renderPageXofY = () => {
        const { currentPage, totalPages, paginationText } = this.props;

        // replace {current} and {total} with values from props
        const currentPattern = /{current}/g;
        const totalPattern = /{total}/g;
        const textWithNums = paginationText.replace(currentPattern, currentPage).replace(totalPattern, totalPages);

        // split text into array with 3 parts (before match, match, and after match)
        const splitString = textWithNums.split(/{bold}(.*?){\/bold}/);
        const beforeMatch = splitString[0];
        const match = splitString[1];
        const afterMatch = splitString[2];

        // wrap match in span
        const matchInsideSpans = this.wrapStringInSpan(match);

        return (
            <div className="pagination">{beforeMatch}{matchInsideSpans}{afterMatch}</div>
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
