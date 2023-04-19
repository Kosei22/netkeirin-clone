import React from 'react'
import icon from '../images/playerImg.webp'
import '../css/racerColumn.css'

function RacerColumn(){
    return(
        <>
            <div className="racer-column">
                <div className="column-top">
                    <h3>コラム連載レーサー</h3>
                    <button>もっと見る</button>
                </div>
                <div className="column-body">
                    <div className="column-racer">
                        <img src={icon} alt="" width="68px" height="68px" className="racer-men"/>
                        <p>脇本雄太</p>
                    </div>
                    <div className="column-racer">
                        <img src={icon} alt="" width="68px" height="68px" className="racer-women"/>
                        <p>児玉碧衣</p>
                    </div>
                    <div className="column-racer">
                        <img src={icon} alt="" width="68px" height="68px" className="racer-women"/>
                        <p>太田りゆ</p>
                    </div>
                    <div className="column-racer">
                        <img src={icon} alt="" width="68px" height="68px" className="racer-men"/>
                        <p>浅井康太</p>
                    </div>
                    <div className="column-racer">
                        <img src={icon} alt="" width="68px" height="68px" className="racer-men"/>
                        <p>近藤龍徳</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RacerColumn;