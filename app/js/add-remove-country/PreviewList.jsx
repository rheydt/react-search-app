import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, func } from 'prop-types';

import Article from './Article.jsx';


class PreviewList extends Component {

    static propTypes = {
        previewLabel: string,
        previewItems: array,
        removeButtonText: string,
        removeFromCountry: func,
        currentPageId: string
    }

    renderPreviewList = () => {
        const { previewItems, removeButtonText, removeFromCountry, currentPageId } = this.props;

        const previewProps = {
            removeText: removeButtonText,
            remove: removeFromCountry,
            currentPageId: currentPageId
        }

        return previewItems.map((item, index) =>
            <Article key={index} data={item} previewProps={previewProps} />
        );
    }

    render = () => {
        const { previewLabel, previewItems } = this.props;

        return (
            <div className="articles-preview">
                <p><i>{previewLabel.replace(/{num}/g, previewItems.length)}</i></p>

                { previewItems.length > 0 && (
                    <ul className="articles-preview__list">
                    {this.renderPreviewList()}
                    </ul>
                )}

            </div>
        );
    }
}
export default PreviewList;