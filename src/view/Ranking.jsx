import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBills, faBullseye, faCalendarDays, faMedal, faStar } from '@fortawesome/free-solid-svg-icons'
import '../css/ranking.css'
import RankingCard from './RankingCard'

function Ranking(){
    return(
        <>
            <div className="rankings">
                <div className="ranking-top">
                    <h3>週間ランキング</h3>
                </div>
                <div className="ranking-body">
                    <div className="ranking">
                        <div className="ranking-top">
                            <h4>
                                <FontAwesomeIcon icon={faMoneyBills}/> 回収率(全場)
                            </h4> 
                        </div>
                        <RankingCard name="木村安記" num="☆ 1,229" show="公開中" percent="128%" profit="+527,110円"/>
                        <RankingCard name="Aiライン極" num="☆ 1349" show="公開中" percent="105%" profit="+273,060円"/>
                        <RankingCard name="高嶺凛" num="☆ 384" show="公開中" percent="100%" profit="+2,000円"/>
                    </div>
                    <div className="ranking">
                        <div className="ranking-top">
                           <h4>
                           <FontAwesomeIcon icon={faBullseye} /> 的中率
                           </h4> 
                        </div>
                        <RankingCard name="秋田麻子" num="☆ 597" show="公開中" percent="37%" profit="45R中 17R的中"/>
                        <RankingCard name="シュウの..." num="☆ 243" show="公開中" percent="35%" profit="360R中 128R的中"/>
                        <RankingCard name="ケイリン..." num="☆ 319" show="公開中" percent="33%" profit="146R中 49R的中"/>
                    </div>
                </div>
                <div className="ranking-menu">
                    <p className="hr">競輪予想を探す</p>
                    <div className="ranking-menu-body">
                        <div className="menuCard">
                            <FontAwesomeIcon icon={faCalendarDays} color="#e03d3d" className="icon"/>
                            <p>レース一覧</p>
                        </div>
                        <div className="menuCard">
                        <FontAwesomeIcon icon={faMedal} color="#e03d3d" className="icon"/>
                        <p>ランキング</p>
                    </div>
                    <div className="menuCard">
                        <FontAwesomeIcon icon={faStar} color="#e03d3d" className="icon"/>
                        <p>お気に入り</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ranking;