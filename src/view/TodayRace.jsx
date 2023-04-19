import React from 'react'
import RaceCard from './RaceCard'
import '../css/todayRace.css'

function TodayRace(){
    return(
        <>
            <div className="todayRace">
                <h3>本日の競輪開催</h3>
                <div className="todayRace-details">
                    <RaceCard location="高知" condition="☀️" date="初日" />
                    <RaceCard location="立川" condition="☀️" date="2日目" />
                    <RaceCard location="奈良" condition="☀️" date="2日目" />
                    <RaceCard location="前橋" condition="☀️" date="最終日" />
                    <RaceCard location="伊東" condition="☀️" date="最終日" />
                    <RaceCard location="名古屋" condition="☀️" date="初日" />
                </div>
            </div>
        </>
    )
}

export default TodayRace;