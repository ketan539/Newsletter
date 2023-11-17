import React from 'react'


const NewsItem = (props) => {

    let { title, description, imageurl, newsurl, author, date, source } = props
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "80%", color: "white" }}>
                    {source}

                </span>
                <img src={imageurl ? imageurl : 'https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/WhatsApp_Image_2021-09-18_at_094218_1676852219810_1676852219960_1676852219960.jpeg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Anonymous" : author} at {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem