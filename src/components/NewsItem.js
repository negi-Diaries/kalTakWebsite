import React from 'react'

const NewsItem = (props) => {

        // let { title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props;
        return (
            <>
            <div className="my-3">
                <div className="card" >
                <div>
                <span className=' badge rounded-pill bg-dark' style={{display: "flex",justifyContent: "flex-end",position: "absolute", right: "0"}}>{props.source}</span>
                </div>
                    <img src={props.imageUrl} className="card-img-top" alt="..." style={{height:"155px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.description}...</p>
                        <p className="card-text"><small className="text-danger">By {props.author} at {new Date(props.publishedAt).toGMTString()}</small></p>
                        <div>
                        <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }


export default NewsItem
