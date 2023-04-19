import React from 'react'
import '../css/raceMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCoins, faTrophy, faPersonBiking, faFilm, faYen, faMagnifyingGlass, faChartLine, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function RaceMenu(){
    return(
        <> 
            <div className="raceMenu">
                <div className="receMenu-top">
                    <h3>競輪レースメニュー</h3>
                </div>
                <div className="raceMenu-body">
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faCalendarDays} color="#e03d3d" className="icon"/>
                        <p>開催日程</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faCoins} color="#e03d3d" className="icon"/>
                        <p>結果・払戻</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faTrophy} color="#e03d3d" className="icon"/>
                        <p style={{fontSize:11}}>グレードレース日程</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faPersonBiking} color="#e03d3d" className="icon"/>
                        <p>お気に入り選手</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faLocationDot} color="#e03d3d" className="icon"/>
                        <p>競輪場一覧</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faFilm} color="#e03d3d" className="icon"/>
                        <p>ライブ映像一覧</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faYen} color="#e03d3d" className="icon"/>
                        <p>チャージ</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#e03d3d" className="icon"/>
                        <p>連携メニュー</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faChartLine} color="#e03d3d" className="icon"/>
                        <p>My収支</p>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default RaceMenu;