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
        remove: shape({
            text: string,
            method: func
        }),
    }

    handleClick = (e) => {
        const { remove } = this.props;
        console.log(e.target.value);
        remove.method();
    }

    render = () => {

        const { data, remove } = this.props;

        return (
            <div className="article">
                <div><a href="{data.url}">{data.title}</a></div>
                <div>{data.dateRange}</div>
                <button onClick={this.handleClick} value={data.id}>{remove.text}</button>
            </div>
        );
    }
}
export default Article;