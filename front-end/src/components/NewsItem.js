import React from 'react'

function NewsItem(props){
    const {newsItem} = props;
    return(
        <div className="news-item">
            <a href="#" className="news-title mb-3">{newsItem.title}</a>
            <p>{newsItem.content}</p>
            <a href="#" className="read-more">
                READ MORE <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    )
}

export default NewsItem;