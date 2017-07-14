import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { shape, string, func } from 'prop-types';


class Article extends Component {

    static propTypes = {
        data: shape({
            title: string,
            url: string,
            dateRange: string,
            id: string
        }),
        previewProps: shape({
            removeText: string,
            remove: func,
            currentPageId: string
        })
    }

    handleRemoveClick = (e) => {
        const { remove } = this.props.previewProps;

        const itemId = e.target.value;
    }

    render = () => {
        const { data, previewProps } = this.props;

        return (
            <li className="article">

                <div><a href="{data.url}">{data.title}</a></div>
                <div>{data.dateRange}</div>

                { data.id === previewProps.currentPageId && (
                    <button onClick={this.handleRemoveClick} value={data.id}>{previewProps.removeText}</button>
                )}
            </li>
        );
    }
}
export default Article;