import React from 'react'
import icon from '../images/playerImg.webp'

function RankingCard(props){
    return(
        <div className="rankingCard">
            <div className="rankingCard-img">
                <img src={icon} alt="" width="65px"/>
            </div>
            <div className="rankingCard-desc">
                <div className="rankingCard-desc-top">
                    <div className="rankingCard-dec-top-left">
                        <h4>{props.name}</h4>
                        <p>Lorem ipsum dolor sit ...</p>
                    </div>
                    <div className="rankingCard-dec-top-right">
                        <p>{props.num}</p>
                        <button>{props.show}</button>
                    </div>
                </div>
                <div className="rankingCard-desc-bottom">
                    <h3>{props.percent}</h3>
                    <p>{props.profit}</p>
                </div>
            </div>
        </div>
    )
}

export default RankingCard;