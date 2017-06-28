import React, { Component } from 'react';

class Pagination extends Component {

    render = () => {
        return (
            <div className="pnlResults">
                <p className="pages">

                    <a href="#" className="previous"></a>

                    <span>Page: 1</span> of 2664

                    <span className="pnlGroup"></span>

                    <a href="#" className="next"></a>

                </p>
            </div>
        )
    }
}


export default Pagination;
