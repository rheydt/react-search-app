import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { string, array, func } from 'prop-types';

import Article from './Article.jsx';


class PreviewList extends Component {

    static propTypes = {
        previewLabel: string,
        previewItems: array,
        removeButtonText: string,
        removeFromCountry: func
    }

    replaceNumToken = (string) => {
        const { previewItems } = this.props;

        const numPattern = /{num}/g;

        return string.replace(numPattern, previewItems.length);
    }

    renderPreviewList = () => {
        const { previewItems, removeButtonText, removeFromCountry } = this.props;

        const removeProps = {
            text: removeButtonText,
            method: removeFromCountry
        }

        return previewItems.map((item, index) =>
            <Article key={index} data={item} remove={removeProps} />
        );
    }

    render = () => {
        const { previewLabel } = this.props;

        const previewLabelWithNum = this.replaceNumToken(previewLabel);

        return (
            <div className="articles-preview">
                <p><i>{previewLabelWithNum}</i></p>

                {this.renderPreviewList()}
            </div>
        );
    }
}
export default PreviewList;