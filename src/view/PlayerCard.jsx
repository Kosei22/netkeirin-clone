import React from 'react'

function PlayerCard(props){
    return(
        <>
            <div className="player">
                <div className="player-img">
                    <img src={props.img} alt="" width="70px"/>
                </div>
                <div className="player-info">
                    <a href="">{props.win}</a>
                    <h4>{props.name}</h4>
                    <p>{props.info}</p>
                </div>
                <div className="player-race">
                    <h4>{props.location} <span>{props.fi}</span> {props.r}</h4>
                    <p>{props.start}</p>
                    <p>{props.end}</p>
                </div>
            </div>
        </>
    )
}

export default PlayerCard;