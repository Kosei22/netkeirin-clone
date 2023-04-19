import React from 'react'
import '../css/dateBase.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBicycle, faCalendarDays} from '@fortawesome/free-solid-svg-icons'

function DateBase(){
    return(
        <>
            <div className="dateBase">
                <div className="dateBase-top">
                    <h3>データベース</h3>
                    <button>もっと見る</button>
                </div>
                <div className="dateBase-form">
                    <select name="" id="" disabled="disabled">
                        <option value="">選手</option>
                        <option value="">レース</option>
                    </select>
                    <input type="search" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="dateBase-icon"/>
                </div>
                <div className="dateBase-racer">
                    <p>河内桜雪</p>
                    <p>野原雅也</p>
                    <p>佐藤愼太郎</p>
                    <p>飯田風音</p>
                </div>
                <div className="favorite">
                    <p>お気に入り選手</p>
                    <div className="favorite-body">
                        <div className="favorite-menu">
                            <FontAwesomeIcon icon={faBicycle} color="#e03d3d"/>
                            <p>登録選手</p>
                        </div>
                        <div className="favorite-menu">
                            <FontAwesomeIcon icon={faCalendarDays} color="#e03d3d" />
                            <p>出走情報</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DateBase;