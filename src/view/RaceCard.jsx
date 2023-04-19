import React from 'react'

function RaceCard(props){
    return(
        <>
            <div className="race-detail">
                <h4>{props.location}</h4>
                <p>{props.condition}</p>
                <p>{props.date}</p>
            </div>
        </>
    )
}

export default RaceCard; 