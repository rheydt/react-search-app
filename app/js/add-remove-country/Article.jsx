import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Article extends Component {

    render = () => {

        return (
            <div className="article">
                <div><a href="#">Title of different article being Featured</a></div>
                <div>2017-05-12 to 2017-06-05</div>
            </div>
        );
    }
}
export default Article;