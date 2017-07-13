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
            undoText: string,
            remove: func,
            undo: func
        })
    }

    state = {
        removed: false
    }

    handleRemoveClick = (e) => {
        const { remove } = this.props.previewProps;

        const itemId = e.target.value;
        this.setState({removed: true});
        remove(itemId);
    }

    handleUndoClick = (e) => {
        const { undo } = this.props.previewProps;

        const itemId = e.target.value;
        this.setState({removed: false});
        undo(itemId);
    }

    render = () => {
        const { data, previewProps } = this.props;

        return (
            <div className="article">

                <div><a href="{data.url}">{data.title}</a></div>
                <div>{data.dateRange}</div>

                { this.state.removed && (
                    <div>
                        <div className="alert">This item has been removed</div>
                        <button onClick={this.handleUndoClick} value={data.id}>{previewProps.undoText}</button>
                    </div>
                )}

                { !this.state.removed && (
                    <button onClick={this.handleRemoveClick} value={data.id}>{previewProps.removeText}</button>
                )}
            </div>
        );
    }
}
export default Article;