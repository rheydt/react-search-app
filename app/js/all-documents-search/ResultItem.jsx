import React, { Component } from 'react';
import { object } from 'prop-types';


class ResultsItem extends Component {

    static propTypes = {
        data: object
    }

    render = () => {

        return (
            <div className="result-item">
                <h6>TITLE</h6>
                <p className="date">DATE</p>
                <a href="#" className="btn classify">TAG</a>
            </div>
        );
    }
}


export default ResultsItem;
