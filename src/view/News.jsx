import React from 'react'
import NewsCard from './NewsCard'
import newsImg from '../images/newsImg.avif'
import '../css/news.css'

function News(){
    return(
        <>
            <div className="keirin-news">
                <div className="news-top">
                    <h3>新着競輪ニュース</h3>
                    <button>もっと見る</button>
                </div>
                <div className="news">
                    <NewsCard 
                    newsImg={newsImg} 
                    newsTitle=" Lorem ipsum dolor sit amet consectetur!"
                    newsDate="7時間前"/>
                    <NewsCard 
                    newsImg={newsImg} 
                    newsTitle=" Lorem ipsum dolor sit amet consectetur!"
                    newsDate="5時間前"/>
                    <NewsCard 
                    newsImg={newsImg} 
                    newsTitle=" Lorem ipsum dolor sit amet consectetur!"
                    newsDate="9時間前"/>
                    <NewsCard 
                    newsImg={newsImg} 
                    newsTitle=" Lorem ipsum dolor sit amet consectetur!"
                    newsDate="4時間前"/>
                    <NewsCard 
                    newsImg={newsImg} 
                    newsTitle=" Lorem ipsum dolor sit amet consectetur!"
                    newsDate="1時間前"/>
                </div>
            </div>
        </>
    )
}

export default News;