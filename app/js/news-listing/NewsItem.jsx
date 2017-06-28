import React, { Component } from 'react';
import { shape, string } from 'prop-types';


class NewsItem extends Component {

    static propTypes = {
        data: shape({
            image: string,
            date: string,
            title: string,
            summary: string, // rich text a diff type?
            url: string
        })
    }

    renderImg = () => {

        const { data } = this.props;

        const initialImagePath = data.image;
        const mediaLibraryPrefix = "/sitecore/shell";
        const defaultImageSrc = "https://placeholdit.imgix.net/~text?txtsize=83&txt=3:2&w=300&h=200";

        let imgPath = initialImagePath
            ? mediaLibraryPrefix + initialImagePath
            : defaultImageSrc;

        return (
            <img src={imgPath} className="news-item__image" />
        )
    }

    render = () => {

        return (

            <div className="news-item">

                {this.renderImg()}

                <div className="news-item__text">
                    <div className="news-item__date">{this.props.data.date}</div>
                    <div className="news-item__title">{this.props.data.title}</div>
                    <div className="news-item__summary">{this.props.data.summary}</div>
                    <a className="news-item__link" href={this.props.data.url}>
                        <i className="fa fa-caret-right"></i>
                        Read Article
                    </a>
                </div>

            </div>
        );
    }
}


export default NewsItem;

