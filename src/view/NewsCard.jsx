import React from 'react'

function NewsCard(props){
    return(
        <>
            <div className="newsCard">
                <div className="newsImg">
                    <img src={props.newsImg} alt="" width="27%"/>
                </div>
                <div className="newsTitle">
                    <h4>{props.newsTitle}</h4>
                    <p>{props.newsDate}</p>
                </div>
            </div>
        </>
    )
}

export default NewsCard;