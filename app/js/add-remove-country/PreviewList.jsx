import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, func } from 'prop-types';

import Article from './Article.jsx';


class PreviewList extends Component {

    static propTypes = {
        previewLabel: string,
        previewItems: array,
        removeButtonText: string,
        undoButtonText: string,
        removeFromCountry: func,
        addToCountry: func
    }

    replaceNumToken = (string) => {
        const { previewItems } = this.props;

        const numPattern = /{num}/g;

        return string.replace(numPattern, previewItems.length);
    }

    renderPreviewList = () => {
        const { previewItems, removeButtonText, undoButtonText, removeFromCountry, addToCountry } = this.props;

        const previewProps = {
            removeText: removeButtonText,
            undoText: undoButtonText,
            remove: removeFromCountry,
            undo: addToCountry
        }

        return previewItems.map((item, index) =>
            <Article key={index} data={item} previewProps={previewProps} />
        );
    }

    render = () => {
        const { previewLabel, previewItems } = this.props;

        const previewLabelWithNum = this.replaceNumToken(previewLabel);

        return (
            <div className="articles-preview">
                <p><i>{previewLabelWithNum}</i></p>

                { previewItems.length > 0 && (
                    this.renderPreviewList()
                )}

            </div>
        );
    }
}
export default PreviewList;