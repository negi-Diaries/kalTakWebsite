import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0)
        let urls = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(10)
        setLoading(true);
        let data = await fetch(urls);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(100)
        // console.log(parsedData);
        setArticle(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        // props.setProgress(100)
    }

    useEffect(() => {
        document.title = `Sham Tak- ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        // eslint-disable-next-line
    }, [])




    const fetchMoreData = async () => {
        let urls = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1);
        setLoading(true)
        let data = await fetch(urls);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticle(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        console.log("hello world");
    }


    return (
        <>
            <h1 className="text-center" style={{ marginTop: "75px" }}> <span style={{ fontWeight: "bold" }}><i>Sham Tak Top </i></span><a style={{color: "green"}}>{capitalizeFirstLetter(props.category)} headlines</a></h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container my-3'>
                    <div className="row">
                        {article.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2022/09/28/10/43/sea-7484743__340.jpg"} newsUrl={element.url} author={element.author ? element.author.slice(0, 12) : "unknown"} publishedAt={element.publishedAt ? element.publishedAt : "unknown"} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
