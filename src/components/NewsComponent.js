import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const NewsComponent = ({ setProgress, country, category, apiKey, pageSize }) => {



    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    const capitlizeText = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    document.title = `${capitlizeText(category)}-NewsLetter`



    useEffect(() => {
        const updatenews = async () => {
            setProgress(10)
            const url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
            setloading(false)
            let data = await fetch(url);
            setProgress(30)
            let parsedData = await data.json();
            setProgress(60)
            setarticles(parsedData.articles)
            settotalResults(parsedData.totalResults)

            setloading(false)
            setProgress(100);
        }
        updatenews();
    }, [country, category, apiKey, page, pageSize, setProgress])





    const fetchMoreData = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        console.log(totalResults)
    }

    return (
        <>
            <div className='container mt-5'>
                <h2 className='m-5 rounded-lg p-4 shadow-lg bg-primary text-white'> News Letter - Top Headlines on {capitlizeText(category)} </h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row" >
                            {articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>

        </>
    )
}

NewsComponent.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'science'

}
NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}



export default NewsComponent