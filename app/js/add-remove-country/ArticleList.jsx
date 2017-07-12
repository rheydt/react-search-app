import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Article from './Article.jsx';


class PreviewList extends Component {

    render = () => {

        return (
            <div className="articles-preview">
                <i>Preview</i>

                <Article />

            </div>
        );
    }
}
export default PreviewList;