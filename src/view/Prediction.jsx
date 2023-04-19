import React from 'react'
import '../css/prediction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Prediction(){
    return(
        <>
            <div className="prediction">
                <div className="prediction-top">
                    <h3>競輪予想 ウマい車券</h3>
                    <button>もっと見る</button>
                </div>
                <div className="prediction-body">
                    <div className="prediction-left">
                        <p>所有ポイント</p>
                        <button>購入履歴</button>
                    </div>
                    <div className="prediction-right">
                        <p><span>0</span> pt</p>
                        <FontAwesomeIcon icon={faCirclePlus} opacity="0.7"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prediction;